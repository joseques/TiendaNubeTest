import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SidebarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }