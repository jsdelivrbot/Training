import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus: string = "No Server Was Created!"
  serverName: string = "";
  serverCreated: boolean = false;
  servers = ['Server 1', 'Server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Was Created.  Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    // console.log(event);

    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
