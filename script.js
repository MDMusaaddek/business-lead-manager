
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
    practiceMesage.textContent =
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
function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }

  return a / b;
}

try {
  const result = divideNumbers(10, 2);
  console.log("Result:", result);
} catch (error) {
  console.error("Calculation failed:", error.message);
}

const leadStatus = "Contacted";

if (leadStatus === "New") {
  console.log("This lead needs attention.");
} else if (leadStatus === "Contacted") {
  console.log("Follow up with this client.");
} else {
  console.log("No action required right now.");
}

const leads = [
  { name: "Alex", status: "New" },
  { name: "Sarah", status: "Contacted" },
  { name: "John", status: "New" }
];

for (const lead of leads) {
  console.log(lead.name + " - " + lead.status);
}

const lead = {
  name: "Alex Morgan",
  email: "alex@example.com",
  service: "AI Chatbot",
  status: "New",
  budget: 500
};

console.log(lead);
console.log(lead.name);
console.log(lead.service);
console.log(lead.budget);

lead.status = "Contacted";
lead.budget = 750;

console.log(lead.status);
console.log(lead.budget);

const allLeads = [
  { name: "Alex", status: "New", budget: 500 },
  { name: "Sarah", status: "Contacted", budget: 800 },
  { name: "John", status: "New", budget: 300 },
  { name: "Maria", status: "Qualified", budget: 1200 }
];

const newLeads = allLeads.filter(function (lead) {
  return lead.status === "New";
});

console.log(newLeads);
console.log("New leads:", newLeads.length);

const leadNames = allLeads.map(function (lead) {
  return lead.name;
});

console.log(leadNames);

const newLeadNames = allLeads
  .filter(function (lead) {
    return lead.status === "New";
  })
  .map(function (lead) {
    return lead.name;
  });

console.log(newLeadNames);

// 1. Create sample leads
const managerLeads = [
  { name: "Alex Morgan", status: "New" },
  { name: "Sarah Johnson", status: "Contacted" },
  { name: "John Smith", status: "New" },
  { name: "Maria Garcia", status: "Contacted" },
  { name: "David Wilson", status: "New" }
];

// 2. Select HTML elements
const leadList = document.querySelector("#lead-list");
const statusFilter = document.querySelector("#status-filter");

// 3. Create a function to display leads
function displayLeads(leads) {
  leadList.innerHTML = "";

  leads.forEach(function (lead) {
    const listItem = document.createElement("li");

    listItem.textContent =
      lead.name + " - " + lead.status;

    leadList.appendChild(listItem);
  });
}

// 4. Filter leads when dropdown changes
if (leadList && statusFilter) {
  displayLeads(managerLeads);

  statusFilter.addEventListener("change", function () {
    const selectedStatus = statusFilter.value;

    const filteredLeads = selectedStatus === "All"
      ? managerLeads
      : managerLeads.filter(function (lead) {
          return lead.status === selectedStatus;
        });

    displayLeads(filteredLeads);
  });
}

const newLeadForm = document.querySelector("#new-lead-form");
const newLeadName = document.querySelector("#new-lead-name");
const newLeadStatus = document.querySelector("#new-lead-status");

if (newLeadForm && newLeadName && newLeadStatus) {
  newLeadForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = newLeadName.value.trim();
if (name.length < 3) {
  alert("Name must contain at least 3 characters.");
  return;
}
const duplicateLead = managerLeads.some(function (lead) {
  return lead.name.toLowerCase() === name.toLowerCase();
});

if (duplicateLead) {
  alert("This lead already exists!");
  return;
}

    const newLead = {
      name: name,
      status: newLeadStatus.value
    };

    managerLeads.push(newLead);

    displayLeads(
      statusFilter.value === "All"
        ? managerLeads
        : managerLeads.filter(function (lead) {
            return lead.status === statusFilter.value;
          })
    );

    newLeadForm.reset();
  });
}
