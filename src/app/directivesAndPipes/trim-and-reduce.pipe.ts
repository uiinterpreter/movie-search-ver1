import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimAndReduce'
})
export class TrimAndReducePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    // debugger;
    if(value.length > args ){
      return value.slice(0,args-5)+'...';
    }else{
      return value;
    }
    
  }

}
