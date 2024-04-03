const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left = "0px";

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
