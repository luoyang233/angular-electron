import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		NgZorroAntdModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
