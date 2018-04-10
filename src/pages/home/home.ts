import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { AddtodoPage } from '../addtodo/addtodo';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  todos = [];

  constructor(
    public navCtrl: NavController,
    private alert: AlertController,
    private modal: ModalController,
    private dataProvider: DataProvider
  ) {
    this.dataProvider.get().then(todos => {
        this.todos = todos;
    });
  }

  addTodo() {
    let addTodoPage = this.modal.create(AddtodoPage);

    addTodoPage.onDidDismiss(todo => {
      if (todo && todo.description) {
        this.todos.push(todo);

        this.dataProvider.save(this.todos);
      }
    });

    addTodoPage.present();
  }

  deleteTodo(todo) {
    let index = this.todos.indexOf(todo, 0);

    if (index > -1) {
      this.alert.create({
        title: "Confirm",
        message: "Are you sure you want to delete ?",
        buttons: [
          { text: "Cancel" },
          {
            text: "Delete",
            handler: () => {
              this.todos.splice(index, 1);

              this.dataProvider.save(this.todos);
            }
          }
        ]
      }).present();
    }
  }

  about() {
    this.alert.create({
      title: "About TodoApp",
      message: "Awesome todoApp!!",
      buttons: ['Okay']
    }).present();
  }

}
