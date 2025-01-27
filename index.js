<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dad Joke Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }

        .container {
            text-align: center;
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
        }

        button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 20px;
        }

        button:hover {
            background-color: #45a049;
        }

        p {
            font-size: 18px;
            color: #555;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Dad Joke Generator</h1>
        <p id="joke"></p>
        <button id="new-joke-btn">Get a New Joke</button>
    </div>

    <script>
        const jokes = [
            "Why don’t skeletons fight each other? They don’t have the guts.",
            "I only know 25 letters of the alphabet. I don’t know y.",
            "I used to play piano by ear, but now I use my hands.",
            "What did one ocean say to the other ocean? Nothing, they just waved.",
            "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            "What do you call fake spaghetti? An impasta.",
            "I’m reading a book on anti-gravity. It’s impossible to put down!",
            "Why don’t eggs tell jokes? They might crack up.",
            "How does a penguin build its house? Igloos it together.",
            "I asked the librarian if the library had any books on paranoia. She whispered, 'They’re right behind you.'",
            "What do you call a can opener that doesn’t work? A can’t opener.",
            "Why can’t you hear a pterodactyl go to the bathroom? Because the 'P' is silent.",
            "What do you call a pile of cats? A meow-tain.",
            "I’m on a whiskey diet. I’ve lost three days already.",
            "I used to be a baker, but I couldn’t make enough dough.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
            "What’s orange and sounds like a parrot? A carrot.",
            "What did the left eye say to the right eye? Between you and me, something smells."
        ];

        const jokeElement = document.getElementById('joke');
        const newJokeButton = document.getElementById('new-joke-btn');

        // Function to display a random joke
        function displayRandomJoke() {
            const randomIndex = Math.floor(Math.random() * jokes.length);
            jokeElement.textContent = jokes[randomIndex];
        }

        // Event listener for the button to show a new joke
        newJokeButton.addEventListener('click', displayRandomJoke);

        // Display the first joke when the page loads
        window.onload = displayRandomJoke;
    </script>
</body>
</html>
