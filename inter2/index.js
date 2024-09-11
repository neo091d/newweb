// JavaScript code with key features: functions, objects, async/await, and basic operations

// Creating an object to hold user data
let userData = {
  name: "",
  email: "",
  age: 0,
  gender: "",
  bio: "",
  subscribe: false,
};

// Function to update userData from the form
function collectFormData() {
  const form = document.getElementById("userForm");
  userData.name = form.name.value;
  userData.email = form.email.value;
  userData.age = parseInt(form.age.value);
  userData.gender = form.gender.value;
  userData.bio = form.bio.value;
  userData.subscribe = form.subscribe.checked;
}

// Basic operation: checking form data validity
function validateData() {
  if (!userData.name || !userData.email || !userData.age || !userData.gender) {
    alert("Please fill all the required fields.");
    return false;
  }
  return true;
}

// Async/Await example for a mock API call (simulating data submission)
async function submitData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data submitted successfully!");
    }, 2000);
  });
}

// Handling form submission with async/await
async function handleSubmit() {
  collectFormData();
  if (validateData()) {
    try {
      const result = await submitData();
      document.getElementById("result").innerText = result;
      document.getElementById("result").style.display = "block";
      clearForm();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }
}

// Basic operation: clearing the form after submission
function clearForm() {
  document.getElementById("userForm").reset();
  userData = {
    name: "",
    email: "",
    age: 0,
    gender: "",
    bio: "",
    subscribe: false,
  };
}
