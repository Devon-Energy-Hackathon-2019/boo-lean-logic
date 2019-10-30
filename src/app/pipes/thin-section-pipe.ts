import { Pipe, PipeTransform } from '@angular/core';
import { Thinsection } from './../models/thinsection/thinsection';

@Pipe({
    name: 'thinSections'
})
export class ThinSectionsPipe implements PipeTransform {
    transform(items: Array<Thinsection>, searchText: string): Array<any> {
        if(items === undefined || searchText === undefined || searchText === undefined) {
            return items;
        }
        let matchedItems = items.filter(item => {
            return item.UWI.indexOf(searchText) >= 0 || item.WellName.toUpperCase().indexOf(searchText.toUpperCase()) >= 0 || item.Depth.toString().indexOf(searchText) >= 0;
        });
        
        return matchedItems;
    }
}