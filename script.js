/* ✅ 전체 페이지 기본 스타일 */
body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom, #FFA500, #FFD700);
}

/* ✅ 컨테이너 크기 키우기 */
.container {
    background: rgba(0, 0, 0, 0.85);
    padding: 50px; /* 기존보다 1.5배 확대 */
    border-radius: 30px;
    text-align: center;
    width: 95%;
    max-width: 900px;  /* 기존 700px → 900px */
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* ✅ 제목 크기 대폭 증가 */
.title {
    font-size: 5em;  /* 기존 4em → 5em */
    font-weight: bold;
    color: red;
}

/* ✅ 부제목 크기 증가 */
.subtitle {
    font-size: 2em;  /* 기존 1.8em → 2em */
    margin-bottom: 30px;
}

/* ✅ 버튼 크기 대폭 증가 */
button {
    background-color: orange;
    color: white;
    font-size: 2.2em;  /* 기존 1.8em → 2.2em */
    padding: 25px 50px; /* 기존보다 1.5배 확대 */
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
}

/* ✅ 번호 공 스타일 (크기 대폭 증가) */
.lotto-number {
    display: inline-block;
    background: white;
    color: black;
    font-size: 2.5em;  /* 기존 2em → 2.5em */
    font-weight: bold;
    width: 90px;  /* 기존 70px → 90px */
    height: 90px;
    line-height: 90px;
    border-radius: 50%;
    margin: 20px;  /* 공 사이 간격 조정 */
}

/* ✅ 모바일 대응 */
@media (max-width: 768px) {
    .container {
        width: 90%;
        max-width: 500px;  /* 기존 450px → 500px */
        padding: 40px;
    }

    .title {
        font-size: 3.8em;  /* 기존 3em → 3.8em */
    }

    .subtitle {
        font-size: 1.8em;
    }

    button {
        font-size: 1.8em;
        padding: 20px 40px;
    }

    .lotto-number {
        font-size: 2.2em;
        width: 75px;
        height: 75px;
        line-height: 75px;
    }
}
