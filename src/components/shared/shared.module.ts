import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ObjectiveComponent } from '../objective/objective.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HeaderComponent, ObjectiveComponent],
  exports: [HeaderComponent, ObjectiveComponent]
})
export class SharedModule { }