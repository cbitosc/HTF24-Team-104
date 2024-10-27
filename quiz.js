const questions = {
    naruto: {
        background: "url('https://images6.alphacoders.com/135/1351738.jpeg')",
        mcq: [
            { prompt: "Who is the 7th Hokage?", options: ["Naruto", "Sasuke", "Kakashi", "Minato"], answer: "Naruto" },
            { prompt: "Who founded the Hidden Leaf Village?", options: ["Hashirama", "Madara", "Hiruzen", "Minato"], answer: "Hashirama" },
            { prompt: "Who is known as the Copy Ninja?", options: ["Kakashi", "Jiraiya", "Orochimaru", "Itachi"], answer: "Kakashi" },
            { prompt: "Naruto is part of which team?", options: ["Team 7", "Team 8", "Team 10", "Team 6"], answer: "Team 7" },
            { prompt: "Who was Naruto’s first teacher?", options: ["Iruka", "Kakashi", "Jiraiya", "Asuma"], answer: "Iruka" },
            { prompt: "What is Sasuke’s primary goal?", options: ["Become Hokage", "Revive his clan", "Destroy Konoha", "Kill Itachi"], answer: "Kill Itachi" },
            { prompt: "What is the name of Naruto’s mother?", options: ["Kushina", "Mikoto", "Kurenai", "Tsunade"], answer: "Kushina" },
            { prompt: "Which clan is known for its Byakugan?", options: ["Hyuga", "Uchiha", "Senju", "Akimichi"], answer: "Hyuga" },
            { prompt: "What is the Nine-Tails' real name?", options: ["Kurama", "Gyuki", "Shukaku", "Matatabi"], answer: "Kurama" },
            { prompt: "What is the name of Naruto’s rival?", options: ["Sasuke", "Neji", "Kiba", "Shikamaru"], answer: "Sasuke" },
        ],
        trueFalse: [
            { prompt: "Naruto has no siblings.", options: ["true", "false"], answer: "true" },
            { prompt: "Naruto was once shunned by the village.", options: ["true", "false"], answer: "true" },
            { prompt: "Sakura is a jinchuriki.", options: ["true", "false"], answer: "false" },
            { prompt: "The Uchiha clan specializes in genjutsu.", options: ["true", "false"], answer: "true" },
            { prompt: "Naruto’s favorite food is sushi.", options: ["true", "false"], answer: "false" },
            { prompt: "Gaara is from the Hidden Sand Village.", options: ["true", "false"], answer: "true" },
            { prompt: "Naruto mastered the Chidori.", options: ["true", "false"], answer: "false" },
            { prompt: "Hinata is part of the Hyuga Clan.", options: ["true", "false"], answer: "true" },
            { prompt: "Naruto’s father was the Fourth Hokage.", options: ["true", "false"], answer: "true" },
            { prompt: "The Sharingan can copy jutsu.", options: ["true", "false"], answer: "true" }
        ],
        fillInTheBlank: [
            { prompt: "Sasuke’s older brother is named _______.", answer: "Itachi" },
            { prompt: "Naruto’s signature jutsu is _______.", answer: "Shadow Clone Jutsu" },
            { prompt: "The Uchiha clan’s dojutsu is the _______.", answer: "Sharingan" },
            { prompt: "The tailed beast inside Naruto is _______.", answer: "Kurama" },
            { prompt: "Naruto’s mother’s name is _______.", answer: "Kushina" },
            { prompt: "Naruto trained with _______ for two years.", answer: "Jiraiya" },
            { prompt: "The 3rd Hokage is _______.", answer: "Hiruzen" },
            { prompt: "Sakura specializes in _______ release.", answer: "Medical" },
            { prompt: "Naruto’s son is named _______.", answer: "Boruto" },
            { prompt: "The ninja exams Naruto takes are called the _______ exams.", answer: "Chunin" },
        ]        
    },
    one_piece: {
        background: "url('https://images2.alphacoders.com/136/1369365.jpeg')",
        mcq: [
            { prompt: "Who is the main protagonist of One Piece?", options: ["Zoro", "Sanji", "Luffy", "Nami"], answer: "Luffy" },
            { prompt: "Luffy’s dream is to find the _______.", options: ["All Blue", "One Piece", "Treasure", "Devil Fruits"], answer: "One Piece" },
            { prompt: "Who is the captain of the Straw Hat Pirates?", options: ["Zoro", "Nami", "Usopp", "Luffy"], answer: "Luffy" },
            { prompt: "What is Zoro’s goal?", options: ["Become Pirate King", "Find All Blue", "Be Strongest Swordsman", "Collect Devil Fruits"], answer: "Be Strongest Swordsman" },
            { prompt: "Who is the Straw Hats’ navigator?", options: ["Nami", "Robin", "Usopp", "Sanji"], answer: "Nami" },
            { prompt: "Who is the Straw Hats’ chef?", options: ["Sanji", "Brook", "Chopper", "Usopp"], answer: "Sanji" },
            { prompt: "What power does Luffy gain from the Gomu Gomu fruit?", options: ["Ice", "Fire", "Stretching", "Invisibility"], answer: "Stretching" },
            { prompt: "Who is known as the 'Pirate Hunter'?", options: ["Luffy", "Zoro", "Sanji", "Usopp"], answer: "Zoro" },
            { prompt: "Who has the power of the Suna Suna fruit?", options: ["Crocodile", "Luffy", "Zoro", "Sanji"], answer: "Crocodile" },
            { prompt: "Where did the Straw Hats start their journey?", options: ["East Blue", "North Blue", "Grand Line", "New World"], answer: "East Blue" },
        ],
        trueFalse: [
            { prompt: "Luffy’s grandfather is a Marine.", options: ["true", "false"], answer: "true" },
            { prompt: "Sanji is the Straw Hats’ swordsman.", options: ["true", "false"], answer: "false" },
            { prompt: "All Devil Fruits give the same powers.", options: ["true", "false"], answer: "false" },
            { prompt: "Nami is the ship’s navigator.", options: ["true", "false"], answer: "true" },
            { prompt: "Usopp is a skilled sniper.", options: ["true", "false"], answer: "true" },
            { prompt: "The Straw Hats’ ship is called the Thousand Sunny.", options: ["true", "false"], answer: "true" },
            { prompt: "The Grand Line is a dangerous sea route.", options: ["true", "false"], answer: "true" },
            { prompt: "Luffy can swim.", options: ["true", "false"], answer: "false" },
            { prompt: "The Straw Hat flag has a skull with a straw hat.", options: ["true", "false"], answer: "true" },
            { prompt: "The One Piece treasure is easy to find.", options: ["true", "false"], answer: "false" },
        ],
        fillInTheBlank: [
            { prompt: "Luffy’s first ship was called the _______.", answer: "Going Merry" },
            { prompt: "The current ship of the Straw Hats is the _______.", answer: "Thousand Sunny" },
            { prompt: "Nami’s main weapon is the _______.", answer: "Clima-Tact" },
            { prompt: "The most wanted man in the world is _______.", answer: "Monkey D. Dragon" },
            { prompt: "Usopp’s alter ego is known as _______.", answer: "Sogeking" },
            { prompt: "Robin is an archaeologist from _______.", answer: "Ohara" },
            { prompt: "Sanji's dream is to find the _______.", answer: "All Blue" },
            { prompt: "The Straw Hats’ musician is _______.", answer: "Brook" },
            { prompt: "Luffy's bounty after Enies Lobby was _______ berries.", answer: "300 million" },
            { prompt: "The weapon used to destroy islands is called _______.", answer: "Pluton" },
        ]        
    },
    attack_on_titan: {
        background: "url('https://wallpaper.dog/large/20466077.jpg')",
        mcq: [
            { prompt: "Who is the main protagonist in Attack on Titan?", options: ["Armin", "Mikasa", "Eren", "Levi"], answer: "Eren" },
            { prompt: "What is Eren's Titan called?", options: ["Armored Titan", "Colossal Titan", "Attack Titan", "Beast Titan"], answer: "Attack Titan" },
            { prompt: "Who is the commander of the Survey Corps?", options: ["Hange", "Erwin", "Levi", "Mikasa"], answer: "Erwin" },
            { prompt: "What is the name of the first wall breached by Titans?", options: ["Wall Maria", "Wall Rose", "Wall Sina", "Wall Titan"], answer: "Wall Maria" },
            { prompt: "Which character is known as the 'Humanity's Strongest Soldier'?", options: ["Erwin", "Levi", "Eren", "Jean"], answer: "Levi" },
            { prompt: "Who is the Armored Titan?", options: ["Reiner", "Bertolt", "Zeke", "Eren"], answer: "Reiner" },
            { prompt: "Who kills the Beast Titan for the first time?", options: ["Levi", "Eren", "Mikasa", "Armin"], answer: "Levi" },
            { prompt: "What organization opposes the Survey Corps within the walls?", options: ["Garrison", "Military Police", "Warriors", "Jaegerists"], answer: "Military Police" },
            { prompt: "Who is Zeke's half-brother?", options: ["Levi", "Armin", "Eren", "Mikasa"], answer: "Eren" },
            { prompt: "What is the Titan power that can manipulate other Titans?", options: ["Colossal", "Female", "Attack", "Founding"], answer: "Founding" },
        ],
        trueFalse: [
            { prompt: "Eren's mother was eaten by a Titan.", options: ["true", "false"], answer: "true" },
            { prompt: "The Colossal Titan is the tallest Titan.", options: ["true", "false"], answer: "true" },
            { prompt: "Mikasa is related to Eren by blood.", options: ["true", "false"], answer: "false" },
            { prompt: "The Survey Corps primarily operates outside the walls.", options: ["true", "false"], answer: "true" },
            { prompt: "Only Eldians can become Titans.", options: ["true", "false"], answer: "true" },
            { prompt: "Levi Ackerman is the shortest character in the Survey Corps.", options: ["true", "false"], answer: "true" },
            { prompt: "Armin becomes the Colossal Titan.", options: ["true", "false"], answer: "true" },
            { prompt: "Annie is the Female Titan.", options: ["true", "false"], answer: "true" },
            { prompt: "Jean Kirschtein can transform into a Titan.", options: ["true", "false"], answer: "false" },
            { prompt: "Titans are naturally intelligent creatures.", options: ["true", "false"], answer: "false" },
        ],        
        fillInTheBlank: [
            { prompt: "Eren's childhood friend and protector is _______.", answer: "Mikasa" },
            { prompt: "The group that opposes Titans within the walls is called the _______ Corps.", answer: "Survey" },
            { prompt: "_______ is known as the Armored Titan.", answer: "Reiner" },
            { prompt: "Zeke Yeager is known as the _______ Titan.", answer: "Beast" },
            { prompt: "_______ sacrificed himself in the battle of Shiganshina.", answer: "Erwin" },
            { prompt: "The first wall breached by Titans is Wall _______.", answer: "Maria" },
            { prompt: "_______ is the name of the power to control other Titans.", answer: "Founding" },
            { prompt: "The first commander of the Survey Corps was _______.", answer: "Erwin" },
            { prompt: "_______ becomes the Colossal Titan after Bertolt.", answer: "Armin" },
            { prompt: "The Survey Corps uses special _______ to fight Titans.", answer: "gear" },
        ]        
    },
    death_note: {
        background: "url('https://c4.wallpaperflare.com/wallpaper/830/710/381/anime-death-note-l-death-note-wallpaper-preview.jpg')",
        mcq: [
            { prompt: "Who is the main character in Death Note?", options: ["L", "Light", "Misa", "Near"], answer: "Light" },
            { prompt: "What is the name of the Shinigami that drops the Death Note?", options: ["Ryuk", "Rem", "Mikami", "Sidoh"], answer: "Ryuk" },
            { prompt: "What is Light's goal with the Death Note?", options: ["To become a god", "To defeat L", "To rule the world", "To become a Shinigami"], answer: "To become a god" },
            { prompt: "Who is Light's main rival?", options: ["L", "Misa", "Near", "Mello"], answer: "L" },
            { prompt: "What organization is L affiliated with?", options: ["FBI", "ICPO", "CIA", "KGB"], answer: "ICPO" },
            { prompt: "What name does Light use as an alias?", options: ["Kira", "L", "Misa", "Near"], answer: "Kira" },
            { prompt: "Which Shinigami falls in love with Misa?", options: ["Ryuk", "Rem", "Sidoh", "Geha"], answer: "Rem" },
            { prompt: "What does L frequently eat?", options: ["Cake", "Chocolate", "Candy", "Ice Cream"], answer: "Cake" },
            { prompt: "How many rules are written in the Death Note?", options: ["Five", "Seven", "Six", "Four"], answer: "Six" },
            { prompt: "What is the name of Light's father?", options: ["Soichiro", "Ryuk", "Near", "Aizawa"], answer: "Soichiro" },
        ],
        trueFalse: [
            { prompt: "The Death Note can kill anyone whose name is written in it.", options: ["true", "false"], answer: "true" },
            { prompt: "Light Yagami is a police officer.", options: ["true", "false"], answer: "false" },
            { prompt: "Ryuk is the Shinigami who owns the Death Note.", options: ["true", "false"], answer: "true" },
            { prompt: "Misa Amane is a famous actress.", options: ["true", "false"], answer: "false" },
            { prompt: "L is killed by Light.", options: ["true", "false"], answer: "true" },
            { prompt: "Shinigami are afraid of humans.", options: ["true", "false"], answer: "false" },
            { prompt: "The Death Note must be used every 13 days to remain effective.", options: ["true", "false"], answer: "true" },
            { prompt: "Light's mother suspects him of being Kira.", options: ["true", "false"], answer: "false" },
            { prompt: "Ryuk is visible to anyone who touches the Death Note.", options: ["true", "false"], answer: "true" },
            { prompt: "L's identity is known to the public.", options: ["true", "false"], answer: "false" },
        ],

        fillInTheBlank: [
            { prompt: "The alias Light uses when acting as a vigilante is _______.", answer: "Kira" },
            { prompt: "The Death Note belongs to a Shinigami named _______.", answer: "Ryuk" },
            { prompt: "The world-renowned detective who pursues Kira is _______.", answer: "L" },
            { prompt: "Light's main rival after L is _______.", answer: "Near" },
            { prompt: "The tool Light uses to kill criminals is called the _______.", answer: "Death Note" },
            { prompt: "Misa's Shinigami is named _______.", answer: "Rem" },
            { prompt: "The country where the Death Note story primarily takes place is _______.", answer: "Japan" },
            { prompt: "The organization that assists L in catching Kira is the _______.", answer: "ICPO" },
            { prompt: "Light's father is a police officer named _______.", answer: "Soichiro" },
            { prompt: "The Death Note can only be used if the victim's _______ is known.", answer: "face" },
        ],        
    }
};

