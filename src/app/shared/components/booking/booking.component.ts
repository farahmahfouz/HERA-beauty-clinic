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
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ModalComponent, FormsModule, ButtonComponent, DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  @ViewChild(ModalComponent) modal!: ModalComponent;

  scheduales: any[] = [];

  selectedServices: any[] = [];
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

  open(services: any[]) {
    this.selectedServices = services.map(s => ({
      optionName: s.optionName,
      price: s.price,
      serviceOption: s._id
    }));
    this.modal.open();
  }

  close() {
    this.modal.close();
  }

  availableDatesForSchedule: { date: string; dayName: string; dayData: any }[] = [];
  weekOffset = 0;

  onDoctorChange(event: Event) {
    const id = (event.target as HTMLSelectElement).value;
    this.selectedSchedule = this.scheduales.find(s => s._id === id);
    this.selectedDay = null;
    this.selectedSlot = null;
    this.selectedDate = '';
    this.weekOffset = 0;
    this.generateWeekDates();
  }

  generateWeekDates() {
    if (!this.selectedSchedule) return;

    const availability: any[] = this.selectedSchedule.availability ?? [];
    const daysOff: string[] = this.selectedSchedule.daysOff ?? [];
    const workingDayNames = availability.map((d: any) => d.day);

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + this.weekOffset * 7);

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const result: { date: string; dayName: string; dayLabel: string; dayData: any }[] = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      const dayName = dayNames[d.getDay()];

      if (!daysOff.includes(dayName) && workingDayNames.includes(dayName)) {
        const dateStr = d.toISOString().split('T')[0];
        const dayData = availability.find((a: any) => a.day === dayName);
        result.push({
          date: dateStr,
          dayName,
          dayLabel: `${dayName} ${d.getDate()}`,
          dayData
        });
      }
    }

    this.availableDatesForSchedule = result as any;
  }

  selectDate(item: any) {
    this.selectedDate = item.date;
    this.selectedDay = item.dayData;
    this.selectedSlot = null;
  }

  prevWeek() { this.weekOffset--; this.generateWeekDates(); }
  nextWeek() { this.weekOffset++; this.generateWeekDates(); }

  get weekRangeLabel(): string {
    if (!this.availableDatesForSchedule.length) return '';
    const first = this.availableDatesForSchedule[0] as any;
    const last = this.availableDatesForSchedule[this.availableDatesForSchedule.length - 1] as any;
    return `${first.dayLabel} – ${last.dayLabel}`;
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

  get totalPrice(): number {
    return this.selectedServices.reduce(
      (sum, service) => sum + service.price,
      0
    );
  }

  onSubmit(form: any) {
    const errors = [];

    if (form.invalid) errors.push('doctor');
    if (!this.selectedDay) errors.push('date');
    if (!this.selectedSlot) errors.push('time');

    if (errors.length) {
      this.toast.showError(
        `Please select: ${errors.join(', ')}`
      );
      return;
    }

    const bookingPayload = {
      doctor: this.selectedSchedule.doctor._id,

      services: this.selectedServices.map(s => ({
        serviceOption: s.serviceOption,
        price: s.price
      })),

      totalPrice: this.selectedServices.reduce(
        (sum, s) => sum + s.price,
        0
      ),

      dateOfService: this.selectedDate,

      timeSlot: {
        slotId: this.selectedSlot._id,
        start: this.selectedSlot.start,
        end: this.selectedSlot.end
      }
    };

    this.isLoading = true;

    this.bookingService.createBooking(bookingPayload).subscribe({
      next: () => {
        this.isLoading = false;
        this.modal.close();
        this.toast.showSuccess('Booking Done');
        form.resetForm()
      },
      error: (err) => {
        this.isLoading = false;
        this.modal.close();
        this.toast.showError(err.error.message || 'Booking failed');
      }
    })
  }

}
