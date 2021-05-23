import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { tap, takeUntil, filter } from 'rxjs/operators';

@Directive({
  selector: '[auiButton]'
})
export class AuiButtonDirective {

  @Output() holdTime: EventEmitter<number> = new EventEmitter();

  state: Subject<string> = new Subject();

  cancel: Observable<string>;

  constructor(
    private _elRef: ElementRef
  ) {
    this.cancel = this.state.pipe(
      filter(val => val === 'cancel'),
      tap(_val => {
        console.log('stop hold');
        this.holdTime.emit(0);
      })
    );
  }

  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onExit() {
    this.state.next('cancel');
  }

  @HostListener('mousedown', ['$event'])
  onHold() {
    console.log('start hold');
    this.state.next('start');
    const n = 100;
    interval(n).pipe(
      takeUntil(this.cancel),
      tap(val => {
        this.holdTime.emit(val * n);
      })
    ).subscribe()
  }

}
