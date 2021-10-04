import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit,
  Component, 
  ContentChild, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges, 
  
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {
  @Input('srvElement') element : {type:string, name:string, content:string};

  @ContentChild('contentParagraph', {static:true}) paragraph : ElementRef;

  constructor() { 
    console.log("constructor called")
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log("ngOnChanges called")
    console.log(changes)
  }

  ngOnInit() {
    console.log("ngOnInit called")
  }

  ngDoCheck() {
    console.log('doCheck called')
  }

  ngAfterContentInit() {
    console.log("AfterContentInit called")
    console.log("paragraph: " + this.paragraph)
  }

  ngAfterContentChecked(){
    console.log("AfterContentChecked called")
  }

  ngAfterViewInit(){
    console.log("AfterViewInit called")
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked called")
  }

  ngOnDestroy(){
    console.log("OnDestroy called")
  }

}
