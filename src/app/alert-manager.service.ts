import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AlertManagerService {
	constructor() { }
	dispatchError(message){
		alert("❌ "+message);
	}
	dispatchSuccess(message) {
		alert("✔️ "+message);
	}
}