const timerEl = document.querySelector("#timer");
const questionsEl = document.querySelector("#questions");
const optionsEl = document.querySelector("#options");
const startBtn = document.querySelector("#start");
const feedbackEl = document.querySelector("#feedback");
const animeSelect = document.querySelector("#anime-select");
const scoreFinalEl = document.querySelector("#score-final");
const nameInput = document.querySelector("#name");
const submitScoreBtn = document.querySelector("#submit-score");
const leaderboardEl = document.querySelector("#leaderboard");

let currentQuestionSet = [];
let currentQuestionIndex = 0;
let totalTime = 120; // 120 seconds total for the quiz
let totalTimer; // Overall quiz timer
let correctAnswersCount = 0; // To track correct answers

startBtn.onclick = startQuiz;

function startQuiz() {
    const anime = animeSelect.value;
    if (!anime) {
        alert("Please select an anime series.");
        return;
    }

    setBackground(anime);
    loadQuestionSet(anime);

    document.querySelector("#quiz-start").classList.add("hide");
    questionsEl.classList.remove("hide");

    totalTime = 120; // Reset total time
    timerEl.textContent = totalTime;

    startTotalTimer(); // Start the overall timer
    showQuestion();
}

function setBackground(anime) {
    const bg = questions[anime]?.background;
    if (bg) document.body.style.backgroundImage = bg;
}

