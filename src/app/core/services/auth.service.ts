import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInfo } from 'firebase';

export interface Credentials {
    email: string;
    password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly authState$ = this.fireAuth.authState;

  private userData: UserInfo;
  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  login(credentials: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCrediendial => this.userData = userCrediendial.user)
  }

  register(credentials: {email: string, password: string}) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  logout(){
    return this.fireAuth.auth.signOut();
  }

  isLoggenIn() {
    return !!this.userData;
  }

  get user(){
    return this.userData;
  }

}
