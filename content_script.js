chrome.storage.local.get("enabled", (data) => {
  if (data.enabled) {
    var element = document.querySelector("div.homepage-col-12");
    element.parentElement.removeChild(element);
    myButton.style.cssText = "background-color: green";
  }
});
