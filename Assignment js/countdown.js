let count = 10;
    const countdownEl = document.getElementById("countdown");

    const countdown = setInterval(() => {
      count--;
      countdownEl.textContent = count;
      if (count === 0) {
        clearInterval(countdown);
      }
    }, 1000);