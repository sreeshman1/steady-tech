import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ContactComponent} from './contact/contact.component'
import {HomeComponent} from './home/home.component'
import {BlogComponent} from './blog/blog.component'
import {ReportComponent} from './report/report.component'

const routes: Routes = [
  {
	path:'',
	pathMatch: 'full',
	component: HomeComponent
  },
  {
	path: 'contact',
	component: ContactComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
