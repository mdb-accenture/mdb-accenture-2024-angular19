import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Contact, ContactMock, IContact, IContactAction } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { ContactCardsComponent } from "../../components/contact-cards/contact-cards.component";
import { ContactTableComponent } from "../../components/contact-table/contact-table.component";
import { ContactFormComponent } from "../../components/contact-form/contact-form.component";

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, ContactCardsComponent, ContactTableComponent, ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cardView: boolean = true;
  contact: IContact = new Contact();
  contacts: IContact[] = [];

  @ViewChild('contactModal') contactModal!: ElementRef;

  constructor(private ContactService: ContactService) {}

  ngOnInit(): void {
    this.getAllContacts();
  }

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

  getAllContacts() {
    this.contacts = this.ContactService.getAllContacts();
  }

  addContact() {
    this.contact = new Contact();
    this.openModal();
  }

  updateContact(_id: number | string) {
    this.contact = structuredClone(this.contacts.find(c => c.id === _id)) || new Contact();
    this.openModal();
  }

  action(_event: IContactAction) {
    switch(_event.action) {
      case 'edit':
        if(_event.contact) 
          this.updateContact(_event.contact.id);
      break;
      case 'delete':
        if(_event.contact) {
          if(this.ContactService.deleteContact(_event.contact))
            this.getAllContacts();
        }
      break;
      case 'formClose':
        this.closeModal();
      break;
      case 'formSubmit':
        if(this.contact.id === 0) {
          if(this.ContactService.addContact(this.contact))
          this.getAllContacts();
        }
        else {
          if(this.ContactService.updateContact(this.contact))
          this.getAllContacts();
        }
        this.closeModal();
      break;
    }
  }
}
