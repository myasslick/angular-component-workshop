import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OutsideClickDirective } from './outside-click.directive';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SmartSelectComponent),
  multi: true
};

const noop = (_?: any) => {
};

@Component({
  selector: 'smart-select',
  templateUrl: 'smart-select.component.html',
  styleUrls: ['smart-select.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SmartSelectComponent implements OnInit, ControlValueAccessor {

  @Input() items: any = [];
  @Input() itemLimit = 100;
  @Input() showSearch = true;
  @Input() placeholder = 'No item selected';
  @Input() valueProp: any;
  @Input() displayProp: any;
  @Input() dropdownDirection = 'down';

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  private open: boolean;
  private searchText: string;
  private selectedItem: any;
  private activeItem: any;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.selectedItem = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  toggleOpen() {
    return this.open ? this.closeDropdown() : this.openDropDown();
  }

  openDropDown() {
    this.open = true;
    this.searchText = '';
  }

  closeDropdown() {
    this.open = false;
    this.searchText = '';
  }

  showAll() {
    this.itemLimit = this.items.length;
  }

  selectItem(item: any) {
    this.selectedItem = item;
    this.onChangeCallback(this.selectedItem);
    this.closeDropdown();
  }

  selectNext() {
    if (this.selectedItem !== undefined) {
      const index = this.items.indexOf(this.selectedItem);
      this.selectedItem = this.items[index + 1 % this.items.length];
    } else {
      this.selectedItem = this.items[0];
    }
  }

  selectPrevious() {
    if (this.selectedItem !== undefined) {
      const index = this.items.indexOf(this.selectedItem);
      this.selectedItem = this.items[index - 1 % this.items.length];
    } else {
      this.selectedItem = this.items[0];
    }
  }

  showFooter() {
    if (this.items.length <= this.itemLimit) {
      return false;
    }

    if (this.itemLimit === this.items.length) {
      return false;
    }

    return true;
  }

  handleKey(e: any) {
    // esc
    if (e.keyCode === 27) {
      this.closeDropdown();
      e.preventDefault();
      return;
    }

    // down
    if (e.keyCode === 40) {
      this.selectNext();
      e.preventDefault();
      return;
    }

    // up
    if (e.keyCode === 38) {
      this.selectPrevious();
      e.preventDefault();
      return;
    }

    if (e.keyCode === 13) {
      this.closeDropdown();
    }
  }
}
