import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverID: number = 10;
    // serverID = 10 also works!
    serverStatus: string = 'online'

    getServerStatus(){
        return this.serverStatus
    }
}