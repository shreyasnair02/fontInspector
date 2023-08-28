tooltip = document.getElementById("tooltip-ext");

function showTooltip(info, x, y) {
  tooltip.innerHTML = info;
  tooltip.style.display = "block";
  tooltip.style.left = x + 10 + "px";
  tooltip.style.top = y + 10 + "px";
}

function hideTooltip() {
  tooltip.style.display = "none";
}

document.addEventListener("mousemove", fontTooltipMousemove);
function fontTooltipMousemove(event) {
  const target = event.target;

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

document.addEventListener("scroll", hideTooltip);
