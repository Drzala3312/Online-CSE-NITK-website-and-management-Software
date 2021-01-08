import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUg'
})
export class FilterUgPipe implements PipeTransform {

  transform(items: any[], sem: string, category: string): any[] {
    if (items && items.length) {
      return items.filter(item => {
        if (sem && item.sem.toLowerCase().indexOf(sem.toLowerCase()) === -1) {
          return false;
        }
        if (category && item.category.toLowerCase().indexOf(category.toLowerCase()) === -1) {
          return false;
        }
        return true;
      })
    }
    else {
      return items;
    }
  }

}
