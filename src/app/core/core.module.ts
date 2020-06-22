import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [
        AppRoutingModule,
        RouterModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule
    ],
    exports: [
        AppRoutingModule,
        RouterModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatPaginatorModule,
        MatTableModule,
        MatSelectModule,
        MatCheckboxModule
    ],
    entryComponents: [],
    providers: []
})
export class CoreModule { }