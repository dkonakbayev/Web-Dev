import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopBarComponent } from './src/app/top-bar/top-bar.component.ts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}
