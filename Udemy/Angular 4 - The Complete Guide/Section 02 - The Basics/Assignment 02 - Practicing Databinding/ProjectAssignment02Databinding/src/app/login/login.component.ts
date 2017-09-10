import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  isEmptyVar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  isEmpty(event: Event){
    //if input value.length < 1 return true, else return false?
    console.log(event);
    if((<HTMLInputElement>event.target).value.length > 0){
      console.log("There is a value");
      this.isEmptyVar = false;
      return this.isEmptyVar;
    }
    else {
      console.log("No Value");
      this.isEmptyVar = true;
      return this.isEmptyVar;
    }
  }

  onClickResetInput(){
    console.log("");
    this.username = "";
  }
}
