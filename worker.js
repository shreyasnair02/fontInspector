tooltip = document.getElementById("tooltip-ext");
// // Create a variable to store the tooltip element

// // Function to show the tooltip
// function showTooltip(text, x, y) {
//   tooltip.textContent = text;
//   tooltip.style.display = "block";
//   tooltip.style.left = x + 10 + "px"; // Adjust as needed
//   tooltip.style.top = y + 10 + "px"; // Adjust as needed
// }

// // Function to hide the tooltip
// function hideTooltip() {
//   tooltip.style.display = "none";
// }

// // Event listener for mousemove
// document.addEventListener("mousemove", fontTooltipMousemove);
// function fontTooltipMousemove(event) {
//   const target = event.target;

//   // Check if the target is a text element
//   if (
//     target instanceof HTMLElement &&
//     [
//       "P",
//       "H1",
//       "H2",
//       "H3",
//       "H4",
//       "H5",
//       "H6",
//       "SPAN",
//       "DIV",
//       "A",
//       "BUTTON",
//       "TEXTAREA",
//       "INPUT",
//       "LI",
//       "TD",
//       "TH",
//     ].includes(target.tagName)
//   ) {
//     showTooltip(
//       window.getComputedStyle(target).fontFamily,
//       event.clientX,
//       event.clientY
//     );
//   } else {
//     hideTooltip();
//   }
// }

// // Event listener for scroll
// document.addEventListener("scroll", hideTooltip);
// Function to show the tooltip
function showTooltip(info, x, y) {
  tooltip.innerHTML = info;
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
    ![
      "IMG",
      "VIDEO",
      "AUDIO",
      "CANVAS",
      "SVG",
      "OBJECT",
      "EMBED",
      "IFRAME",
      "SCRIPT",
      "STYLE",
    ].includes(target.tagName)
  ) {
    const computedStyle = window.getComputedStyle(target);
    const fontFamilyList = computedStyle.fontFamily
      .split(",")
      .map((font) => font.trim());
    const fontFamiliesToShow = fontFamilyList.slice(0, 3).join(", ");

    const rgbColor = computedStyle.color.match(/\d+/g).map(Number);
    const rgbCircle = `<span style="display: inline-block; width: 15px; height: 15px; border-radius: 50%; background-color: rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]}); margin-right: 5px;"></span>`;

    const info = `
       Font Family: ${fontFamiliesToShow}<br>
      Font Weight: ${computedStyle.fontWeight}<br>
      Font Size: ${computedStyle.fontSize}<br>
      Font Color: ${rgbCircle}${computedStyle.color}<br>
      Line Height: ${computedStyle.lineHeight}
    `;

    showTooltip(info, event.clientX, event.clientY);
  } else {
    hideTooltip();
  }
}

// Event listener for scroll
document.addEventListener("scroll", hideTooltip);
