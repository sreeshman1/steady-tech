import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    PartnersComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ReportComponent,
  ],
  imports:[
  CommonModule,
  NgtUniversalModule,
  TransferHttpCacheModule,
  HttpClientModule,
  AppRoutingModule,
  BrowserAnimationsModule, 
  MatToolbarModule,
  MatCardModule,
  FormsModule
  ],
  providers: [],
})
export class AppModule { }
