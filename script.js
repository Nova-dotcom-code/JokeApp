const jokeButton = document.getElementById('joke-button');
const jokeBox = document.getElementById('jokeBox');
// API endpoint for fetching a random joke

const apiUrl = 'https://official-joke-api.appspot.com/random_joke';
//set initial message in the joke box
jokeBox.textContent = 'Click the button to get a joke!😅🤣 ...';
// Add click event listener to the button
jokeButton.addEventListener('click', async ()=> {
  // When the button is clicked, fetch a joke from the API and display it in the jokeBox
  try {
    // Fetch a random joke from the API
    jokeBox.textContent = "Loading joke... Please wait...";
    const response = await fetch(apiUrl);
    if (!response.ok) {
        //Handle network errors
      jokeBox.textContent = "Network error. Please try again later.";
        // If the response is not ok, throw an error
      throw new Error("Network response was not ok");
    }
    // Parse the joke data from the response as JSON
    const jokeData = await response.json();
    // Display the joke in the jokeBox
    // Use template literals to format the joke with emojis
    jokeBox.textContent = `😂😂😂${jokeData.setup}-${jokeData.punchline}`;
  } catch (error) {
    // If there is an error fetching the joke, display an error message
    // and log the error to the console
    jokeBox.textContent = "Failed to fetch a joke. Please try again later.";
    console.error("Error fetching joke:", error);
  }
  //After 6 seconds, reset the jokeBox to the initial message
  // This gives the user time to read the joke before it resets
  setTimeout(() => {
    jokeBox.textContent = "Click the button to get another joke!😅🤣 ...";
  }, 10000);
})