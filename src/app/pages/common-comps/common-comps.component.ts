import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { SidebarComponent } from "../../layout/sidebar/sidebar.component";

@Component({
  selector: 'app-common-comps',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, SidebarComponent],
  templateUrl: './common-comps.component.html',
  styleUrl: './common-comps.component.scss'
})
export class CommonCompsComponent {

}
