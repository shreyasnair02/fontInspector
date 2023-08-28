let tooltip = document.createElement("div");
tooltip.style.position = "fixed";
tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
tooltip.style.color = "white";
tooltip.style.padding = "5px";
tooltip.style.borderRadius = "5px";
tooltip.style.zIndex = "9999";
tooltip.style.pointerEvents = "none";
tooltip.style.display = "none"; // Hide initially
tooltip.setAttribute("id", "tooltip-ext");
document.body.appendChild(tooltip);
