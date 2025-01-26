import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ContactMock, IContact } from '../../../model/contact';

@Component({
  selector: 'app-contact-table',
  imports: [MatIconModule, RouterLink],
  templateUrl: './contact-table.component.html',
  styleUrl: './contact-table.component.css'
})
export class ContactTableComponent {
  displayedColumns: string[] = ['name', 'contactNumber', 'emailAddress'];
  dataSource: IContact[] = ContactMock;
}
