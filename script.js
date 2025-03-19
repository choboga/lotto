document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const resultDiv = document.getElementById("result");

    generateBtn.addEventListener("click", function () {
        startAnimation();
    });

    function startAnimation() {
        // 버튼 흔들리는 애니메이션 추가
        generateBtn.classList.add("shaking");

        // 기존 결과 초기화
        resultDiv.innerHTML = "";

        setTimeout(() => {
            generateBtn.classList.remove("shaking");

            let numbers = [];
            while (numbers.length < 6) {
                let num = Math.floor(Math.random() * 45) + 1;
                if (!numbers.includes(num)) {
                    numbers.push(num);
                }
            }

            numbers.sort((a, b) => a - b);

            numbers.forEach((num, index) => {
                setTimeout(() => {
                    let ball = document.createElement("div");
                    ball.classList.add("lotto-number");
                    ball.textContent = num;
                    resultDiv.appendChild(ball);
                }, index * 500); // 0.5초 간격으로 숫자 등장 애니메이션
            });

        }, 1500); // 1.5초 후 번호 등장
    }
});
