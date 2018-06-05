import { Injectable } from '@angular/core';
import { AlertManagerService } from './alert-manager.service';

@Injectable({
	providedIn: 'root'
})
export class ImageReaderService {

	constructor(private alertHandler: AlertManagerService) { }

	public readImage(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
		});
	}
}