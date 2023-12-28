describe("카드 컴포넌트 테스트", () => {
  it("카드 컴포넌트가 렌더링된다.", () => {
    cy.visit("http://localhost:3000");

    cy.get(".card").should("be.visible");
  });

  it("게임이 다시 렌더링된다.", () => {
    cy.visit("http://localhost:3000");

    cy.contains("button", "카드입니다").click();

    cy.contains("button", "다시 하기").click();

    cy.get(".card").should("be.visible");
  });
});
