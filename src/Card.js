class Card {
  constructor(isWinningCard) {
    this.cardElement = this.createCardElement();
    this.isWinningCard = isWinningCard;
    this.handleCardClick();
  }

  createCardElement() {
    const button = document.createElement("button");
    button.className = "card";
    button.innerText = "카드입니다";
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

class Cards {
  constructor(count) {
    this.cardList = [];
    this.createCards(count);
    this.shuffle();
  }

  createCards(count) {
    if (count < 2) {
      throw new Error("하나 이상의 카드를 입력해주세요.");
    }

    this.cardList = Array.from({ length: count - 1 }, () => new Card(false));
    this.cardList.push(new Card(true));
  }

  shuffle() {
    this.cardList.sort(() => Math.random() - 0.5);
  }

  start() {
    const contentsElement = document.querySelector("#cards");
    this.cardList.forEach((card) => {
      contentsElement.appendChild(card.cardElement);
    });
  }
}

export default Cards;
