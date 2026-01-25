import { afterNextRender, Component, DestroyRef, inject, viewChild, output } from '@angular/core';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ControlComponent } from "../../../shared/components/control/control.component";
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ModalComponent, FormsModule, ControlComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private modal = viewChild.required<ModalComponent>('modal');
  private destroyRef = inject(DestroyRef);
  closeModal = output<void>();

  constructor() {
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
    console.log(formData)
    console.log(email, password);
    console.log(formData.form);
    console.log('Form Submitted', formData.reset());
    formData.reset();
  }
}
