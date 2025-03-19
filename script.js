document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("generateBtn");
    const resultDiv = document.getElementById("result");
    const loadingDiv = document.getElementById("loading");

    function startAnimation() {
        resultDiv.innerHTML = ""; // 기존 번호 초기화
        loadingDiv.style.display = "block"; // ✅ 버튼 클릭 시만 보이도록 설정
        button.disabled = true; // 버튼 비활성화
        button.classList.add("shaking"); // 애니메이션 추가

        setTimeout(() => {
            button.classList.remove("shaking");
            button.disabled = false;
            loadingDiv.style.display = "none"; // ✅ 결과 나오면 숨김

            let numbers = [];
            while (numbers.length < 6) {
                let num = Math.floor(Math.random() * 45) + 1;
                if (!numbers.includes(num)) {
                    numbers.push(num);
                }
            }

            // ✅ 번호를 동그란 공으로 표시
            resultDiv.innerHTML = numbers
                .sort((a, b) => a - b)
                .map(n => `<span class="lotto-number">${n}</span>`)
                .join('');

        }, 3000);
    }

    button.addEventListener("click", startAnimation);
});
