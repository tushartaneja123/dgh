import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

}
