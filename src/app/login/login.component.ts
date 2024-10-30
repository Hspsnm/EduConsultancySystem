import { Component } from '@angular/core';
import { NavbarComponent } from '@app/navbar/navbar.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginComponent, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

}
