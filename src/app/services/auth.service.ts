import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = environment.api;
  token: any | String;
  userId: any | String;
  isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.initAuth();
   }

  initAuth(){
    if (typeof localStorage !== "undefined") {
      // @ts-ignore
      const data = JSON.parse(localStorage.getItem("auth") );
      if (data) {
        if (data.userId && data.token) {
          this.userId = data.userId;
          this.token = data.token;
          this.isAuth$.next(true);
        }
      }
    }
  }

  signup(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      this.http.post(this.api+'/users/signup', {email: email, password: password}).subscribe((signupData:  {status: number, message: string }) =>{
        if (signupData.status === 201) {
          // authentifier l'utilisateur
          this.signin(email, password)
          .then(() => {
            resolve(true)
          }).catch((err) => {
              reject(err)
          });

        }else {
          reject(signupData.message);
        }
      },
      (err)=>{
        reject(err)
      })
    })
  }

  signin(email: string, password: string) {

    return new Promise((resolve, reject) => {
      // @ts-ignore
      this.http.post(this.api+'/users/login', {email: email, password: password}).subscribe((authData: {token: string, userId: string}) =>  {
            this.token = authData.token;
            this.userId = authData.userId;
            this.isAuth$.next(true);
            // save authData in local
            if (typeof localStorage !== "undefined") {
              localStorage.setItem('auth', JSON.stringify(authData));
            }
            console.log(authData);

            resolve(true);
          },
          (err)=>{
            reject(err)
          }
        )
    })
  }


  logout(){
    this.isAuth$.next(false);
    this.userId = null;
    this.token = null;
    if (typeof localStorage !== "undefined") {
      // @ts-ignore
      localStorage.setItem('auth', null);
    }
  }
}
