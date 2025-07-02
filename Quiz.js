function checkAnswer() {
  const form = document.getElementById("quiz-form");
  const selectedOption = form.model.value;
  const resultDiv = document.getElementById("result");

  if (!selectedOption) {
    resultDiv.textContent = "選択肢を選んでください。";
    resultDiv.style.color = "red";
    return;
  }

  if (selectedOption === "プロトタイピング") {
    resultDiv.textContent = "正解です！🎉";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "不正解です。正解は「プロトタイピング」です。";
    resultDiv.style.color = "red";
  }
}