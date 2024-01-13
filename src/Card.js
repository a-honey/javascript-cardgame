class Card {
  constructor(isWinningCard, renderCards) {
    this.cardElement = this.createCardElement("카드입니다");
    this.isWinningCard = isWinningCard;
    this.isClicked = false;
    this.handleCardClick();
    this.renderCards = renderCards;
  }

  createCardElement(text) {
    const button = document.createElement("button");
    button.className = "card";
    button.innerText = text;
    return button;
  }

  handleCardClick() {
    this.cardElement.addEventListener("click", () => {
      this.isClicked = true;
      this.renderCards();
    });
  }

  updateInnerText(text) {
    this.cardElement.innerText = text;
  }
}

export default Card;
