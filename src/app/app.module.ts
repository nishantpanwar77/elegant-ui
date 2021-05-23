import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuiButtonLoaderDirective } from './directives/aui-button-loader.directive';
import { ContentEditableDirective } from './directives/content-editable.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuiButtonLoaderDirective,
    ContentEditableDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
