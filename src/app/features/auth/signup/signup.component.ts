import { afterNextRender, Component, OnInit, output, viewChild } from '@angular/core';
import { ModalComponent } from "../../../shared/components/modal/modal.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ControlComponent } from "../../../shared/components/control/control.component";
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ModalComponent, ReactiveFormsModule, ButtonComponent, ControlComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private modal = viewChild.required<ModalComponent>('modal');
  closeModal = output<void>();
  isLoading = false;

  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required]
    }),

    username: new FormControl('', {
      validators: [Validators.required]
    }),

    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),

    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8)]
    }),

    phone: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern(/^\+20\d{10}$/)
      ]
    }),
  });

  get email() {
    return (
      this.form.controls.email.touched &&
      this.form.controls.email.dirty &&
      this.form.controls.email.invalid
    )
  }

  get name() {
    return this.form.controls.name.touched &&
      this.form.controls.name.dirty &&
      this.form.controls.name.invalid
  }

  get username() {
    return this.form.controls.username.touched &&
      this.form.controls.username.dirty &&
      this.form.controls.username.invalid
  }

  get password() {
    return this.form.controls.password.touched &&
      this.form.controls.password.dirty &&
      this.form.controls.password.invalid
  }

  get phone() {
    return this.form.controls.phone.touched &&
      this.form.controls.phone.dirty &&
      this.form.controls.phone.invalid
  }

  constructor(private authService: AuthService) {
    afterNextRender(() => {
      // Open modal when component loads
      this.modal().open();
    });
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('Invalid');
      return
    }

    this.isLoading = true;
    this.authService.signup(this.form.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.onCloseModal();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
