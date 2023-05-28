const quotes = [
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote:
      "The only thing worse than starting something and failing… is not starting something.",
    author: "Seth Godin",
  },
  {
    quote:
      "If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse.",
    author: "Jim Rohn",
  },
  {
    quote: "강한 자가 살아남는 것이 아니라, 살아남는 자가 강한 것이다.",
    author: "김유신 장군",
  },
  {
    quote: "뜻이 서지 않으면 만사가 성공하지 못한다. 먼저 반듯이 뜻을 세워라.",
    author: "율곡 이이",
  },
  {
    quote: "기품을 지키되 사치하지 말 것이고, 지성을 갖추되 자랑하지 말라.",
    author: "신사임당",
  },
  {
    quote: "세월을 헛되이 보내지 마라. 청춘은 다시 돌아오지 않는다.",
    author: "안중근 의사",
  },
];

const quote = document.querySelector("#quote span:first-child");
const anthor = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
anthor.innerText = todayQuote.author;
