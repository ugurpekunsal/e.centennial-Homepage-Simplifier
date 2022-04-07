var enabled = true; //enabled by default
var myButton = document.getElementById("toggle");

function changeColour() {
  if (enabled) {
    myButton.style.cssText = "background-color: green";
  } else {
    myButton.style.cssText = "background-color: red";
  }
}

chrome.storage.local.get("enabled", (data) => {
  enabled = !!data.enabled;
  myButton.textContent = enabled ? "Enabled" : "Disabled";
  changeColour();
});

myButton.onclick = () => {
  enabled = !enabled;
  myButton.textContent = enabled ? "Enabled" : "Disabled";
  chrome.storage.local.set({ enabled: enabled });
  changeColour();
};
