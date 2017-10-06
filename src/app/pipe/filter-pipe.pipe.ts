import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: string[], arg?: string): any {
    if (arg) {
      let filtered = [];
      value.forEach(mob => {
        if (mob.charAt(0) === arg) {
          filtered.push(mob);
        }
      });
      return filtered;
    }
    return value;
  }

}
