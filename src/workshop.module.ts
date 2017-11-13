import { NgModule } from '@angular/core';
import { TextMaskDirective } from './text-mask/text-mask.directive';
import { SmartSelectComponent } from './smart-select/smart-select.component';
import { OutsideClickDirective } from './smart-select/outside-click.directive';
import { SearchPipe } from './smart-select/pipes/search.pipe';

@NgModule({
    imports: [],
    exports: [
        TextMaskDirective, 
        SmartSelectComponent
    ],
    declarations: [
        TextMaskDirective, 
        SmartSelectComponent, 
        OutsideClickDirective, 
        SearchPipe
    ],
    providers: [],
})
export class WorkShopModule { }
