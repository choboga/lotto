function startAnimation() {
    const button = document.getElementById("generateBtn");
    const resultDiv = document.getElementById("result");
    const subtitle = document.getElementById("subtitle");
    const loadingDiv = document.getElementById("loading");

    // ✅ 버튼 애니메이션 적용
    button.classList.add("shaking");
    button.disabled = true; // 버튼 비활성화
    resultDiv.innerHTML = ""; // 기존 결과 초기화
    subtitle.style.display = "none"; // 기존 텍스트 숨김
    loadingDiv.style.display = "block"; // ✅ 버튼 클릭 시에만 보이도록 수정

    setTimeout(() => {
        button.classList.remove("shaking");
        button.disabled = false;
        loadingDiv.style.display = "none"; // ✅ 3초 후 자동으로 숨김
        subtitle.style.display = "block"; // ✅ 당첨 기원 메시지 다시 표시

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

        // ✅ 결과 문구 변경
        subtitle.innerHTML = "🎯 당첨을 기원합니다!";
        subtitle.style.display = "block"; // 다시 보이게 설정
    }, 3000);
}
