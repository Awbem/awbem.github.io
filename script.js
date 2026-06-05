const wordSets = [
  ["春节", "是", "中国", "最重要", "的", "传统节日", "。"],
  ["人们", "在", "中秋节", "吃", "月饼", "。"],
  ["端午节", "有", "赛龙舟", "的", "习俗", "。"]
];

const generateBtn = document.getElementById("generateBtn");
const wordBox = document.getElementById("wordBox");

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

generateBtn.addEventListener("click", () => {
  const randomSet = wordSets[Math.floor(Math.random() * wordSets.length)];
  const scrambled = shuffle(randomSet);
  wordBox.textContent = scrambled.join(" / ");
});