import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error';

@Injectable({ providedIn: 'root' })
export class ToastService {
  message = signal<string | null>(null);
  type = signal<ToastType>('success');

  showSuccess(msg: string) {
    this.type.set('success');
    this.message.set(msg);
    this.autoHide();
  }

  showError(msg: string) {
    this.type.set('error');
    this.message.set(msg);
    this.autoHide();
  }

  private autoHide() {
    setTimeout(() => {
      this.message.set(null);
    }, 3000);
  }
}
