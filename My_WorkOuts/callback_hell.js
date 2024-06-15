const countdownElement = document.getElementById("countdown");
const body = document.getElementById("body");
setTimeout(function () {
  countdownElement.textContent = "10";
  setTimeout(function () {
    countdownElement.textContent = "9";
    setTimeout(function () {
      countdownElement.textContent = "8";
      setTimeout(function () {
        countdownElement.textContent = "7";
        setTimeout(function () {
          countdownElement.textContent = "6";
          setTimeout(function () {
            countdownElement.textContent = "5";
            setTimeout(function () {
              countdownElement.textContent = "4";
              setTimeout(function () {
                countdownElement.textContent = "3";
                setTimeout(function () {
                  countdownElement.textContent = "2";
                  setTimeout(function () {
                    countdownElement.textContent = "1";
                    setTimeout(function () {
                      body.setAttribute(
                        "style",
                        "background: linear-gradient(to bottom, #FF9933 33%, #FFFFFF 33% 66%, #138808 66%)"
                      );
                      countdownElement.setAttribute(
                        "style",
                        "font-weight: bold;color: blue;"
                      );
                      countdownElement.textContent = "Happy Independence Day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
