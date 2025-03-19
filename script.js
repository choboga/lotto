document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("generateBtn");
    const resultDiv = document.getElementById("result");
    const loadingDiv = document.getElementById("loading");

    function startAnimation() {
        // ✅ 기존에 표시된 번호 초기화
        resultDiv.innerHTML = "";
        loadingDiv.style.display = "block"; // ✅ 버튼 클릭 시만 보이도록 설정
        button.disabled = true; // 버튼 비활성화
        button.classList.add("shaking"); // 흔들리는 애니메이션 적용

        setTimeout(() => {
            button.classList.remove("shaking");
            button.disabled = false;
            loadingDiv.style.display = "none"; // ✅ 3초 후 사라짐

            // ✅ 랜덤 로또 번호 생성
            let numbers = [];
            while (numbers.length < 6) {
                let num = Math.floor(Math.random() * 45) + 1;
                if (!numbers.includes(num)) {
                    numbers.push(num);
                }
            }

            // ✅ 결과를 공 형태로 출력
            resultDiv.innerHTML = numbers
                .sort((a, b) => a - b)
                .map(n => `<span class="lotto-number">${n}</span>`)
                .join('');

        }, 3000);
    }

    button.addEventListener("click", startAnimation);
});
