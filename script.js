document.getElementById('generateBtn').addEventListener('click', function() {
  const button = document.getElementById('generateBtn');
  const resultDiv = document.getElementById('result');
  const subtitle = document.getElementById('subtitle');
  const loadingMsg = document.getElementById('loadingMsg');

  // 초기화
  resultDiv.innerHTML = '';
  subtitle.style.display = 'none';
  loadingMsg.style.display = 'block';

  button.classList.add('shaking');
  button.innerText = '추첨 중...';

  // 3초 뒤 번호 출력
  setTimeout(function() {
    button.classList.remove('shaking');
    button.innerText = '재추첨';
    loadingMsg.style.display = 'none';
    subtitle.style.display = 'block';

    // 중복 없는 6개의 랜덤 숫자 생성
    let numbers = [];
    while (numbers.length < 6) {
      let num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) numbers.push(num);
    }

    // 번호 정렬 후 화면 출력
    numbers.sort((a, b) => a - b).forEach(num => {
      let ball = document.createElement('div');
      ball.className = 'ball';
      ball.innerText = num;
      resultDiv.appendChild(ball);
    });
  }, 3000);
});
