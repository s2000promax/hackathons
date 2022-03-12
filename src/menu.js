import {Menu} from './core/menu'

export class ContextMenu extends Menu {
  open() {
    this.el.classList.add('open')
  }

  close() {
    this.el.classList.remove('open')
  }

  add(instanseOfModule){
    this.el.innerHTML += instanseOfModule.toHTML();
  }
}