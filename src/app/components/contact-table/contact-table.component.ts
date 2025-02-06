import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { IContact, IContactAction } from '../../models/contact';

@Component({
  selector: 'app-contact-table',
  imports: [MatIconModule, RouterLink],
  templateUrl: './contact-table.component.html',
  styleUrl: './contact-table.component.css'
})
export class ContactTableComponent {
  @Input() dataSource: IContact[] = [];
  @Output() action = new EventEmitter<IContactAction>();

  edit(_contact: IContact): void {
    this.action.emit({contact: _contact, action: 'edit'});
  }

  delete(_contact: IContact): void {
    this.action.emit({contact: _contact, action: 'delete'});
  }
}
