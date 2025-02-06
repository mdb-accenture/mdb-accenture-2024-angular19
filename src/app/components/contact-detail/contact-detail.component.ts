import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContactMock, IContact } from '../../models/contact';

@Component({
  selector: 'app-contact-detail',
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent implements OnInit {
  contact!: IContact;
  contactId!: number;
  contacts: IContact[] = ContactMock;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.contactId = parseInt(params.get('id')!);
      this.contact = this.contacts.filter(c => c.id == this.contactId)[0];
    });
  }
}
