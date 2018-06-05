import { Injectable } from '@angular/core';
import { StorageManagerService } from './storage-manager.service';
import { Product } from './products/product.model';
import { AlertManagerService } from './alert-manager.service';

@Injectable({
	providedIn: 'root'
})
export class ProductStorageManagerService {
	constructor(private storage: StorageManagerService, private alertHandler: AlertManagerService) {}

	public addProduct(product: Product) { //In charge of adding new products to the LocalStorage list
		try {
			let arrList = this.getJSONProducts(); //We get the list from the local storage vault and we deserialize it.
			arrList.push(Product.toJSON(product)); //We directly push the JSON object since we don't need to deserialize the object and we save resources :D
			this.storage.saveItem('products', JSON.stringify(arrList)); // We save the modified array now serialized again.
		} catch (e) {
			this.alertHandler.dispatchError("Hubo un error registrando su producto, por favor intente nuevamente."); // oops
			return false;
		}
		this.alertHandler.dispatchSuccess("¡Buenísimo! El producto se registró exitosamente.");
		return true;
	}
	getProducts():Array<Product>{ 
		let resultList = Array<Product>();
		try {
			let arrList = this.getJSONProducts();//We get the list from the local storage vault and we deserialize it.
			arrList.forEach(prod => {
				resultList.push(Product.fromJSON(prod));//Push the deserialized object into the result array and there we go.
			});
		} catch(e){
			this.alertHandler.dispatchError("Hubo un error intentando obtener la lista de productos."); // oopsie
			return;
		}
		return resultList;
	}
	private getJSONProducts():Array<string>{
		return JSON.parse(this.storage.getItem('products')) || [];
	}
}