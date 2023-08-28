const toggleButton = document.getElementById("toggleButton");
let isActive = localStorage.getItem("extensionActive") === "true";

// Function to toggle the content script activation
async function toggleActivation() {
  isActive = !isActive;

  localStorage.setItem("extensionActive", isActive);
  const tabID = await getTabId();
  if (isActive) {
    console.log(isActive, "happend");
    chrome.scripting.executeScript({
      target: { tabId: tabID },
      files: ["worker.js"],
    });
    toggleButton.textContent = "Deactivate Font Tooltip";
  } else {
    chrome.scripting.executeScript({
      target: { tabId: tabID },
      func: () => {
        document.removeEventListener("mousemove", fontTooltipMousemove);
        document.removeEventListener("scroll", hideTooltip);
        document.getElementById("tooltip-ext").style.display = "none";
      },
    }); // Remove event listener
    toggleButton.textContent = "Activate Font Tooltip";
  }
}

// Update the button text based on the stored state
toggleButton.textContent = isActive
  ? "Deactivate Font Tooltip"
  : "Activate Font Tooltip";

// Event listener for the toggle button
toggleButton.addEventListener("click", toggleActivation);

// Rest of your functions remain the same
function getTabId() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs.length > 0) {
        resolve(tabs[0].id);
      } else {
        resolve(null);
      }
    });
  });
}
