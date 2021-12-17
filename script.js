document.getElementById("menuButton").addEventListener("click", () => {
  document.getElementById("navigation").dataset.displayStatus = "Show";
  document.getElementById("closeButton").dataset.displayStatus = "Show";
});

document.getElementById("closeButton").addEventListener("click", () => {
  delete document.getElementById("navigation").dataset.displayStatus;
  delete document.getElementById("closeButton").dataset.displayStatus;
});

document.querySelectorAll(".showMore").forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.parentElement.querySelector("ul").dataset.displayStatus = "Show";
    elem.dataset.displayStatus = "Hiding";
  });
});

document.querySelectorAll(".faqs .h5").forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.dataset.displayStatus = "Show";
  });
});

document.querySelectorAll(".serviceWeOffer .h5").forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.dataset.displayStatus = "Show";
  });
});
