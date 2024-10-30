
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd,RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive, NavbarComponent, HomeComponent,LoginComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  constructor(private router: Router){}
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        console.log('Navigation Ends',event);
      }
    });
  }
}
