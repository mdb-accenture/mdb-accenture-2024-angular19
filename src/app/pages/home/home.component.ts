import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContactCardsComponent } from "../../components/contact-cards/contact-cards.component";
import { ContactTableComponent } from "../../components/contact-table/contact-table.component";
import { Contact, ContactMock, IContact } from '../../../model/contact';

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, ContactCardsComponent, ContactTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardView: boolean = true;
  contact: IContact = new Contact();
  contacts: IContact[] = ContactMock;

  setCardView = (_val: boolean) => {
    this.cardView = _val;
  }
}
