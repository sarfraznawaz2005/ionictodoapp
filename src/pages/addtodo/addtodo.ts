import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-addtodo',
  templateUrl: 'addtodo.html',
})

export class AddtodoPage {

  description:string;

  constructor(private view: ViewController) {
  }

  saveTodo() {
    let todo = {description: this.description};

    this.view.dismiss(todo);
  }

  close() {
    this.view.dismiss();
  }

}
