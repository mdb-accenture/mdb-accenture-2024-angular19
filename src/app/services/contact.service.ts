import { Injectable } from '@angular/core';
import { ContactMock, IContact } from '../models/contact';

enum ContactError {
  Add = "Failed to Add Contact! Please contact admin.",
  Update = "Failed to Edit Contact! Please contact admin.",
  Delete = "Failed to Delete Contact! Please contact admin."
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts!: IContact[];

  constructor() {
    this.contacts = ContactMock;
  }

  getAllContacts() {
    return this.contacts;
  }

  addContact(_contact: IContact):boolean {
    try {
      _contact.id = Number(this.contacts[this.contacts.length -1].id) + 1;
      this.contacts.push(_contact);
      return true;
    } catch(error) {
      alert(ContactError.Add);
      console.log({error, _contact});
      return false;
    }
  }

  updateContact(_contact: IContact):boolean {
    try {
      this.contacts = this.contacts.map(c => {return c.id === _contact.id ? _contact : c});
      return true;
    } catch(error) {
      alert(ContactError.Update);
      console.log({error, _contact});
      return false;
    }
  }

  deleteContact(_contact: IContact):boolean {
    try {
      this.contacts = this.contacts.filter(c => {return c.id !== _contact.id});
      return true;
    } catch(error) {
      alert(ContactError.Delete);
      console.log({error, _contact});
      return false;
    }
  }
}
