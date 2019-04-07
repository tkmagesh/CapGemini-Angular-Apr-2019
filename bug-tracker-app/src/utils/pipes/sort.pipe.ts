import { Pipe, PipeTransform } from '@angular/core';

interface Comparer{
	(item1 : any, item2 : any) : number
}


@Pipe({
	name : 'sort',
	pure : false
})
export class SortPipe implements PipeTransform{

	private getComparerFor(attrName : string ) : Comparer {
		return function(item1 : any, item2 : any) : number {
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
		}
	}

	private getDescendingComparerFor(comparer : Comparer) : Comparer {
		return function(item1 : any, item2 : any) : number {
			return comparer(item1, item2) * -1;
		}
	}

	transform(list : any[], attrName : string, isDescending : boolean = false ) : any[] {
		if (!list || !list.length || !attrName)
			return list;
		let comparer = this.getComparerFor(attrName);
		if (isDescending)
			comparer = this.getDescendingComparerFor(comparer);

		list.sort(comparer);
		return list;
	}
}