function loadQuestionSet(anime) {
    const allQuestions = questions[anime];
    currentQuestionSet = [
        ...getRandomQuestions(allQuestions.mcq, 5),
        ...getRandomQuestions(allQuestions.trueFalse, 5),
        ...getRandomQuestions(allQuestions.fillInTheBlank, 5)
    ];
    currentQuestionIndex = 0;
}

function getRandomQuestions(array, count) {
    return array.sort(() => Math.random() - 0.5).slice(0, count);
}

function showQuestion() {
    const question = currentQuestionSet[currentQuestionIndex];

    document.querySelector("#question-text").textContent = question.prompt;
    optionsEl.innerHTML = "";

    if (question.options) {
        question.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("btn");
            btn.onclick = handleAnswer; // Attach click event for options
            optionsEl.appendChild(btn);
        });
    } else {
        // Fill in the blank
        const blankInput = document.createElement("input");
        blankInput.setAttribute("type", "text");
        blankInput.setAttribute("id", "blank-answer");
        blankInput.classList.add("btn");
        optionsEl.appendChild(blankInput);

        const submitBtn = document.createElement("button");
        submitBtn.textContent = "Submit";
        submitBtn.classList.add("btn");
        submitBtn.onclick = handleAnswer; // Attach click event for submit
        optionsEl.appendChild(submitBtn);
    }
}

