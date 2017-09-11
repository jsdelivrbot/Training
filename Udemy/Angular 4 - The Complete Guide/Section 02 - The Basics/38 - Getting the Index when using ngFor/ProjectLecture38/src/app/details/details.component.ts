import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  showDetails: boolean;
  count: number;
  countArray: number[] = [];

  constructor() {
    this.showDetails = false;
    this.count = 0;
    // this.countArray = [];
  }

  ngOnInit() {
  }

  toggleShowDetails(){
    this.count += 1;
    console.log(this.count);
    this.countArray.push(this.count);
    console.log(this.countArray);
    if(this.showDetails == false){
      console.log("Make this True");
      this.showDetails = true;
    }
    else{
      console.log("Make this False");
      this.showDetails = false;
    }
    return this.showDetails;
  }

}
