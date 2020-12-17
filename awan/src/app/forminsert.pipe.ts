import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forminsert'
})
export class ForminsertPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
