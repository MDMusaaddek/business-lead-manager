
console.log("BrightPath website loaded successfully.");

const contactButton = document.querySelector(
  '.button[href="#contact"]'
);

if (contactButton) {
  contactButton.addEventListener("click", function () {
    console.log("The Contact Us button was clicked.");
  });
}
