import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
	imports: [
		CommonModule,
		ProductsRoutingModule,
		NgbModule
	],
	declarations: [ListComponent, NewComponent]
})
export class ProductsModule { }
