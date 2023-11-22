import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  usersList: any;
  users: User[] = [];

  constructor(private userService: UserService) {}


  ngOnInit(): void {
    
    this.userService.getUsers()
    .subscribe(response => {
      this.usersList = response;
      this.users = this.usersList.data;
      console.log(this.users[1].id)
    })

  }


  editUser(id: string, index: number) {
    this.userService.editUser(id)
    this.users[index].editing = true;
  }

  saveUser(index: number) {
    this.users[index].editing = false;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  addUser() {
    this.users.push({ name: '', lastname: '', email: '', phone: '', address: '', editing: true });
  }

  
}
