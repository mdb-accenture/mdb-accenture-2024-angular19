import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { IContact } from '../../../models/contact';

@Component({
  selector: 'app-contact-table',
  imports: [MatIconModule, RouterLink],
  templateUrl: './contact-table.component.html',
  styleUrl: './contact-table.component.css'
})
export class ContactTableComponent {
  @Input() dataSource: IContact[] = [];
  @Output() edit = new EventEmitter<IContact>();
  @Output() delete = new EventEmitter<IContact>();

  onEdit = (_contact: IContact): void => this.edit.emit(_contact);
  onDelete = (_contact: IContact): void => this.delete.emit(_contact);
}
