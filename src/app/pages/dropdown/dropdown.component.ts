import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
 
  selectedValue: any;

  foods: any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
