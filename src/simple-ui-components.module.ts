import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextMaskDirective } from './text-mask/text-mask.directive';
import { SmartSelectComponent } from './smart-select/smart-select.component';
import { OutsideClickDirective } from './smart-select/outside-click.directive';
import { SearchPipe } from './smart-select/pipes/search.pipe';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        TextMaskDirective, 
        SmartSelectComponent,
        CommonModule
    ],
    declarations: [
        TextMaskDirective, 
        SmartSelectComponent, 
        OutsideClickDirective, 
        SearchPipe
    ],
    providers: [],
})
export class SimpleUIComponentsModule { }
