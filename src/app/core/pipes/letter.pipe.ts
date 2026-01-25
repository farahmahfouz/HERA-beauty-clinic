import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Pipe({
  name: 'letter',
  standalone: true
})
export class LetterPipe implements PipeTransform {
  private textSubject = new BehaviorSubject<string>('');
  private currentIndex = 0;

  transform(value: string, speed: number = 100): any {
    if (!value) return '';

    this.currentIndex = 0;
    this.textSubject.next('');

    const interval = setInterval(() => {
      if (this.currentIndex < value.length) {
        this.textSubject.next(value.slice(0, this.currentIndex + 1));
        this.currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return this.textSubject.asObservable();
  }
}