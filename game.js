// Define the popular places with their corresponding locations
const popularPlaces = [
  { place: "Eiffel Tower", location: "Paris" },
  { place: "Statue of Liberty", location: "New York" },
  { place: "Great Wall of China", location: "Beijing" },
];

// Game class
class Game {
  constructor() {
    this.questionElement = document.getElementById("question");
    this.optionsElement = document.getElementById("options");
    this.score = 0;
    this.currentQuestionIndex = 0;
  }

  // Initialize the game
  init() {
    this.showQuestion();
  }

  // Show the current question and options
  showQuestion() {
    const question = popularPlaces[this.currentQuestionIndex].place;
    const options = this.generateOptions();

    this.questionElement.textContent = `Where can you find ${question}?`;
    this.optionsElement.innerHTML = "";
    options.forEach((option) => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => this.checkAnswer(option));
      this.optionsElement.appendChild(optionElement);
    });
  }

  // Generate the three options for the current question
  generateOptions() {
    const currentLocation = popularPlaces[this.currentQuestionIndex].location;
    const locations = popularPlaces.map((place) => place.location);
    const shuffledLocations = this.shuffleArray(
      locations.filter((location) => location !== currentLocation)
    );
    const options = [
      currentLocation,
      shuffledLocations[0],
      shuffledLocations[1],
    ];
    return this.shuffleArray(options);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Check the player's answer
  checkAnswer(answer) {
    const currentLocation = popularPlaces[this.currentQuestionIndex].location;
    if (answer === currentLocation) {
      this.score++;
    }
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex === popularPlaces.length) {
      this.endGame();
    } else {
      this.showQuestion();
    }
  }

  // End the game and display the score
  endGame() {
    this.questionElement.textContent = `Game Over! Your score is ${this.score}/${popularPlaces.length}.`;
    this.optionsElement.innerHTML = "";
  }
}
