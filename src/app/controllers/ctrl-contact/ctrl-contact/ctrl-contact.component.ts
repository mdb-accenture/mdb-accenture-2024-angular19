import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Contact, IContact } from '../../../models/contact';
import { ContactCardsComponent } from "../../../components/contact/contact-cards/contact-cards.component";
import { ContactTableComponent } from "../../../components/contact/contact-table/contact-table.component";
import { ContactFormComponent } from "../../../components/contact/contact-form/contact-form.component";
import { UiModalComponent } from "../../../components/ui/ui-modal/ui-modal.component";
import { UiToastComponent } from "../../../components/ui/ui-toast/ui-toast.component";
import { UiHeaderComponent } from "../../../components/ui/ui-header/ui-header.component";
import { ContactJsonServerStore } from '../../../stores/contact-json-server.store';

@Component({
  selector: 'app-ctrl-contact',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, UiModalComponent, ContactCardsComponent, ContactTableComponent, ContactFormComponent, UiHeaderComponent],
  templateUrl: './ctrl-contact.component.html',
  styleUrl: './ctrl-contact.component.css'
})
export class CtrlContactComponent {
  cardView: boolean = true;
  modalShow: boolean = false;
  
  contact: IContact = new Contact();
  store = inject(ContactJsonServerStore);
  contacts: IContact[] = this.store.contacts();

  onAdd() { 
    this.contact = new Contact(); 
    this.modalShow = true; 
  }

  onEdit(_contact: IContact) { 
    this.contact = structuredClone(_contact);
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
        // Add Method
        if(this.contact.id === 0) {
          this.contact.id = 
            (this.store.contacts().length 
              ? Number(this.store.contacts()[this.store.contacts().length -1].id) + 1 
              : 1).toString();
          this.store.addContact(this.contact);
        }
        // Update Method
        else {
          this.store.updateContact(this.contact);
        }
        this.modalShow = false;
      break;
      // Delete Method
      case 'delete':
        this.store.deleteContact(this.contact.id as number);
      break;
    }
  }
}
