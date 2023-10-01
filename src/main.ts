import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SharedModule } from './components/shared/shared.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: "./main.component.html"
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
