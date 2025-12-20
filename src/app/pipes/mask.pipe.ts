import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, mask: string): string {
    if (!value?.length) return '';
    value = value.replace(/\D+/g, "");

    let maskedValue = '';
    let valueIndex = 0;

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === '#') {
        if (value[valueIndex]) {
          maskedValue += value[valueIndex];
          valueIndex++;
        } else {
          break;
        }
      } else {
        maskedValue += mask[i];
      }
    }

    return maskedValue;
  }

}
