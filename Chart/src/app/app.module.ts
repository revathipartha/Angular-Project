import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PostsComponent } from './posts/posts.component';
import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { ChartComponent } from './chart/chart.component';
import { EditPageComponent } from './edit-page/edit-page.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DetailspageComponent,
    ChartComponent,
    EditPageComponent
  
    
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule ,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
