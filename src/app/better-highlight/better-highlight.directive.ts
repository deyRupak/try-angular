import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  //  allows to bind to any property of the element associated
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  // why is 'Renderer' a better approach?
  // Angluar not limited to browser, aldo works with service workers
  // these environments might not have access to DOM
  // so this avoids errors and is a better practice to alter the DOM


  ngOnInit(){
    // element, style, value, flag(optional; eg. !important)
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }


  // listens to the DOM event on the host element
  // It also provides a handler method to run when that event occurs
  @HostListener('mouseenter') mouseover(eventData : Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    
    // when using HostBinding
    this.backgroundColor = 'blue'
  }

  @HostListener('mouseleave') mouseleave(eventData : Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')

    this.backgroundColor = 'transparent'
  }


  
}
