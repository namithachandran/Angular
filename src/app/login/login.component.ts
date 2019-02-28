import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  arr = [1,2,3,4,5];
  constructor() { 
    
  }

  ngOnInit() {
    this.userName = 'Namitha'
   
  }

}
