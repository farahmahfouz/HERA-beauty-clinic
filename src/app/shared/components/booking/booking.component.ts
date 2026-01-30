import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  DestroyRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { DoctorSchedualeService } from '../../../core/services/doctor-scheduale.service';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../../core/services/booking.service';
import { ButtonComponent } from "../button/button.component";
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ModalComponent, FormsModule, ButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  @ViewChild(ModalComponent) modal!: ModalComponent;

  scheduales: any[] = [];

  selectedService: any = null;
  selectedSchedule: any = null;
  selectedDay: any = null;
  selectedSlot: any = null;
  selectedDate!: string;
  isLoading = false;

  constructor(
    private drScheduale: DoctorSchedualeService,
    private bookingService: BookingService,
    private toast: ToastService,
    private destroyRef: DestroyRef
  ) { }

  ngOnInit() {
    this.isLoading = true;

    const sub = this.drScheduale.getAllDrsScheduals().subscribe({
      next: (res) => {
        this.scheduales = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    });

    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  open(service: any) {
    this.selectedService = {
      optionName: service.optionName,
      price: service.price,
      serviceOption: service._id
    };

    this.modal.open();
  }

  close() {
    this.modal.close();
  }

  onDoctorChange(event: Event) {
    const id = (event.target as HTMLSelectElement).value;

    this.selectedSchedule = this.scheduales.find(
      s => s._id === id
    );

    this.selectedDay = null;
    this.selectedSlot = null;
  }

  onDateChange(event: any) {
    const date = event.target?.value;
    if (!date || !this.selectedSchedule) return;

    this.selectedDate = date;
    this.selectedSlot = null;

    const days = this.selectedSchedule.days ?? this.selectedSchedule.availability ?? [];
    this.selectedDay =
      days.find((d: any) => d.date === date) ??
      days.find((d: any) => d.day === this.getDayName(date)) ??
      null;
  }

  private getDayName(dateStr: string): string {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return dayNames[new Date(dateStr).getDay()];
  }


  onSubmit(form: any) {
    if (form.invalid || !this.selectedDay || !this.selectedSlot) return;

    const bookingPayload = {
      doctor: this.selectedSchedule.doctor._id,

      services: [
        {
          serviceOption: this.selectedService.serviceOption,
          price: this.selectedService.price
        }
      ],

      totalPrice: this.selectedService.price,

      dateOfService: this.selectedDate,

      timeSlot: {
        start: this.selectedSlot.start,
        end: this.selectedSlot.end
      }
    };

    this.isLoading = true;

    this.bookingService.createBooking(bookingPayload).subscribe({
      next: (res) => {
        console.log('BOOKING SUCCESS', res);
        this.isLoading = false;
        this.toast.showSuccess('Booking Done ✓');
        this.modal.close();
      },
      error: (err) => {
        console.error('BOOKING ERROR', err.error.message);
        this.isLoading = false;
        this.toast.showError(err.error.message)
        this.modal.close()
      }
    })
  }

}
