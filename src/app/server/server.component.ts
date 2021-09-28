import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit{
    serverID: number = 10;
    // serverID = 10 also works!
    serverStatus: string = 'online'

    getServerStatus(){
        return this.serverStatus
    }


    allowServer = false
    constructor() {
        setTimeout(()=>{
            this.allowServer = true;
        }, 6000)
    }

    ngOnInit(){

    }
}