import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextMaskDirective } from './directives/text-mask/text-mask.directive';
import { SmartSelectComponent } from './directives/smart-select/smart-select.component';
import { OutsideClickDirective } from './directives/smart-select/outside-click.directive';
import { SearchPipe } from './directives/smart-select/pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TextMaskDirective,
    SmartSelectComponent,
    OutsideClickDirective,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
