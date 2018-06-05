
export class Product {
	private _id: string = "";
	get id(): string {
		if(this._id == "")
			this._id = this.generateID();
		return this._id;
	}
	set id(val: string) {
		this._id = val;
	}
	name: string = "";
	description: string = "";
	price: string = "0,00";
	promotionalPrice: string = "+";
	stock: number = 1;
	imgs: Array<string> = new Array;
	constructor() {
		this.id;
	}
	public static toJSON(obj) {
		return JSON.stringify(obj);
	}
	public static fromJSON(json){
		if (typeof json === 'string') {
			return JSON.parse(json, Product.parser);
		} else if (json !== undefined && json !== null) {
			let product = Object.create(Product.prototype);
			return Object.assign(product, json);
		} else {
			return json;
		}
	}
	public static parser(key: string, value: any): any {
		return key === '' ? Product.fromJSON(value) : value;
	}
	private generateID(){
		return Math.random().toString(36).replace(/[0.]+/g, '');
	}
}