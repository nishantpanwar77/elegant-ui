import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective implements AfterViewInit {
  @Input() getClicked: boolean = false;
  @Output() offClick = new EventEmitter();
  constructor(
    private elmRef: ElementRef
  ) { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    // console.log('clicked')
    this.getClicked = !this.getClicked;
    if (this.getClicked) {
      // console.log('inside if')
      this.elmRef.nativeElement.classList.add('dropdown-visible');
      this.elmRef.nativeElement.classList.remove('dropdown-invisible')
    } else {
      // console.log('inside else')
      this.elmRef.nativeElement.classList.add('dropdown-invisible')
      this.elmRef.nativeElement.classList.remove('dropdown-visible')
    }
  }

  @HostListener('document:click', ['$event.path'])
  @HostListener('document:touchstart', ['$event']) // For iPhone only
  public onGlobalClick(targetElementPath: Array<any>) {
    let elementRefInPath = targetElementPath.find(e => e === this.elmRef.nativeElement);
    if (!elementRefInPath) {
      this.offClick.emit(null);
      // console.log('Outside clicked')
      this.elmRef.nativeElement.classList.add('dropdown-invisible')
      this.elmRef.nativeElement.classList.remove('dropdown-visible')
    }
  }

  ngAfterViewInit() {
  }

}
