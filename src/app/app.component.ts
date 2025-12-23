import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiToastComponent } from './components/ui/ui-toast/ui-toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'acc-assessment';
}
