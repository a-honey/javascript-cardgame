import Card from "./Card";

class Cards {
  constructor(count, reduceChance) {
    this.cardList = [];
    this.createCards(count);
    this.shuffle();
    this.reduceChance = reduceChance;
  }

  createCards(count) {
    if (count < 2) {
      throw new Error("하나 이상의 카드를 입력해주세요.");
    }

    this.cardList = Array.from(
      { length: count - 1 },
      () =>
        new Card(false, () => {
          this.renderCards();
        })
    );
    this.cardList.push(
      new Card(true, () => {
        this.renderCards();
      })
    );
  }

  renderCards() {
    this.cardList.forEach((card) => {
      if (card.isClicked) {
        if (card.isWinningCard) {
          card.updateInnerText("당첨");
        } else {
          card.updateInnerText("꽝");
          this.reduceChance();
        }
      }
    });
  }

  shuffle() {
    this.cardList.sort(() => Math.random() - 0.5);
  }
}

export default Cards;
