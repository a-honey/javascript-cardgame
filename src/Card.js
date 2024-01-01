class Card {
  constructor(isWinningCard) {
    this.cardElement = this.createCardElement("카드입니다");
    this.isWinningCard = isWinningCard;
    this.handleCardClick();
  }

  createCardElement(text) {
    const button = document.createElement("button");
    button.className = "card";
    button.innerText = text;
    return button;
  }

  selectCard() {
    const contents = document.querySelector("#cards");
    contents.innerText = this.isWinningCard ? "당첨입니다" : "꽝입니다!";
  }

  handleCardClick() {
    this.cardElement.addEventListener("click", () => {
      this.selectCard();
    });
  }
}

export default Card;
