import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { workers } from 'cluster';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  // why is 'Renderer' a better approach?
  // Angluar not limited to browser, aldo works with service workers
  // these environments might not have access to DOM
  // so this avoids errors and is a better practice to alter the DOM


  ngOnInit(){
    // element, style, value, flag(optional; eg. !important)
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

}
