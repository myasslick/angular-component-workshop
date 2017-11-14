import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SmartTextMaskDirective } from './smart-text-mask/smart-text-mask.directive';
import { SmartSelectComponent } from './smart-select/smart-select.component';
import { OutsideClickDirective } from './smart-select/outside-click.directive';
import { SearchPipe } from './smart-select/pipes/search.pipe';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        SmartTextMaskDirective, 
        SmartSelectComponent,
        CommonModule
    ],
    declarations: [
        SmartTextMaskDirective, 
        SmartSelectComponent, 
        OutsideClickDirective, 
        SearchPipe
    ],
    providers: [],
})
export class SmartUIModule { }
