import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup , FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;
  public loggedInUser: boolean = false;

  constructor ( private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    ){
      sessionStorage.clear();
  };
 

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    })
  }

 
  login(){

    // this.http.get<any>("http://localhost:4000/user/getAll")
    // .subscribe(res => {

    //   console.log(res)
    // })



    this.http.get<any>("http://localhost:4000/user/getAll")
    .subscribe((res: any) => {
          const user = res.data.find((a:any) => {
            return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
          });
  
          if(user) {
            alert("Login successfull");
            sessionStorage.setItem('email', user.email);
            this.loginForm.reset();
            this.router.navigate(['dashboard'])
          } else {
            alert("User not found");
          }
          
      }, err => {
        console.log(err)
        alert("Invalid credentials. Please verify your login information")
      })
    }


// logInForm = this.FormBuilder.group({

//     userName: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)])],
//     password: ['', Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]{5,}$/)])],

// });





// save(event: Event) {
//     event.preventDefault();
//     if(this.logInForm.valid) {

//     } else {
//         // alert('you must fill the form')
//         this.logInForm.markAllAsTouched();
//     };


// }


get emailField( ){
  return this.loginForm.get('email')
}


get passwordField( ){
  return this.loginForm.get('password')
}

  
}
