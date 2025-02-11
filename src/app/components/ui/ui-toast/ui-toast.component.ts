import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface ToastAction {
  type: "success" | "fail"; 
  message: string;
}

@Component({
  selector: 'app-ui-toast',
  imports: [MatIconModule],
  templateUrl: './ui-toast.component.html',
  styleUrl: './ui-toast.component.css'
})
export class UiToastComponent {
  @Input() timeout: number = 3000;
  @Input() action: ToastAction = {type: 'success', message: 'Success!'};

  @ViewChild('toast') toast!: ElementRef;

  public show(_action: ToastAction) {
    this.action = _action;
    this.toast.nativeElement.style.display = "block";
    setTimeout(() => this.toast.nativeElement.style.display = "none", this.timeout);
  }
}
