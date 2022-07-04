import { Component } from '@angular/core';
import { Item } from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular-Todo-Application';


  allItems = [
    {description: 'Eat', done: true},
    {description: 'Sleep', done: false},
    {description: 'Play', done: false},
    {description: 'Laugh', done: false},
  ];

  addItem(description: string) {
    this.allItems.push({
      description,
      done:false
    });
  }

  remove(item : Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
