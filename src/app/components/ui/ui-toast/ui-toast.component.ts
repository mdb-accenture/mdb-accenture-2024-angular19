import { Component, Input, ViewChild, ElementRef, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UiToastService } from '../../../services/ui-toast.service';

export interface ToastAction {
  type: ToastActionTypes; 
  message: string;
}

export enum ToastActionTypes {
  success = "success",
  fail = "fail"
}

@Component({
  selector: 'app-ui-toast',
  imports: [MatIconModule],
  templateUrl: './ui-toast.component.html',
  styleUrl: './ui-toast.component.css'
})
export class UiToastComponent {
  action = ToastActionTypes;
  toastService = inject(UiToastService);
}
