import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductStorageManagerService } from '../../product-storage-manager.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	productList:Array<Product>;
	products;
	constructor(private productStorage: ProductStorageManagerService) {
	}
	getProducts(page){
		--page;
		this.products = this.productList.slice(page * 20, (page + 1) * 20);
	}
	ngOnInit() {
		this.productList = this.productStorage.getProducts();
		this.products = this.getProducts(1);
	}
}