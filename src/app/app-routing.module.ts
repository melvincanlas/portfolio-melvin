import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BackComponent } from './back/back.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { WorkwithmeComponent } from './workwithme/workwithme.component';

const routes: Routes = [{path: 'about', component: AboutComponent}, {path: 'work', component: WorkComponent}, {path: 'contact', component: ContactComponent}, {path: 'home', component: HomeComponent}, {path: 'letswork', component: WorkwithmeComponent}, {path: '**', component: BackComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
