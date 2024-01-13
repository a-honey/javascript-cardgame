import Cards from "./Cards";

class GameManager {
  constructor(count, initialChance) {
    this.count = count;
    this.cardsInstance = new Cards(count, () => {
      this.reduceChance();
    });
    this.initialChance = initialChance;
    this.remainChance = initialChance;
  }

  start() {
    const cardsElement = document.querySelector("#cards");
    this.remainChance = this.initialChance;
    this.cardsInstance.shuffle();
    this.cardsInstance.cardList.forEach((card) => {
      card.updateInnerText("카드입니다");
      cardsElement.appendChild(card.cardElement);
    });
    this.renderRemainChance();
  }

  restart() {
    const cardsElement = document.querySelector("#cards");
    cardsElement.innerHTML = "";
    this.start();
  }
  reduceChance() {
    this.remainChance--;
    if (this.remainChance === 0) {
      this.addRestartButton();
    } else {
      this.renderRemainChance();
    }
  }

  renderRemainChance() {
    const cardsElement = document.querySelector("#cards");
    const showChanceElement = document.createElement("p");
    showChanceElement.innerText = `${this.remainChance}번 기회가 남았습니다.`;
    cardsElement.parentElement.insertAdjacentElement(
      "beforeend",
      showChanceElement
    );
  }

  addRestartButton() {
    const cardsElement = document.querySelector("#cards");
    const restartButton = document.createElement("button");
    restartButton.className = "restart";
    restartButton.innerText = "재시작";
    restartButton.addEventListener("click", () => {
      this.restart();
    });
    cardsElement.appendChild(restartButton);
  }
}

export default GameManager;
