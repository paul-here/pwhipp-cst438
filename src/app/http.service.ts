import { Injectable } from '@angular/core';

// general note: all services are SINGLETONS, so you can use them all over your app, 
// they are only created once

// best practice, put this in a subfolder

@Injectable({
  // providedIn: 'root' --> never give root access -- don't do this
  // best practice, enumerate every component. don't just root it!!
  providedIn: 'root'
})
export class HttpService {

  constructor() { }


  myMethod(){

    return console.log('wassup');
  }
}
