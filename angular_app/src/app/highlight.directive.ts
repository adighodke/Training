/* eslint-disable no-useless-constructor */
import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor (private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter () {
    this.highlight('green', '40px', 'bold')
  }

   @HostListener('mouseleave') onMouseLeave () {
    this.highlight('', '', '')
  }

   private highlight (color: string, textSize: string, Weight: string) {
     this.el.nativeElement.style.backgroundColor = color
     this.el.nativeElement.style.fontSize = textSize
     this.el.nativeElement.style.fontWeight = Weight
   }
}
