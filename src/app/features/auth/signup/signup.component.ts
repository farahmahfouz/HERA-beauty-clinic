import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from "../../../shared/components/modal/modal.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ControlComponent } from "../../../shared/components/control/control.component";
import { AuthService } from '../../../core/services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule, ButtonComponent, ControlComponent, NgIf],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal!: ModalComponent;
  @Output() closeModal = new EventEmitter<void>();

  isLoading = false;
  apiError: string | null = null;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+20\d{10}$/)])
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Open modal after view init
    setTimeout(() => this.modal.open(), 0);
  }

  get nameErrors() {
    const control = this.form.controls.name;
    return (control.touched || control.dirty || control.errors?.['server']) ? control.errors : null;
  }

  get usernameErrors() {
    const control = this.form.controls.username;
    return (control.touched || control.dirty || control.errors?.['server']) ? control.errors : null;
  }

  get emailErrors() {
    const control = this.form.controls.email;
    return (control.touched || control.dirty || control.errors?.['server']) ? control.errors : null;
  }

  get passwordErrors() {
    const control = this.form.controls.password;
    return (control.touched || control.dirty || control.errors?.['server']) ? control.errors : null;
  }

  get phoneErrors() {
    const control = this.form.controls.phone;
    return (control.touched || control.dirty || control.errors?.['server']) ? control.errors : null;
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.isLoading = true;
    this.apiError = null;

    this.authService.signup(this.form.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.onCloseModal();
      },
      error: (err) => {
        this.isLoading = false;
        const message = err?.error?.message || 'Something went wrong';

        // Map backend error to the correct form control
        if (typeof message === 'string') {
          const lower = message.toLowerCase();
          if (lower.includes('email')) {
            this.form.controls.email.setErrors({ server: message });
          } else if (lower.includes('username')) {
            this.form.controls.username.setErrors({ server: message });
          } else if (lower.includes('phone')) {
            this.form.controls.phone.setErrors({ server: message });
          } else {
            this.apiError = message;
          }
        } else {
          // fallback if message is object or array
          this.apiError = JSON.stringify(message);
        }
      }
    });
  }
}
