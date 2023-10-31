import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  items = [
    { name: 'alvaro', lastname: 'Lesd', email: 'alv@gmail.com', phone: '555-555-5555', address: 'C.Roger 23', editing: false },
    { name: 'Juan', lastname: 'Ole', email: 'jo@gmail.com', phone: '555-555-5555', address: 'C.Roger 56', editing: false },
  ];

  editItem(index: number) {
    this.items[index].editing = true;
  }

  saveItem(index: number) {
    this.items[index].editing = false;
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  addItem() {
    this.items.push({ name: '', lastname: '', email: '', phone: '', address: '', editing: true });
  }

  
}
