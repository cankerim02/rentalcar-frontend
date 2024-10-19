import { Pipe, PipeTransform } from '@angular/core';
import { Colour } from '../../models/colour';

@Pipe({
  name: 'colourFilter',
})
export class ColourFilterPipe implements PipeTransform {

  transform(value: Colour[], filterColourText: string):  Colour[] {
   filterColourText= filterColourText?filterColourText.toLocaleLowerCase():"";
   return filterColourText?value.filter((c=>c.colourName.toLocaleLowerCase().indexOf(filterColourText)!==-1)):value;
  }

}
