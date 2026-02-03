import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  doctors = [
    {
      id: 1,
      name: 'Dr. Rocio',
      image: '/images/doctor1.jpg',
      bio: 'A master of CO2 Skin Resurfacing, Scar Reduction, Skin Tag Removal, Advanced Laser Skin Rejuvenation, and laser hair removal, Rocio expertly treats all skin types. She also customizes skin care routines to help you maintain your healthiest, most radiant complexion.',
      expertise: [
        'CO2 Skin Resurfacing',
        'Scar Reduction',
        'Skin Tag Removal',
        'Advanced Laser Skin Rejuvenation',
        'Laser Hair Removal'
      ]
    },
    {
      id: 2,
      name: 'Dr. Maria',
      image: '/images/doctor2.jpg',
      bio: 'Maria specializes in facial rejuvenation, chemical peels, and microdermabrasion, helping clients achieve smooth and youthful skin.',
      expertise: [
        'Facial Rejuvenation',
        'Chemical Peels',
        'Microdermabrasion'
      ]
    },
    {
      id: 3,
      name: 'Dr. Sara',
      image: '/images/doctor3.jpg',
      bio: 'Saea is skilled in laser tattoo removal, pigmentation correction, and non-surgical skin tightening for all skin types.',
      expertise: [
        'Laser Tattoo Removal',
        'Pigmentation Correction',
        'Non-surgical Skin Tightening'
      ]
    },
    {
      id: 4,
      name: 'Dr. Lina',
      image: '/images/doctor4.jpg',
      bio: 'Lina focuses on advanced anti-aging treatments, PRP therapy, and customized skincare plans to rejuvenate and maintain healthy skin.',
      expertise: [
        'Anti-aging Treatments',
        'PRP Therapy',
        'Customized Skincare Plans'
      ]
    }
  ];

  values = [
    {
      title: 'Personalization',
      description: 'Every treatment is customized to meet your unique skin goals and needs, ensuring the best results for you.'
    },
    {
      title: 'Safety',
      description: 'Your safety is our priority. With a focus on safety, we utilize cutting-edge, FDA-approved technology and maintain a spotless environment, ensuring a secure, worry-free experience with every treatment.'
    },
    {
      title: 'Results-Driven',
      description: 'Every treatment we offer is designed with one goal in mind—delivering the best possible results that leave you looking and feeling your best.'
    },
    {
      title: 'Expertise',
      description: 'Skilled & licensed skin professionals with advanced knowledge in advanced skin treatments, laser technology, and medical-grade skin care products.'
    },
    {
      title: 'Accessibility',
      description: 'We believe that excellent skincare shouldn\'t break the bank. Our competitive pricing ensures that you receive exceptional care at a great value.'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'We utilize advanced technology to deliver the latest in skin rejuvenation and laser hair removal solutions.'
    }
  ];

}
