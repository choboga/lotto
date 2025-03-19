function generateNumbers() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // 기존 번호 지우기

    let numbers = [];
    while (numbers.length < 6) {
        let num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }

    numbers.sort((a, b) => a - b);

    numbers.forEach(num => {
        let ball = document.createElement("div");
        ball.classList.add("lotto-number");
        ball.textContent = num;
        resultDiv.appendChild(ball);
    });
}
