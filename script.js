document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const resultDiv = document.getElementById("result");
    const subtitle = document.getElementById("subtitle");
    const loadingText = document.getElementById("loading-text");

    generateBtn.addEventListener("click", function () {
        startAnimation();
    });

    function startAnimation() {
        // 버튼 비활성화 (중복 클릭 방지)
        generateBtn.disabled = true;
        resultDiv.innerHTML = "";
        loadingText.innerHTML = "🎯 번호를 추첨 중입니다...";
        
        // 버튼 흔들리는 애니메이션 추가
        generateBtn.classList.add("shaking");

        setTimeout(() => {
            generateBtn.classList.remove("shaking");
            loadingText.innerHTML = ""; // 로딩 문구 제거
            generateNumbers();
            generateBtn.disabled = false; // 버튼 다시 활성화
        }, 2000);
    }

    function generateNumbers() {
        let numbers = [];
        while (numbers.length < 6) {
            let num = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        
        numbers.sort((a, b) => a - b);

        // 번호 공을 순차적으로 출력
        numbers.forEach((num, index) => {
            setTimeout(() => {
                let ball = document.createElement("div");
                ball.classList.add("lotto-number");
                ball.textContent = num;
                resultDiv.appendChild(ball);
            }, index * 500);
        });

        subtitle.innerHTML = "🎯 당첨을 기원합니다!";
    }
});
