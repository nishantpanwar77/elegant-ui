import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    var btn = document.getElementsByClassName('btns');
    //     const buttons = document.querySelectorAll("button");
    // buttons.forEach((button) => {
    //   button.addEventListener('click', function (e) {
    //     let x = e.clientX - (<HTMLInputElement>e.target).offsetLeft;
    //     let y = e.clientY - (<HTMLInputElement>e.target).offsetTop;
    //     let ripple = document.createElement("span");
    //     ripple.style.left = x + 'px';
    //     ripple.style.top = y + 'px';

    //     this.appendChild(ripple);

    //     setTimeout(function () {
    //       ripple.remove();
    //     }, 600); // 1second = 1000ms
    //   })
    // });
  }

}
