async function fetchAge() {
  // Get the value of the name input field and remove leading and trailing whitespace
  const name = document.getElementById("nameInput").value.trim();
  // Log the name entered to the console
  console.log("Name entered:", name);

  // Check if the name is empty
  if (!name) {
      // If the name is empty, show an alert message
      alert("Please enter a name");
      // Log a message indicating that the name is empty
      console.log("Name is empty");
      // Exit the function
      return;
  }

  // Send a request to the agify.io API to fetch age data based on the provided name
  const response = await fetch(`https://api.agify.io/?name=${name}`);
  // Log the response from the API to the console
  console.log("Response from API:", response);

  // Check if the response is not okay (status code other than 200)
  if (!response.ok) {
      // If the response is not okay, show an alert message
      alert("Failed to fetch age");
      // Log a message indicating that fetching age failed along with the response status code
      console.log("Failed to fetch age. Response status:", response.status);
      // Exit the function
      return;
  }

  // Parse the JSON data from the response
  const data = await response.json();
  // Log the received data from the API to the console
  console.log("Data received from API:", data);

  // Check if age data is available in the response
  if (data.age) {
      // If age data is available, display the name and age on the webpage
      document.getElementById("ageDisplay").textContent = `${name} is ${data.age} years old`;
  } else {
      // If age data is not available, display a message indicating age not found for the provided name
      document.getElementById("ageDisplay").textContent = `Age not found for ${name}`;
  }
}
