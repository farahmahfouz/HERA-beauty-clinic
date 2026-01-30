import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [NgIf],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit {
  isOpen = false;

  ngOnInit() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
