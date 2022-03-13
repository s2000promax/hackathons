export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

/**
 * Function generate random color
 * @returns {string} - random color in '#xxYYzz' hex format, like: rgb(0...FF, 0...FF. 0...FF).
 */
export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const setToDefaultDOM = () => {
  const divContainer = document.querySelector('.div-container');
  if (!!divContainer) {
    divContainer.remove();
  }
}

// 2 класса для модуля game Hulk

export class Controller {
  constructor (table, count, user) {
    this.table = table
    this.count = count
    this.user = user
  }
  moveUser (correct, offsetOneStepY, offsetTwoStepY, offsetOneStepX, offsetTwoStepX) {
    if (
      this.#checkClassAtCell(offsetOneStepY(), offsetOneStepX(), "box") &&
      ( this.#checkClassAtCell(offsetTwoStepY(), offsetTwoStepX(), "wall") ||
        this.#checkClassAtCell(offsetTwoStepY(), offsetTwoStepX(), "box"))
    ) {
      console.log("stop");
    } else {
      if (!this.#checkClassAtCell(offsetOneStepY(), offsetOneStepX(), "wall")) {
        this.#getCell(this.user.y, this.user.x).classList.remove("user");
        correct();
        this.#getCell(this.user.y, this.user.x).classList.add("user");
        // user.y = user.y - 1
        if (this.#checkClassAtCell(this.user.y, this.user.x, "box")) {
          this.#getCell(this.user.y, this.user.x).classList.remove("box");
          this.#getCell(offsetOneStepY(), offsetOneStepX()).classList.add("box");
          if (this.#checkClassAtCell(offsetOneStepY(), offsetOneStepX(), "point")) {
            this.count.innerHTML = Number(this.count.innerHTML) + 1;
          }
          if (this.#checkClassAtCell(this.user.y, this.user.x, "point")) {
            this.count.innerHTML = Number(this.count.innerHTML) - 1;
          }
        }
      }
    }
  }
  #getCell(y, x) {
    return this.table.children[y].children[x]
  }
  #checkClassAtCell (y, x, className) {
    return this.#getCell(y, x).classList.contains(className)
  }
}

export class Render {
  constructor(table, state, resetUser) {
    this.table = table
    this.state = state
    this.resetUser = resetUser
  }
  renderMap () {
    const height = 10;
    const width = 10;
    for (let y = 0; y < height; y++) {
      const tr = document.createElement("tr");
      this.table.appendChild(tr);
      for (let x = 0; x < width; x++) {
        const td = document.createElement("td");
        tr.appendChild(td);
        td.onclick = () => {
          this.state.name === 'user' && this.resetUser(x, y);
          td.classList.toggle(this.state.name);
        };
        if (y == 0 || y == height - 1) {
          td.classList.toggle("wall");
        }
        if (x == 0 || x == width - 1) {
          td.classList.add("wall");
        }
      }
    }
  }
  renderBoxes(boxes) {
    boxes.forEach((box) => {
      const td = this.table.children[box.y].children[box.x];
      td.classList.add("box");
    });
  }
  renderPoints(points) {
    points.forEach((point) => {
      const td = this.table.children[point.y].children[point.x];
      td.classList.add("point");
    });
  }
  renderUser(user) {
    this.table.children[user.y].children[user.x].classList.add("user");
  }
}