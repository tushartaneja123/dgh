import { Routes } from '@angular/router';
import { NestedAccordianComponent } from './pages/nested-accordian/nested-accordian.component';
import { CommonCompsComponent } from './pages/common-comps/common-comps.component';
import { CheckboxComponent } from './pages/checkbox/checkbox.component';
import { StepperComponent } from './pages/stepper/stepper.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import { FormFieldComponent } from './pages/form-field/form-field.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';

export const routes: Routes = [
    {path:'nestedPanel',component:NestedAccordianComponent},
    {path:'checkbox',component:CheckboxComponent},
    {path:'stepper',component:StepperComponent},
    {path:'dropdown',component:DropdownComponent},
    {path:'formField',component:FormFieldComponent},
    {path:'sidenav',component:SidenavComponent},
];
