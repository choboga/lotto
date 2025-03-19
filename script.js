document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const resultDiv = document.getElementById("result");
    const loadingText = document.getElementById("loading-text");
    const subtitle = document.getElementById("subtitle");

    let isFirst = true;

    generateBtn.addEventListener("click", function () {
        generateBtn.disabled = true;
        resultDiv.innerHTML = "";
        loadingText.innerHTML = "🎯 번호를 추첨 중입니다...";
        subtitle.style.display = "none";

        generateBtn.classList.add("shaking");

        setTimeout(() => {
            generateNumbers();
            generateBtn.classList.remove("shaking");
            loadingText.innerHTML = "";
            subtitle.style.display = "block";
            generateBtn.disabled = false;

            if (isFirst) {
                generateBtn.textContent = "재추첨";
                isFirst = false;
            }
        }, 2500);
    });

    function generateNumbers() {
        let numbers = [];
        while (numbers.length < 6) {
            let num = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(num)) numbers.push(num);
        }

        numbers.sort((a, b) => a - b);

        numbers.forEach((num, index) => {
            setTimeout(() => {
                const ball = document.createElement("div");
                ball.classList.add("lotto-number");
                ball.textContent = num;
                resultDiv.appendChild(ball);
            }, index * 400);
        });
    }
});
