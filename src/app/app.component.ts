import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogInComponent } from '../components/logIn/log-in.component';
import {NavbarComponent} from '../components/navbar/navbar.component'
import {SidebarComponent} from '../components/sidebar/sidebar.component'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from '../components/register/register.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,CommonModule,LogInComponent,NavbarComponent,SidebarComponent,RouterModule ,RegisterComponent,RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
