import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(
    private clipboard: Clipboard
  ) { }

  ngOnInit(): void {
  }

  copyHeroName(className: string, iconName: string, iconType: string) {
    if (iconType === 'mat') {
      this.clipboard.copy(`
      <div class="icon-wrapper ${className}">
        <span class="material-icons">${iconName}</span>
      </div>
      `);
    } else if (iconType === 'fa') {
      this.clipboard.copy(`
      <div class="icon-wrapper ${className}">
        <i class="fa fa-${iconName}"></i>
      </div>
      `)
    }
  }

}
