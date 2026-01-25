import { Component, ElementRef, ViewChild, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
  @Output() closeModal = new EventEmitter<void>();
  @HostListener('window:keydown.escape')
  closeOnEscape() {
    this.close();
  }

  open() {
    this.dialog.nativeElement.showModal();
  }

  close() {
    this.dialog.nativeElement.close();
    this.closeModal.emit();
  }
}
