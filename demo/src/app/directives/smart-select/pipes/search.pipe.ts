import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, searchFor: any, property: any): any {
    if (searchFor) {
      return items.filter(item => {
        if (property) {
          return item[property].startsWith(searchFor);
        } else {
          return item.startsWith(searchFor);
        }
      });
    }
    return items;
  }
}
