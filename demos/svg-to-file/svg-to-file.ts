function downloadSVG() {
  const svgElement = document.querySelector("svg");
  const svgData = new XMLSerializer().serializeToString(svgElement);
  const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "my-svg.svg";
  link.click();
}

window.addEventListener("load", () => {
  downloadSVG()
})
