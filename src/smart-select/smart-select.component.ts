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
  styles: [
    `.bs-donebutton, .bs-searchbox {
      padding: 4px 8px;
    }
    
    .scrollable-menu {
      height: auto;
      max-height: 250px;
      overflow-x: hidden;
    }
    
    .dropdown-menu.inner {
      position: static;
      float: none;
      border: 0;
      padding: 0;
      margin: 0;
      border-radius: 0;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
    
    .scrollable-menu {
      max-height: 150px;
      overflow-y: auto;
      min-height: 0px;
    }
    
    .select-caret {
      float: right;
      margin: 8px 0;
    }`
  ],
  template: `<div [ngClass]="{'dropup': dropdownDirection === 'up'}">
  <div (outsideClick)="closeDropdown()" class="btn-group bootstrap-select btn-block" [ngClass]="{'open': open}">
  
    <button (click)="toggleOpen()"
            type="button"
            class="btn dropdown-toggle btn-default"
            role="button"
            aria-expanded="true">
      <span class="filter-option pull-left">
      <div *ngIf="selectedItem">{{ displayProp ? selectedItem[displayProp] : selectedItem}}</div>
        <div *ngIf="!selectedItem" class="text-muted">{{placeholder}}</div>
      </span>&nbsp;
      <span class="bs-caret "><span class="caret select-caret"></span></span>
    </button>
  
  
    <div class="dropdown-menu open col-xs-12" role="combobox">
  
      <div class="bs-searchbox" *ngIf="showSearch">
        <input type="text" class="form-control" autocomplete="off" role="textbox" aria-label="Search"
               [(ngModel)]="searchText" (keydown)="handleKey($event)">
      </div>
  
      <ul class="dropdown-menu inner scrollable-menu" role="listbox" aria-expanded="true">
  
        <ng-template [ngIf]="!displayProp">
          <li *ngFor="let item of items | search:searchText | slice:0:itemLimit"
              [ngClass]="{'active': item == selectedItem}">
            <a (click)="selectItem(item)">{{item}}</a>
          </li>
        </ng-template>
  
        <ng-template [ngIf]="displayProp">
          <li *ngFor="let item of items | search:searchText:displayProp | slice:0:itemLimit" [ngClass]="{'active': item == selectedItem}">
            <a (click)="selectItem(item)">{{item[displayProp]}}</a>
          </li>
        </ng-template>
  
  
        <div [style.display]="showFooter() ? 'inherit': 'none'">
          <li role="separator" class="divider"></li>
          <li class="dropdown-header">Showing {{itemLimit}} of {{items.length}}</li>
          <li>
            <div class="bs-donebutton pull-right">
              <a (click)="showAll()" class="btn btn-default btn-xs">Show all</a>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
  </div>
  `,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SmartSelectComponent implements OnInit, ControlValueAccessor {

  @Input() public items: any = [];
  @Input() public itemLimit = 100;
  @Input() public showSearch = true;
  @Input() public placeholder = 'No item selected';
  @Input() public valueProp: any;
  @Input() public displayProp: any;
  @Input() public dropdownDirection = 'down';

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  public open: boolean;
  private searchText: string;
  public selectedItem: any;
  private activeItem: any;

  constructor() {
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
