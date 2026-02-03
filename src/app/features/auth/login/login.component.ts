import { afterNextRender, Component, DestroyRef, inject, viewChild, output } from '@angular/core';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ControlComponent } from "../../../shared/components/control/control.component";
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { AuthService } from '../../../core/services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ModalComponent, FormsModule, ControlComponent, ButtonComponent, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private modal = viewChild.required<ModalComponent>('modal');
  closeModal = output<void>();
  isLoading = false;
  serverError: string | null = null;

  constructor(private authService: AuthService, private destroyRef: DestroyRef) {
    afterNextRender(() => {
      // Open modal when component loads
      this.modal().open();

      const savedForm = window.localStorage.getItem('saved-login-form');
      if (savedForm) {
        const loadFormData = JSON.parse(savedForm);
        const savedEmail = loadFormData.email;
        setTimeout(() => {
          this.form().controls['email'].setValue(savedEmail)
        }, 1);
      }
      const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
        next: (value) => window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }))
      });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    })
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) return;
    const email = formData.form.value.email;
    const password = formData.form.value.password;

    this.serverError = null;
    this.isLoading = true;
    this.authService.login({ email, password }).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.onCloseModal()
      },
      error: (err) => {
        this.isLoading = false;
        this.serverError = err?.error?.message || 'Something went wrong';
      }
    })
  }
}
