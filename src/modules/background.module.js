import {Module} from '../core/module'
import {getRandomColor} from "@/utils";

export class BackgroundModule extends Module {

  trigger() {
    console.log('###-trigger-BackgroundModule')
    document.body.style.backgroundColor = getRandomColor();


  }
}