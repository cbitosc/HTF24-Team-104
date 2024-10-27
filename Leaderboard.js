function printHighscores() {
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores = highscores.filter((score, index, self) =>
        index === self.findIndex((s) => s.name === score.name && s.score === score.score)
    );
    const sortedScores = highscores.sort((a, b) => b.score - a.score);
    const highscoreTableBody = document.getElementById("highscores");
    highscoreTableBody.innerHTML = ""; 
    sortedScores.forEach((score, index) => {
        const trTag = document.createElement("tr");
        trTag.innerHTML = `
            <td>${index + 1}</td>
            <td>${score.name}</td>
            <td>${score.score}</td>
        `;
        highscoreTableBody.appendChild(trTag);
    });
}
function clearHighscores() {
    localStorage.removeItem("highscores");
    document.getElementById("highscores").innerHTML = ""; 
}
document.getElementById("clear").addEventListener("click", clearHighscores);
document.addEventListener("DOMContentLoaded", printHighscores);


