import { Component, Input } from '@angular/core';
import { ControlComponent } from '../../../../shared/components/control/control.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [ControlComponent, ButtonComponent],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  @Input() user: any;
}
