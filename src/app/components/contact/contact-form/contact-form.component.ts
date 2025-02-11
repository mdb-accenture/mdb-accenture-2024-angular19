import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IContact } from '../../../models/contact';
import { FormsModule } from '@angular/forms';
import { MaskPipe } from '../../../pipes/mask.pipe';

@Component({
  selector: 'app-contact-form',
  imports: [MatCardModule, FormsModule, MaskPipe],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  @Input() contact!: IContact;
  @Output() action = new EventEmitter<string>();

  onClose = () => this.action.emit('close');
  onSubmit = () => this.action.emit('submit');
}
