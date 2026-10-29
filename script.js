
console.log("BrightPath website loaded successfully.");

const contactButton = document.querySelector(
  '.button[href="#contact"]'
);

if (contactButton) {
  contactButton.addEventListener("click", function () {
    console.log("The Contact Us button was clicked.");
  });
}
const freelancerName = "Musa";
let completedProjects = 1;

console.log(freelancerName);
console.log(completedProjects);

completedProjects = 5;
console.log(completedProjects);
const clientServices = [
  "Website Development",
  "AI Chatbot",
  "Automation"
];

function showServiceCount(services) {
  return services.length;
}

console.log(showServiceCount(clientServices));

const practiceButton = document.querySelector("#practice-button");
const practiceMessage = document.querySelector("#practice-message");

if (practiceButton && practiceMessage) {
  practiceButton.addEventListener("click", function () {
    practiceMessage.textContent =
      "Your business deserves better digital solutions!";
  });
}

const leadForm = document.querySelector("#lead-form");
const nameInput = document.querySelector("#lead-name");
const emailInput = document.querySelector("#lead-email");
const formMessage = document.querySelector("#form-message");

if (leadForm && nameInput && emailInput && formMessage) {
  leadForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" || email === "") {
      formMessage.textContent = "Please complete all fields.";
      return;
    }

    if (!emailInput.validity.valid) {
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    
      formMessage.textContent =
      "Thank you, " + customerName + "! Your form is valid.";
  

    leadForm.reset();
  });
}
