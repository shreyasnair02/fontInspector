tooltip = document.getElementById("tooltip-ext");
// Create a variable to store the tooltip element

// Function to show the tooltip
function showTooltip(text, x, y) {
  tooltip.textContent = "Font Family: " + text;
  tooltip.style.display = "block";
  tooltip.style.left = x + 10 + "px"; // Adjust as needed
  tooltip.style.top = y + 10 + "px"; // Adjust as needed
}

// Function to hide the tooltip
function hideTooltip() {
  tooltip.style.display = "none";
}

// Event listener for mousemove
document.addEventListener("mousemove", fontTooltipMousemove);
function fontTooltipMousemove(event) {
  const target = event.target;

  // Check if the target is a text element
  if (
    target instanceof HTMLElement &&
    [
      "P",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "SPAN",
      "DIV",
      "A",
      "BUTTON",
      "TEXTAREA",
      "INPUT",
      "LI",
      "TD",
      "TH",
    ].includes(target.tagName)
  ) {
    showTooltip(
      window.getComputedStyle(target).fontFamily,
      event.clientX,
      event.clientY
    );
  } else {
    hideTooltip();
  }
}

// Event listener for scroll
document.addEventListener("scroll", hideTooltip);
