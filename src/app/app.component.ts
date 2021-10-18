import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }


  // Assignment 4

  // oddNumber: number[] = []
  // evenNumber: number[] = []
  
  // onIntervalFired(firedNumber: number){
  //   if (firedNumber%2 === 0){
  //     this.evenNumber.push(firedNumber)
  //   }
  //   else{
  //     this.oddNumber.push(firedNumber) 
  //   }
  // }

  oddNumbers= [1,3,5]
  evenNumbers = [2,4,6]
  onlyOdd = false

  value = 10










}
