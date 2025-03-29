import { Component } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { CommonModule } from '@angular/common';
import { CommonCompsComponent } from "./pages/common-comps/common-comps.component";
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MaterialModule, CommonModule, CommonCompsComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dgh';
}
