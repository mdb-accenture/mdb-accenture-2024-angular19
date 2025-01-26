import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContactMock, IContact } from '../../../model/contact';

@Component({
  selector: 'app-contact-cards',
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './contact-cards.component.html',
  styleUrl: './contact-cards.component.css'
})
export class ContactCardsComponent {
  dataSource: IContact[] = ContactMock;
}
