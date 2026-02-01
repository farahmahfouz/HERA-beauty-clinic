import { Component, DestroyRef, OnInit } from '@angular/core';
import { ControlComponent } from '../../../../shared/components/control/control.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AuthService } from '../../../../core/services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../../../../core/services/toast.service';

interface UserInfo {
  name: string;
  email: string;
  phone?: string;
  username?: string;
}

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit {
  user: UserInfo | any;
  isLoading = false;

  constructor(private authService: AuthService, private destroyRef: DestroyRef, private toast: ToastService) { }
  ngOnInit() {
    const subscription = this.authService.getMe().subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) return;
    console.log('first')
    this.isLoading = true;
    this.authService.updateMe(formData.form.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.toast.showSuccess('User updated successfully');
        console.log('User updated successfully:', res);
      },
      error: (err) => {
        this.isLoading = false;
        this.toast.showError('Failed to update user');
        console.error('Error updating user:', err);
      }
    })
  }
}

