let placeContainer = document.querySelector(".place-container");

for (let card of arr) {
  if (card.y % 2 == 0 && card.x % 2 == 0) {
    card.color = "dark";
  }
  if (card.y % 2 != 0 && card.x % 2 != 0) {
    card.color = "dark";
  }
}

for (let i of arr) {
  let card = document.createElement("div");
  card.classList.add(`y_${i.y}`, `x_${i.x}`, `card`, `${i.color}_color`);
  placeContainer.appendChild(card);
}
// ?Click to the stones
let stons = document.querySelectorAll(".stone");
let places = placeContainer.querySelectorAll(".card");

let images = [
  "../../imgs/King.svg",
  "../../imgs/Queen.svg",
  "../../imgs/Castle.svg",
  "../../imgs/Bishop.svg",
  "../../imgs/Knight.svg",
  "../../imgs/Pawn.svg",
];
let newStone = "";
stons.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("king")) {
      newStone = "king";
    }

    if (e.target.classList.contains("queen")) {
      newStone = "queen";
    }

    if (e.target.classList.contains("castle")) {
      newStone = "castle";
    }

    if (e.target.classList.contains("bishop")) {
      newStone = "bishop";
    }

    if (e.target.classList.contains("knight")) {
      newStone = "knight";
    }

    if (e.target.classList.contains("pawl")) {
      newStone = "pawl";
    }

    stons.forEach((el) => {
      el.classList.remove("tosh-fixed-active");
    });

    e.target.classList.add("tosh-fixed-active");
  });
});

for (let card of places) {
  card.addEventListener("click", (e) => {
    let y = Number(e.target.classList[0].slice(-1));
    let x = Number(e.target.classList[1].slice(-1));

    let x1 = document.querySelector(".x");
    let y1 = document.querySelector(".y");

    x1.innerHTML = `x = ${x}`;
    y1.innerHTML = `y = ${y}`;

    for (let card of places) {
      card.classList.remove("help");
    }

    if (newStone == "king") {
      for (let card of places) {
        e.target.innerHTML = `<img src=${images[0]}>`;
        e.target.classList.add("clas");
        for (let i = 1; i <= 8; i++) {
          if (
            card.classList.contains(`y_${y + 1}`) &&
            card.classList.contains(`x_${x + 1}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y + 1}`) &&
            card.classList.contains(`x_${x}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y + 1}`) &&
            card.classList.contains(`x_${x - 1}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y}`) &&
            card.classList.contains(`x_${x - 1}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y}`) &&
            card.classList.contains(`x_${x + 1}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y - 1}`) &&
            card.classList.contains(`x_${x - 1}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y - 1}`) &&
            card.classList.contains(`x_${x}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y - 1}`) &&
            card.classList.contains(`x_${x + 1}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }
        }
      }
    }

    if (newStone == "queen") {
      e.target.innerHTML = `<img src=${images[1]}>`;
      e.target.classList.add("clas");
      for (let card of places) {
        for (let i = 8; i >= 1; i--) {
          if (
            card.classList.contains(`y_${y}`) &&
            card.classList.contains(`x_${i}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y - i}`) &&
            card.classList.contains(`x_${x - i}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }
        }
        for (let i = 1; i <= 8; i++) {
          if (
            card.classList.contains(`y_${i}`) &&
            card.classList.contains(`x_${x}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y + i}`) &&
            card.classList.contains(`x_${x + i}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y - i}`) &&
            card.classList.contains(`x_${x + i}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y + i}`) &&
            card.classList.contains(`x_${x - i}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }
        }
      }
    }

    if (newStone == "castle") {
      e.target.innerHTML = `<img src=${images[2]}>`;
      e.target.classList.add("clas");
      for (let card of places) {
        for (let i = 1; i <= 8; i++) {
          if (
            card.classList.contains(`y_${i}`) &&
            card.classList.contains(`x_${x}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          for (let i = 8; i >= 1; i--) {
            if (
              card.classList.contains(`y_${y}`) &&
              card.classList.contains(`x_${i}`)
            ) {
              card.classList.add("help");
            } else {
              true;
            }
          }
        }
      }
    }

    if (newStone == "knight") {
      e.target.innerHTML = `<img src=${images[4]}>`;
      e.target.classList.add("class");
      for (let card of places) {
        for (let i = 1; i <= 8; i++) {
          if (
            card.classList.contains(`y_${y + 1}`) &&
            card.classList.contains(`x_${x + 2}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y + 2}`) &&
            card.classList.contains(`x_${x + 1}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y + 2}`) &&
            card.classList.contains(`x_${x - 1}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y + 1}`) &&
            card.classList.contains(`x_${x - 2}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y - 1}`) &&
            card.classList.contains(`x_${x + 2}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y - 1}`) &&
            card.classList.contains(`x_${x - 2}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y - 2}`) &&
            card.classList.contains(`x_${x - 1}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y - 2}`) &&
            card.classList.contains(`x_${x + 1}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }
        }
      }
    }

    if (newStone == "bishop") {
      e.target.innerHTML = `<img src=${images[3]}>`;
      e.target.classList.add("clas");
      for (let card of places) {
        for (let i = 8; i >= 1; i--) {
          if (
            card.classList.contains(`y_${y - i}`) &&
            card.classList.contains(`x_${x - i}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }
        }
        for (let i = 1; i <= 8; i++) {
          if (
            card.classList.contains(`y_${y + i}`) &&
            card.classList.contains(`x_${x + i}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y - i}`) &&
            card.classList.contains(`x_${x + i}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }

          if (
            card.classList.contains(`y_${y + i}`) &&
            card.classList.contains(`x_${x - i}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }
        }
      }
    }

    if (newStone == "pawl") {
      e.target.innerHTML = `<img src=${images[5]}>`;
      e.target.classList.add("clas");
      for (let card of places) {
        for (let i = 1; i <= 8; i++) {
          if (
            card.classList.contains(`y_${y - 1}`) &&
            card.classList.contains(`x_${x}`)
          ) {
            card.classList.add("help");
          } else {
            true;
          }
          if (y == 8) {
            card.classList.remove("help");
          } else {
            true;
          }
        }
      }
    }
  });
}

// ?3D
let d3 = document.querySelector(".d3");
let threeD = document.querySelector(".threeD");
let thwoD = document.querySelector(".thwoD");
let container = document.querySelector(".container");

d3.addEventListener("click", () => {
  threeD.classList.toggle("threeD-hide");
  thwoD.classList.toggle("thwoD-show");
  container.classList.toggle("container-3d");
  placeContainer.classList.toggle("place-container-3d");
});


