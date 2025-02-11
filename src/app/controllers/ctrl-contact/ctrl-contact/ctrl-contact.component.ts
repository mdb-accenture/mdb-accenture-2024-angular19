import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Contact, IContact } from '../../../models/contact';
import { ContactService } from '../../../services/contact.service';
import { ContactCardsComponent } from "../../../components/contact/contact-cards/contact-cards.component";
import { ContactTableComponent } from "../../../components/contact/contact-table/contact-table.component";
import { ContactFormComponent } from "../../../components/contact/contact-form/contact-form.component";
import { UiModalComponent } from "../../../components/ui/ui-modal/ui-modal.component";

@Component({
  selector: 'app-ctrl-contact',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, UiModalComponent, ContactCardsComponent, ContactTableComponent, ContactFormComponent],
  templateUrl: './ctrl-contact.component.html',
  styleUrl: './ctrl-contact.component.css'
})
export class CtrlContactComponent implements OnInit {
  cardView: boolean = true;
  contact: IContact = new Contact();
  contacts: IContact[] = [];

  @ViewChild('contactModal') contactModal!: ElementRef;

  constructor(private ContactService: ContactService) {}

  ngOnInit(): void { 
    this.getAllContacts(); 
  }

  onSetCardView(_val: boolean) { 
    this.cardView = _val; 
  }

  openModal() { 
    if(this.contactModal) 
      this.contactModal.nativeElement.style.display = "block"; 
  }

  closeModal() { 
    if(this.contactModal) 
      this.contactModal.nativeElement.style.display = "none"; 
  }

  getAllContacts() { 
    this.contacts = this.ContactService.getAllContacts(); 
  }

  onAdd() { 
    this.contact = new Contact(); 
    this.openModal(); 
  }

  onEdit(_contact: IContact) { 
    this.contact = structuredClone(this.contacts.find(c => c.id === _contact.id)) || new Contact();
    this.openModal();
  }

  onDelete(_contact: IContact) {
    this.contact = _contact;
    this.onAction('delete');
  }


  onAction(_event: string) {
    switch(_event) {
      case 'close':
        this.closeModal();
      break;
      case 'submit':
        if(this.contact.id === 0) {
          this.contact.id = Number(this.contacts[this.contacts.length -1].id) + 1;
          if(this.ContactService.addContact(this.contact))
          this.getAllContacts();
        }
        else {
          if(this.ContactService.updateContact(this.contact))
          this.getAllContacts();
        }
        this.closeModal();
      break;
      case 'delete':
        if(this.ContactService.deleteContact(this.contact))
          this.getAllContacts();
      break;
    }
  }
}
