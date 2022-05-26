import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adult',
})
export class AdultPipe implements PipeTransform {
  transform(value: any): any {
    return value.filter((v: { age: number }) => v.age >= 18);
  }
}
