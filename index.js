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

