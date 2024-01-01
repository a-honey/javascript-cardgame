import Card from "./Card";

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
}

export default Cards;
