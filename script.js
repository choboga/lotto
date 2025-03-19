document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const resultDiv = document.getElementById("result");

    generateBtn.addEventListener("click", function () {
        startAnimation();
    });

    function startAnimation() {
        // 기존 결과 초기화
        resultDiv.innerHTML = "";
        generateBtn.classList.add("shaking");

        // "번호를 추첨 중입니다..." 텍스트 표시
        let loadingText = document.createElement("p");
        loadingText.textContent = "🎯 번호를 추첨 중입니다...";
        loadingText.id = "loading-text";
        resultDiv.appendChild(loadingText);

        setTimeout(() => {
            generateBtn.classList.remove("shaking");
            resultDiv.innerHTML = ""; // 기존 로딩 텍스트 삭제

            let numbers = [];
            while (numbers.length < 6) {
                let num = Math.floor(Math.random() * 45) + 1;
                if (!numbers.includes(num)) {
                    numbers.push(num);
                }
            }

            numbers.sort((a, b) => a - b);

            // 로또 공 순차적으로 나타나기 (0.5초 간격)
            numbers.forEach((num, index) => {
                setTimeout(() => {
                    let ball = document.createElement("div");
                    ball.classList.add("lotto-number");
                    ball.textContent = num;
                    resultDiv.appendChild(ball);
                }, index * 500); // 0.5초 간격으로 등장
            });

        }, 2000); // 2초 동안 로딩 텍스트 유지 후 번호 출력
    }
});
