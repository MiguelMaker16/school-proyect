import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  showPassword = false;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  loginOrRegister() {
    this.userService.loginOrRegister({ email: this.email, password: this.password })
    
    .then(result => {
      console.log('User logged in or registered:', result.user);
    })

    .catch(error => {
      console.error('Login or registration error:', error.message);
    });
  }  
}
