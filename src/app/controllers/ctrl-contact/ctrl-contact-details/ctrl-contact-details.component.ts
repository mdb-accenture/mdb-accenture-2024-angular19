import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../../services/contact.service';
import { MatIconModule } from '@angular/material/icon';
import { ContactDetailComponent } from "../../../components/contact/contact-detail/contact-detail.component";
import { IContact } from '../../../models/contact';
import { UiHeaderComponent } from "../../../components/ui/ui-header/ui-header.component";

@Component({
  selector: 'app-ctrl-contact-details',
  imports: [MatIconModule, ContactDetailComponent, UiHeaderComponent],
  templateUrl: './ctrl-contact-details.component.html',
  styleUrl: './ctrl-contact-details.component.css'
})
export class CtrlContactDetailsComponent implements OnInit {
  contact!: IContact | undefined;
  contactId!: number;

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.contactId = parseInt(params.get('id')!);
      this.contact = this.contactService.getContactById(this.contactId);
      if(!this.contact) this.router.navigate(['not-found']);
    });
  }
}