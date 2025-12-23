import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactJsonServerService {
  private apiUrl: string = "http://localhost:5000/contacts";
  
  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.apiUrl);
  }

  addContact(_contact: IContact): Observable<IContact[]> {
    return this.http.post<IContact[]>(this.apiUrl, _contact);
  }

  updateContact(_contact: IContact): Observable<IContact[]> {
    return this.http.put<IContact[]>(`${this.apiUrl}/${_contact.id}`, _contact);
  }

  deleteContact(id: string): Observable<IContact[]> {
    return this.http.delete<IContact[]>(`${this.apiUrl}/${id}`);
  }
}