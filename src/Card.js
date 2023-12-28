class Card {
  constructor(isWinningCard, position, resetCallback, cardsInstance) {
    this.cardElement = this.createCardElement("카드입니다");
    this.isWinningCard = isWinningCard;
    this.cardsInstance = cardsInstance;
    this.position = position;
    this.handleCardClick();
    this.resetCallback = resetCallback;
  }

  createCardElement(text) {
    const button = document.createElement("button");
    button.className = "card";
    button.innerText = text;
    return button;
  }

  selectCard() {
    const contents = document.querySelector("#cards");
    contents.innerHTML = "";

    this.cardsInstance.cardList.forEach((card) => {
      const resultCard = this.createCardElement(
        card.isWinningCard ? "당첨" : "꽝"
      );
      resultCard.disabled = true;
      contents.appendChild(resultCard);
    });

    const resetButton = document.createElement("button");
    resetButton.innerText = "다시 하기";
    resetButton.addEventListener("click", () => this.resetCallback());

    contents.appendChild(resetButton);
  }

  handleCardClick() {
    this.cardElement.addEventListener("click", () => {
      this.selectCard();
    });
  }
}

class Cards {
  constructor(count) {
    this.cardList = [];
    this.createCards(count);
    this.shuffle();
  }

  createCards(count) {
    if (count < 2) {
      throw new "하나 이상의 카드를 입력해주세요."();
    }

    this.cardList = Array.from(
      { length: count - 1 },
      (_, index) => new Card(false, index, () => this.resetGame(), this)
    );
    this.cardList.push(new Card(true, count - 1, () => this.resetGame(), this));
  }

  shuffle() {
    this.cardList = this.cardList.sort(() => Math.random() - 0.5);
  }

  resetGame() {
    this.createCards(this.cardList.length);
    const contentsElement = document.querySelector("#cards");

    contentsElement.innerHTML = "";
    this.cardList.forEach((card) => {
      contentsElement.appendChild(card.cardElement);
    });
  }

  start() {
    const contentsElement = document.querySelector("#cards");
    this.cardList.forEach((card) => {
      contentsElement.appendChild(card.cardElement);
    });
  }
}

export default Cards;
