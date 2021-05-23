import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRippleButton]'
})
export class RippleButtonDirective {

  constructor(
    private el: ElementRef,
    private rendrer: Renderer2
  ) {
    console.log(this.el);
  }
  // screenWidth = document.documentElement.clientWidth;
  clientX: any;
  clientY: any;
  offSetX: any;
  offSetY: any;

  @HostListener('mousemove', ['$event'])
  onMove(event: MouseEvent) {
    // const rect = this.el.nativeElement.getBoundingClientRect();
    // var fixedBoxOffsetTop = rect.top + window.pageYOffset - document.documentElement.clientTop;
    // console.log('on move----');
    // var clientRect = this.el.nativeElement.addEventListner();
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    this.offSetX = event.offsetX;
    this.offSetY = event.offsetY;
    // console.log(event)
    // console.log(this.clientX, this.clientY)
  }

  // @HostListener('mouseover', ['$event'])
  // onHover() {
  //   var clientRect = this.el.nativeElement.getBoundingClientRect();
  //   this.clientX = clientRect.left;
  //   this.clientY = clientRect.top;
  //   console.log(this.clientX + ' <---> ' + this.clientY);
  // }

  @HostListener('click', ['$event'])
  onClick() {
    console.log('buton clicked');
    var circle = document.createElement('div');
    this.rendrer.appendChild(this.el.nativeElement, circle)
    var d = Math.max(this.el.nativeElement.clientWidth, this.el.nativeElement.clientHeight);


    console.log('client X =' + this.clientX);
    console.log('client Y =' + this.clientY);
    console.log(this.el.nativeElement.offsetLeft)
    console.log(this.el.nativeElement.offsetTop)

    circle.style.width = circle.style.height = d + 'px';
    circle.style.left = (this.clientX - this.el.nativeElement.offsetLeft - d / 2) -(this.clientX/1.60)  + 'px';
    circle.style.top = this.clientY - this.el.nativeElement.offsetTop - d / 2 + 'px';
    console.log(circle.style.left);
    console.log(circle.style.top);
    circle.classList.add('ripple');
    // circle.style.backgroundColor = 'red';
    // circle.style.height = '100px';
    // circle.style.width = '100px';
    // circle.style.borderRadius = '50%';
    // circle.style.position = 'absolute';
    // this.el.nativeElement.style.backgroundColor = 'red';
  }


}
