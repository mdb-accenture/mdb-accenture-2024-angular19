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
import { UiToastComponent } from "../../../components/ui/ui-toast/ui-toast.component";

@Component({
  selector: 'app-ctrl-contact',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, UiModalComponent, ContactCardsComponent, ContactTableComponent, ContactFormComponent, UiToastComponent],
  templateUrl: './ctrl-contact.component.html',
  styleUrl: './ctrl-contact.component.css'
})
export class CtrlContactComponent implements OnInit {
  cardView: boolean = true;
  modalShow: boolean = false;
  
  contact: IContact = new Contact();
  contacts: IContact[] = [];

  @ViewChild(UiToastComponent) toast!: UiToastComponent;

  constructor(private ContactService: ContactService) {}

  ngOnInit(): void { 
    this.getAllContacts(); 
  }

  getAllContacts() { 
    this.contacts = this.ContactService.getAllContacts(); 
  }

  onAdd() { 
    this.contact = new Contact(); 
    this.modalShow = true; 
  }

  onEdit(_contact: IContact) { 
    this.contact = structuredClone(this.contacts.find(c => c.id === _contact.id)) || new Contact();
    this.modalShow = true;
  }

  onDelete(_contact: IContact) {
    this.contact = _contact;
    this.onAction('delete');
  }

  onAction(_event: string) {
    switch(_event) {
      case 'close':
        this.modalShow = false;
      break;
      case 'submit':
        if(this.contact.id === 0) {
          this.contact.id = Number(this.contacts[this.contacts.length -1].id) + 1;
          if(this.ContactService.addContact(this.contact)) {
            this.getAllContacts();
            this.toast.show({type: 'success', message: 'Successfully added a new contact!'});
          } else {
            this.toast.show({type: 'fail', message: 'Failed adding a new contact!'});
          }
        }
        else {
          if(this.ContactService.updateContact(this.contact)) {
            this.getAllContacts();
            this.toast.show({type: 'success', message: 'Changes saved!'});
          } else {
            this.toast.show({type: 'fail', message: 'Failed saving changes!'});
          }
        }
        this.modalShow = false;
      break;
      case 'delete':
        if(this.ContactService.deleteContact(this.contact)) {
          this.getAllContacts();
          this.toast.show({type: 'success', message: 'Contact deleted!'});
        } else {
          this.toast.show({type: 'fail', message: 'Failed deleting contact!'});
        }
      break;
    }
  }
}
