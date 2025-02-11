import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IContact } from '../../../models/contact';

@Component({
  selector: 'app-contact-detail',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  @Input() contact: IContact | undefined;
}
