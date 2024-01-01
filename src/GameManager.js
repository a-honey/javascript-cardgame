import Cards from "./Cards";

class GameManager {
  constructor(count) {
    this.cardsInstance = new Cards(count);
  }

  start() {
    const cardsElement = document.querySelector("#cards");
    this.cardsInstance.cardList.forEach((card) => {
      cardsElement.appendChild(card.cardElement);
    });
  }
}

export default GameManager;
