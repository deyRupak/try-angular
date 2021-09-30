import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .one {
            color: white;
        }

        .list {
            backgroundColor: blue;
            font: white;
        }

    `]
})

export class ServerComponent implements OnInit{
    serverID: number = 10;
    // serverID = 10 also works!
    serverStatus: string = 'online'

    getServerStatus(){
        return this.serverStatus
    }


    allowServer = false

    // dynamic styling
    fontColor = ""

    constructor() {
        setTimeout(()=>{
            this.allowServer = true;
        }, 6000)

        this.fontColor = Math.random() > 0.5 ? 'yes' : 'no'
    }

    // dynamic styling
    getFont(){
        return this.fontColor === 'yes' ? 'green' : 'red'
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
    clicks = []
    
    changeCondition(){
        this.clicks.push(this.clicks.length + 1)
        if (this.ifElse){
            this.ifElse = false
        }
        else {
            this.ifElse = true
        }
        return this.clicks
    }


    

    
    
}