function handleAnswer(e) {
    const question = currentQuestionSet[currentQuestionIndex];

    // Determine user answer based on what element was clicked
    let userAnswer;
    if (e.target.tagName === "BUTTON" && e.target.textContent !== "Submit") {
        userAnswer = e.target.textContent; // For multiple choice
    } else {
        userAnswer = document.querySelector("#blank-answer")?.value.trim(); // For fill-in-the-blank
    }

    if (!userAnswer) {
        showFeedback(false); // Show feedback for empty input
        return; // Exit if no answer was provided
    }

    // Compare answer (case insensitive)
    const isCorrect = userAnswer.toLowerCase() === question.answer.toLowerCase();

    if (isCorrect) {
        correctAnswersCount++; // Increment correct answers count
    }

    showFeedback(isCorrect);
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestionSet.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function showFeedback(isCorrect) {
    feedbackEl.textContent = isCorrect ? "Correct!" : `Wrong! Correct answer: ${currentQuestionSet[currentQuestionIndex - 1].answer}`;
    feedbackEl.classList.remove("hide");
    setTimeout(() => feedbackEl.classList.add("hide"), 2000); // Hide feedback after 2 seconds
}

function startTotalTimer() {
    totalTimer = setInterval(() => {
        totalTime--;
        timerEl.textContent = totalTime;

        if (totalTime <= 0) {
            clearInterval(totalTimer);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(totalTimer);
    questionsEl.classList.add("hide");
    document.querySelector("#quiz-end").classList.remove("hide");

    const totalQuestions = currentQuestionSet.length;
    const averageScore = totalQuestions > 0 
        ? ((correctAnswersCount / totalQuestions) * 100).toFixed(2)
        : 0;
    scoreFinalEl.textContent = averageScore;

    updateLeaderboard(nameInput.value.trim(), averageScore); // Update leaderboard
}

submitScoreBtn.onclick = saveHighscore;

function saveHighscore() {
    const name = nameInput.value.trim();
    if (name) {
        const scores = JSON.parse(localStorage.getItem("highscores") || "[]");
        scores.push({ name, score: parseFloat(scoreFinalEl.textContent) });
        localStorage.setItem("highscores", JSON.stringify(scores));
        alert("Score saved!");
        displayLeaderboard(scores); // Display updated leaderboard
    } else {
        alert("Please enter a name to save your score.");
    }
}

function updateLeaderboard(name, score) {
    let scores = JSON.parse(localStorage.getItem("highscores") || "[]");
    scores.push({ name, score });
    scores.sort((a, b) => b.score - a.score); // Sort scores in descending order
    scores = scores.slice(0, 10); // Keep top 10 scores
    localStorage.setItem("highscores", JSON.stringify(scores));
    displayLeaderboard(scores); // Display leaderboard
}

function displayLeaderboard(scores) {
    leaderboardEl.innerHTML = ""; // Clear previous leaderboard
    if (scores.length > 0) {
        scores.forEach(entry => {
            const li = document.createElement("li");
            li.textContent = `${entry.name}: ${entry.score}`;
            leaderboardEl.appendChild(li);
        });
    } else {
        leaderboardEl.innerHTML = "<li>No scores available</li>";
    }
}
