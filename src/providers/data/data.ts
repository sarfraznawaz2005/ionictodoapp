import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()

export class DataProvider {

  constructor(public storage: Storage) { }

  save(data) {
    this.storage.set('todos', data);
  }

  get() {
    return this.storage.get('todos');
  }

}
