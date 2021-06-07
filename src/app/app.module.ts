import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './blocks/app/app.component';
import {LoginComponent} from './blocks/login/login.component';
import {TableComponent} from './blocks/table/table.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {PrettyErrorPipe} from './pipes/pretty-error/pretty-error.pipe';
import { CodeComponent } from './blocks/code/code.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        TableComponent,
        PrettyErrorPipe,
        CodeComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
