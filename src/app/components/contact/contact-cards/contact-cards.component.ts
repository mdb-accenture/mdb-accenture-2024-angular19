import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IContact } from '../../../models/contact';

@Component({
  selector: 'app-contact-cards',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule, RouterLink],
  templateUrl: './contact-cards.component.html',
  styleUrl: './contact-cards.component.css'
})
export class ContactCardsComponent {
  @Input() dataSource: IContact[] = [];
  @Output() edit = new EventEmitter<IContact>();
  @Output() delete = new EventEmitter<IContact>();

  onEdit = (_contact: IContact): void => this.edit.emit(_contact);
  onDelete = (_contact: IContact): void => this.delete.emit(_contact);
}
