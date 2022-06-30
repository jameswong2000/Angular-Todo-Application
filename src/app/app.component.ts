import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Todo-Application';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    {description: 'Eat', done: true},
    {description: 'Sleep', done: false},
    {description: 'Play', done: false},
    {description: 'Laugh', done: false},
  ];

  getItems() {
    if(this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.push({
      description,
      done:false
    });
  }
}
