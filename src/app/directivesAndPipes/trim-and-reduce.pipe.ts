import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimAndReduce'
})
export class TrimAndReducePipe implements PipeTransform {
//  pipe to change string title or description on input args
  transform(value: string, args?: any): any {
    if(value.length > args ){
      return value.slice(0,args-5)+'...';
    }else{
      return value;
    }
    
  }

}
