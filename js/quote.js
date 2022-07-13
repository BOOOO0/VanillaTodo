const quotes = [
  {
    quote:
      "Chains of habit are too light to be felt until they are too heavy to be broken.",
    author: "Warren Buffett",
  },
  {
    quote: "Life could be wonderful if people would leave you alone.",
    author: "Charlie Chaplin",
  },
  {
    quote: "He that can have patience can have what he will.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Love is or it ain't. Thin love ain't love at all.",
    author: "Toni Morrison",
  },
  {
    quote:
      "What else is love but understanding and rejoicing in the fact that another person lives, acts, and experiences otherwise than we do?",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "A coward is incapable of exhibiting love; it is the prerogative of the brave.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "A good plan, violently executed now, is better than a perfect plan next week.",
    author: "George S. Patton",
  },
  {
    quote:
      "The revolution is not an apple that falls when it is ripe. You have to make it fall.",
    author: "Che Guevara",
  },
  {
    quote: "The worst is not So long as we can say, This is the worst.",
    author: "William Shakespeare",
  },
  {
    quote:
      "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
    author: "Albert Einstein",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `-${todaysQuote.author}-`;
