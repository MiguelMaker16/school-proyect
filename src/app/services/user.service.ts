import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private auth: Auth) { }

  loginOrRegister({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          return createUserWithEmailAndPassword(this.auth, email, password);
        }
        throw error;
      });
  }
}