import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asciiPipe'
})
export class AsciiPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(value.charAt(args),`${value.charCodeAt(args)}`);
  }

}
