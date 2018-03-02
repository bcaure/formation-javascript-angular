import { Pipe, PipeTransform } from '@angular/core';

/*Pipe to sort characters by alphabetical order and sex */
@Pipe({name: 'sortByAlphAndSex'})
export class SortByAlphAndSex implements PipeTransform {
  transform(array: any[]): any[] {
      console.log('transform');
    if (array) {
      array.sort((a: any, b: any) => {
        if (a && b) {
          if (a.aliases[0] < b.aliases[0]) {
            return -1;
          } else if (a.aliases[0] > b.aliases[0]) {
            return 1;
          } else {
            if (a.isFemale > b.isFemale) {
              return -1;
            } else if (a.isFemale < b.isFemale) {
              return 1;
            } else {
              return 0;
            }
          }
      }
      });
      return array;
    }
  }
}
