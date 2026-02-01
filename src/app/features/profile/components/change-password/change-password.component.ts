import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ControlComponent } from '../../../../shared/components/control/control.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  currentPassword: string = '';
  newPassword: string = '';
  isLoading = false;

  constructor(private authService: AuthService, private toast: ToastService){}
  
  onSubmit(formData: NgForm) {
    if (formData.form.invalid) return;
    this.isLoading = true;
    this.authService.changeMyPassword({
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    }).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.toast.showSuccess('Password changed successfully');
        formData.resetForm();
      },
      error: (err) => {
        this.isLoading = false;
        this.toast.showError('Failed to change password');
      }
    });
  }
}
