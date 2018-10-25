import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimAndReduce'
})
export class TrimAndReducePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    // debugger;
    if(value.length > 115){
      return value.slice(0,100)+'...';
    }else{
      return value;
    }
    
  }

}
