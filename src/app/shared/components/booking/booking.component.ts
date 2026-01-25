import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  @ViewChild(ModalComponent) modal!: ModalComponent;

  open() {
    this.modal.open();
  }

  close() {
    this.modal.close();
  }
}
