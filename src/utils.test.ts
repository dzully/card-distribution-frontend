import { getCardSuit, getCardValue, shuffle } from "./utils";

describe("getCardValue", () => {
  it("returns the correct value for a card", () => {
    // 1 is the first card in the deck
    expect(getCardValue(1)).toBe("A");
    // 13 is the last card in the first suit
    expect(getCardValue(13)).toBe("K");
    // 14 is the first card in the second suit
    expect(getCardValue(14)).toBe("A");
    // 26 is the last card in the second suit
    expect(getCardValue(26)).toBe("K");
    // 27 is the first card in the third suit
    expect(getCardValue(27)).toBe("A");
    // 39 is the last card in the third suit
    expect(getCardValue(39)).toBe("K");
    // 40 is the first card in the fourth suit
    expect(getCardValue(40)).toBe("A");
    // 52 is the last card in the deck
    expect(getCardValue(52)).toBe("K");
  });
});

describe("getCardSuit", () => {
  it("returns the correct suit for a card", () => {
    // We expect the suit to be Spades (S) for the Ace (1)
    expect(getCardSuit(1)).toBe("S");
    // We expect the suit to be Spades (S) for the King (13)
    expect(getCardSuit(13)).toBe("S");
    // We expect the suit to be Hearts (H) for the Ace (14)
    expect(getCardSuit(14)).toBe("H");
    // We expect the suit to be Hearts (H) for the King (26)
    expect(getCardSuit(26)).toBe("H");
    // We expect the suit to be Diamonds (D) for the Ace (27)
    expect(getCardSuit(27)).toBe("D");
    // We expect the suit to be Diamonds (D) for the King (39)
    expect(getCardSuit(39)).toBe("D");
    // We expect the suit to be Clubs (C) for the Ace (40)
    expect(getCardSuit(40)).toBe("C");
    // We expect the suit to be Clubs (C) for the King (52)
    expect(getCardSuit(52)).toBe("C");
  });
});

describe("shuffle", () => {
  it("returns an array of the same length", () => {
    // create an array of numbers from 1 to 52
    const cards = Array.from({ length: 52 }, (_, i) => i + 1);
    // call the shuffle function
    // check that the length of the returned array is 52
    expect(shuffle(cards).length).toBe(52);
  });

  it("returns an array with the same values", () => {
    // create an array of numbers from 1 to 52
    const cards = Array.from({ length: 52 }, (_, i) => i + 1);
    // call the shuffle function
    // check that the returned array contains all the values in the original array
    expect(shuffle(cards)).toEqual(expect.arrayContaining(cards));
  });
});
