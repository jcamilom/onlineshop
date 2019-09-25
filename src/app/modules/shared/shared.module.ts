import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { CheckFieldComponent } from './components/check-field/check-field.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ToggleButtonComponent,
    SearchFieldComponent,
    CheckFieldComponent,
    UnderConstructionComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    ToggleButtonComponent,
    SearchFieldComponent,
    CheckFieldComponent,
    UnderConstructionComponent,
    FontAwesomeModule,
    FormsModule
  ]
})
export class SharedModule { }
