import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContactMock, IContact } from '../../../model/contact';

@Component({
  selector: 'app-contact-cards',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule, RouterLink],
  templateUrl: './contact-cards.component.html',
  styleUrl: './contact-cards.component.css'
})
export class ContactCardsComponent {
  dataSource: IContact[] = ContactMock;
}
