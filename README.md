# (phase-1-javascript-project-mode)

#### Date, 2024/04/15

#### Author *Arnold*

## code
async function fetchAge() {
    const name = document.getElementById("nameInput").value.trim();
    console.log("Name entered:", name);
  
    if (!name) {
      alert("Please enter a name");
      console.log("Name is empty");
      return;
    }
  
    const response = await fetch(`https://api.agify.io/?name=${name}`);
    console.log("Response from API:", response);
  
    if (!response.ok) {
      alert("Failed to fetch age");
      console.log("Failed to fetch age. Response status:", response.status);
      return;
    }
  
    const data = await response.json();
    console.log("Data received from API:", data);
  
    if (data.age) {
      document.getElementById("ageDisplay").textContent = `${name} is ${data.age} years old`;
    } else {
      document.getElementById("ageDisplay").textContent = `Age not found for ${name}`;
    }
  }

**Description**
This function is designed to fetch the age of a person using their name as input. It interacts with an external API (https://api.agify.io/) to retrieve the age data based on the provided name. The function then updates the age display on the webpage accordingly.

**Functionality**
Takes the name input from an HTML input field.
Validates the input to ensure a name is provided.
Fetches age data from the API based on the provided name.
Displays the fetched age information on the webpage.

## Installation
You use git clone to be able to download the documents in the GitHub

## Installation Requirements
Git

## Technologies used
Github
Javascript
