import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {

}
