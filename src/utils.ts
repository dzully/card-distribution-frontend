export const shuffle = (array: number[]) => {
  // Iterate over the array in reverse order.
  for (let i = array.length - 1; i > 0; i--) {
    // Randomly select a j index.
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the items at i and j.
    [array[i], array[j]] = [array[j], array[i]];
  }
  // Return the shuffled array.
  return array;
};

export const getCardValue = (card: number) => {
  // Switch on the remainder of the card number divided by 13
  switch (card % 13) {
    // If the remainder is 0, return "K"
    case 0:
      return "K";
    // If the remainder is 1, return "A"
    case 1:
      return "A";
    // If the remainder is 11, return "J"
    case 11:
      return "J";
    // If the remainder is 12, return "Q"
    case 12:
      return "Q";
    // If none of the above, return the remainder
    default:
      return card % 13;
  }
};

export const getCardSuit = (card: number) => {
  // Map the card number to a suit index
  const suits = ["S", "H", "D", "C"];
  const suitIndex = Math.floor((card - 1) / 13);

  // Return the suit string
  return suits[suitIndex];
};

export const convertEachPersonToObject = (output: string) => {
  // split the output string by "Person"
  const outputArray = output.split("Person");
  // map the outputArray to an object with the person name as the key and the cards as the value
  return outputArray.reduce((acc: { [key: string]: string }, curr) => {
    const person = curr.split(":")[0];
    const cards = curr.split(":")[1];
    if (person && cards) {
      acc[person.trim()] = cards.trim().replace(/\s+/g, ",");
    }
    return acc;
  }, {});
};

export const handleShuffle = ({ totalPlayers }: { totalPlayers: number }) => {
  // Create an array of 52 numbers representing all the cards
  const cards = Array.from({ length: 52 }, (_, i) => i + 1);
  // Scramble the cards by shuffling them
  const shuffledCards = shuffle(cards);
  // Determine how many cards each player will get
  const cardsPerPerson = Math.floor(52 / totalPlayers);
  // Determine how many cards will be left over
  const remainder = 52 % totalPlayers;
  // Initialize the current card index
  let cardIndex = 0;
  // Initialize the output
  let output = "";
  // Loop through each player
  for (let i = 0; i < totalPlayers; i++) {
    // Determine how many cards the player will get
    const numCards = i < remainder ? cardsPerPerson + 1 : cardsPerPerson;
    // Get the cards for the player
    const cardsForPerson = shuffledCards.slice(cardIndex, cardIndex + numCards);
    // Increment the card index
    cardIndex += numCards;
    // Add the player number to the output
    output += `Person ${i + 1}: `;
    // Loop through each card
    // eslint-disable-next-line
    cardsForPerson.forEach((card) => {
      // Add the card value to the output
      output += `${getCardValue(card)}-${getCardSuit(card)},`;
    });
    // Remove the last comma
    output = output.slice(0, -1);
    // Add a space
    output += " ";
  }

  // Replace the card values with their numbers
  return output
    .replace(/K/g, "13")
    .replace(/A/g, "1")
    .replace(/J/g, "11")
    .replace(/Q/g, "12")
    .replace(/,/g, " ")
    .replace(/=/g, "=");
};
