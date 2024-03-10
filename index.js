const inputX = document.getElementById("input_x");
const inputY = document.getElementById("input_y");
const btn = document.getElementById("create");
const board = document.querySelector(".board");
btn.addEventListener("click", () => {
  for (let i = 1; i <= inputX.value; i++) {
    const tr = document.createElement("tr");
    for (let j = 1; j <= inputY.value; j++) {
      const td = document.createElement("td");
      td.className = "tdElem";
      if ((i + j) % 2 == 0) {
        td.classList.toggle("black");
      } else {
        td.classList.toggle("white");
      }
      tr.append(td);
    }
    board.append(tr);
  }
});
board.addEventListener("click", (event) => {
  const tdBlock = document.querySelectorAll("td");
  if (event.target.classList.contains("tdElem")) {
    for (let i = 0; i < tdBlock.length; i++) {
      if (tdBlock[i].classList.contains("black")) {
        tdBlock[i].classList.add("white");
        tdBlock[i].classList.remove("black");
      } else {
        tdBlock[i].classList.add("black");
        tdBlock[i].classList.remove('white');
      }
    }
  }
});
