import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ui-header',
  imports: [MatIconModule, RouterLink],
  templateUrl: './ui-header.component.html',
  styleUrl: './ui-header.component.css'
})
export class UiHeaderComponent {
  @Input() backButton!: boolean;
  @Input() title: string = "Title";
}
