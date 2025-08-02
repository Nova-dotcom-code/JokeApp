const jokeButton = document.getElementById('joke-button');
const jokeBox = document.getElementById('jokeBox');
const apiUrl = 'https://official-joke-api.appspot.com/random_joke';

jokeBox.textContent = 'Click the button to get a joke!😅 🤣 ...';
jokeButton.addEventListener('click', async ()=> {
    try {
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error('Network response was not ok')
        }
        const jokeData = await response.json();
        jokeBox.textContent = `😂😂😂${jokeData.setup}-${jokeData.punchline}`;
    }
})