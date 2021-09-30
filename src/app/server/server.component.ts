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

    // event binding
    createServer = "No server was created"
    onCreateServer(){
        this.createServer = "Server was created! " + this.serverName
    }

    // passing data with event binding
    serverName = "initServer"
    onUpdateServerName(event : Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    // assignment 2
    getOutput = ""
    resetInput(){
        this.getOutput = ""
    }

    // if-else condition
    ifElse = false
    changeCondition(){
        if (this.ifElse){
            this.ifElse = false
        }
        else {
            this.ifElse = true
        }
    }
}