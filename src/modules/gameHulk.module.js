//Copyright by Evgeny
import {Module} from '../core/module'
import {setToDefaultDOM} from '../utils';
import {Controller} from '../utils';
import {Render} from '../utils';

export class GameHulkModule extends Module {
  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    //Контейнер модуля
    const divContainer = document.createElement('div');
    document.body.append(divContainer);     
    divContainer.className = 'div-container';
    const divGame = document.createElement('div');
    divContainer.innerHTML = `
        <button class="userBtn">Set User</button>
        <button class="boxBtn">Add Box</button>
        <button class="pointBtn">Add Point</button>
        <span>(Используйте стрелки клавиатуры для управления)</span>
        <h3><span class="massege"></span><a href="#">Cancel</a> </h3>
        <table></table>
        <div class="signUnderTable">
            Ящиков в пунктах = <span class="count">0</span>
        </div>`

        const userBtn = document.querySelector(".userBtn");
        const boxBtn = document.querySelector(".boxBtn");
        const pointBtn = document.querySelector(".pointBtn");
        const table = document.querySelector("table");
        const count = document.querySelector(".count");
        const cancel = document.querySelector("h3 a");
      
        const state = {name: 'wall'};
        const user = { x: null, y: null };
        const resetUser = (x, y) => {
              user.x && table.children[user.y].children[user.x].classList.remove('user');
              user.x = x;
              user.y = y;
              document.onkeydown = moveController;
            
        }
        
        const render = new Render(table, state, resetUser)
        cancel.onclick = () => {
          userBtn.classList.remove("active")
          pointBtn.classList.remove("active")
          state.name = "wall";
        }
        
        userBtn.onclick = () => {
          userBtn.classList.add("active")
          state.name = "user";
        }
        boxBtn.onclick = () => {
           boxBtn.classList.add("active")
            state.name = "box";
        
        }
        pointBtn.onclick = () => {
          pointBtn.classList.add("active")
          state.name = "point"
        }
        render.renderMap()
        
        const controller = new Controller (table, count, user)
        function moveController(event) {
          if (event.code === "ArrowUp") {
            const offsetOneStepY = () => user.y - 1;
            const offsetTwoStepY = () => user.y - 2;
            const offsetOneStepX = () => user.x;
            const offsetTwoStepX = () => user.x;
            const correct = () => user.y--;    
            controller.moveUser(correct, offsetOneStepY, offsetTwoStepY, offsetOneStepX, offsetTwoStepX)
            
          }
          if (event.code === "ArrowDown") {
            const offsetOneStepY = () => user.y + 1;
            const offsetTwoStepY = () => user.y + 2;
            const offsetOneStepX = () => user.x;
            const offsetTwoStepX = () => user.x;
            const correct = () => user.y++;    
            controller.moveUser(correct, offsetOneStepY, offsetTwoStepY, offsetOneStepX, offsetTwoStepX)
           
            }
          if (event.code === "ArrowLeft") {
            const offsetOneStepY = () => user.y;
            const offsetTwoStepY = () => user.y;
            const offsetOneStepX = () => user.x - 1;
            const offsetTwoStepX = () => user.x - 2;
            const correct = () => user.x--;    
            controller.moveUser(correct, offsetOneStepY, offsetTwoStepY, offsetOneStepX, offsetTwoStepX)
          }
          if (event.code === "ArrowRight") {
            const offsetOneStepY = () => user.y;
            const offsetTwoStepY = () => user.y;
            const offsetOneStepX = () => user.x + 1;
            const offsetTwoStepX = () => user.x + 2;
            const correct = () => user.x++;    
            controller.moveUser(correct, offsetOneStepY, offsetTwoStepY, offsetOneStepX, offsetTwoStepX)
        }
          const pointElements = table.querySelectorAll(".point");
          if (pointElements.length === Number(count.innerHTML) && Number(count.innerHTML > 0)) {
            table.innerHTML = "YOU WIN!!!";
            document.onkeydown = null
          }
        };  
  }
}