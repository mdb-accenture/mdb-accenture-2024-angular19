import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Contact, ContactMock, IContact, IContactAction } from '../../models/contact';
import { ContactCardsComponent } from "../../components/contact-cards/contact-cards.component";
import { ContactTableComponent } from "../../components/contact-table/contact-table.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, ContactCardsComponent, ContactTableComponent, ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardView: boolean = true;
  contact: IContact = new Contact();
  contacts: IContact[] = ContactMock;

  @ViewChild('contactModal') contactModal!: ElementRef;

  setCardView = (_val: boolean) => {
    this.cardView = _val;
  }

  openModal() {
    if(this.contactModal) {
      this.contactModal.nativeElement.style.display = "block";
    }
  }

  closeModal() {
    if(this.contactModal) {
      this.contactModal.nativeElement.style.display = "none";
    }
  }

  addContact() {
    this.contact = new Contact();
    this.openModal();
  }

  updateContact(_id: number | string) {
    this.contact = structuredClone(this.contacts.find(c => c.id === _id)) || new Contact();
    this.openModal();
  }

  deleteContact(_id: number | string) {
    this.contacts = this.contacts.filter(c => {return c.id !== _id});
  }

  action(_event: IContactAction) {
    switch(_event.action) {
      case 'edit':
        if(_event.contact) this.updateContact(_event.contact.id);
      break;
      case 'delete':
        if(_event.contact) this.deleteContact(_event.contact.id);
      break;
      case 'formClose':
        this.closeModal();
      break;
      case 'formSubmit':
        if(this.contact.id === 0) {
          this.contact.id = Number(this.contacts[this.contacts.length -1].id) + 1;
          this.contacts.push(this.contact);
        }
        else {
          this.contacts = this.contacts.map(c => {return c.id === this.contact.id ? this.contact : c});
        }
        this.closeModal();
      break;
    }
  }
}
