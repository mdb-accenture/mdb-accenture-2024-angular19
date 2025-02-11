import { Injectable } from '@angular/core';
import { ContactError, ContactMock, IContact } from '../models/contact';

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

  getContactById(_id: number | string) {
    return this.contacts.find(c => c.id == _id);
  }

  addContact(_contact: IContact):boolean {
    try {
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
