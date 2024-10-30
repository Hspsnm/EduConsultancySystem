import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'home',component:HomeComponent},
    {path: 'home1', component:Home1Component},
    {path: 'home2', component:Home2Component},
    {path: 'about', component:AboutComponent},
    {path: 'contact', component: ContactComponent}
];

@NgModule({
    imports:
    [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}