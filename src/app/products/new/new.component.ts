import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductStorageManagerService } from '../../product-storage-manager.service';
import { ImageReaderService } from '../../image-reader.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
	@ViewChild('imgInput') imgInput: ElementRef;
	model: Product;
	colCounter: number = 0;
	
	isLoadingFile: boolean = false;
	constructor(private _sanitizer: DomSanitizer, private productStorage: ProductStorageManagerService, private imageReader: ImageReaderService, private router: Router) {
		this.model = new Product();

	}
	ngOnInit() { }
	saveProduct() {
		if(this.productStorage.addProduct(this.model)){
			this.router.navigateByUrl('/products');
		}
	}
	getProductImages(){
		let result = [];
		if(this.model.imgs.length > 0){
			result = this.arrayToMatrix(this.model.imgs, 5);
		}
		console.log(result)
	}
	popOpenFileDialog(){
		this.imgInput.nativeElement.click();
	}
	imgChangeInputListener($event){
		this.isLoadingFile = true;
		this.imageReader.readImage($event.target.files[0]).then(
			data => {
				this.model.imgs.push(data.toString());
				this.isLoadingFile = false;
			}
		);
		console.log(this.model.imgs)
	}

	private arrayToMatrix(arr, width) {
		return arr.reduce((rows, key, index) => (index % width == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
	}
}