import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], prog:string,sem: string,category: string): any[] {
    if (items && items.length){
      return items.filter(item =>{
          if (prog && item.programme!== prog &&item.programme.toLowerCase().indexOf(prog.toLowerCase()) === -1){
              return false;
          }
          if (sem && item.sem.toLowerCase().indexOf(sem.toLowerCase()) === -1){
              return false;
          }
          if (category && item.category.toLowerCase().indexOf(category.toLowerCase()) === -1){
              return false;
          }
          return true;
     })
  }
  else{
      return items;
  }
  }

}
