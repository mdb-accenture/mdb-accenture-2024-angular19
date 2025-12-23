import { Injectable, signal } from '@angular/core';
import { ToastAction, ToastActionTypes } from '../components/ui/ui-toast/ui-toast.component';

@Injectable({
  providedIn: 'root'
})
export class UiToastService {
  toasts = signal<ToastAction[]>([]);
  
  show(message: string, type: ToastActionTypes) {
    this.toasts.update(t => [...t, {message, type}]);
    setTimeout(() => this.remove(0), 3000);
  }

  remove(index: number) {
    this.toasts.update(t => t.filter((_, i) => i != index));
  }
}
