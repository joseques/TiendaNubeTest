import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookSquare, faTwitterSquare, faGooglePlusSquare, faEdit, faTrashAlt);
@NgModule({
	imports: [
		CommonModule,
		ProductsRoutingModule,
		NgbModule,
		FormsModule,
		FontAwesomeModule
	],
	declarations: [ListComponent, NewComponent]
})
export class ProductsModule { }
