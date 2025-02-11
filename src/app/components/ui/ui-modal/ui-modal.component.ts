import { Component, OnChanges, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-ui-modal',
  imports: [],
  templateUrl: './ui-modal.component.html',
  styleUrl: './ui-modal.component.css'
})
export class UiModalComponent implements OnChanges {
  @Input() show!: boolean;
  @ViewChild('modal') modal!: ElementRef;

  ngOnChanges() {
    this.show ? this.openModal() : this.closeModal();
  }
  
  openModal() { 
    if(this.modal) 
      this.modal.nativeElement.style.display = "block"; 
  }

  closeModal() { 
    if(this.modal) 
      this.modal.nativeElement.style.display = "none"; 
  }
}
