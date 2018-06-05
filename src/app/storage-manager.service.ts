import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StorageManagerService {
	constructor() { }
	public saveItem(key,value){
		if (typeof value === 'string' && typeof key === 'string')
			return localStorage.setItem(key, value);
		else
			throw "StorageManagerService.saveItem() only takes strings parameters";
	}
	public getItem(key){
		if (typeof key === 'string')
			return localStorage.getItem(key);
		else
			throw "StorageManagerService.getItem() only takes strings parameters.";
	}
}
