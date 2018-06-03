import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'products', loadChildren: './products/products.module#ProductsModule' },
	{ path: 'products/new', loadChildren: './products/products.module#ProductsModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
