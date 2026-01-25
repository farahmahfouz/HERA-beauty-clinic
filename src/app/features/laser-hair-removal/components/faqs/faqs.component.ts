import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  faqs = [
  {
    question: 'What is the Lifetime Appearance Promise?',
    answer: `At SILK, we are proud to stand behind our services, and we believe all our clients deserve the best possible results.
    In most cases, eight to ten treatments are all that is required to achieve the desired result, but if further Laser Hair Removal
    treatments are required after the completion of ten treatments, we promise to provide additional Laser Hair Removal treatments
    to you at 40% off for the rest of your lifetime.

    *40% off applies to the standard RRP per-treatment price in the original area of treatment only.`
  },
  {
    question: 'Who is suitable for laser hair removal?',
    answer: `Laser hair removal achieves the best results for people with fairer skin and darker hair, however our laser technology and
    laser preparation products allow us to treat a variety of skin and hair types. Laser hair removal is not suited to blonde, red,
    grey or white hair. Your technician will be able to assess your hair during a free consultation.`
  },
  {
    question: 'What laser do you use for laser hair removal?',
    answer: `We ensure our clients’ total satisfaction by using the medical-grade Candela GentleLASE PRO, YAG and GMAX lasers,
    the world’s most effective lasers for hair removal. Treatments are quick, comfortable and effective.`
  },
  {
    question: 'How does laser hair removal work?',
    answer: `The Candela GentleLASE PRO, GMAX and YAG lasers at SILK Laser Clinics is a Medical Grade 4 Alexandrite laser that produces
    a near infra light to target the pigment in the hair follicle, without damaging the surrounding skin tissue. This light then
    generates heat within the hair follicle to sever the connection between the follicle and its blood supply, destroying hair
    in the active growth stage only.`
  },
  {
    question: 'Is laser hair removal painful?',
    answer: `Most clients describe the sensation as mild discomfort. The Candela laser systems include advanced cooling technology
    designed to maximise comfort during treatment.`
  },
  {
    question: 'How many treatments will I need?',
    answer: `The number of treatments can vary depending on the individual and can be influenced by skin type, hair colour,
    medications and hormones.

    Generally, a course of 8–10 treatments is required to achieve the most significant hair reduction results. Your technician
    will make a recommendation as part of your complimentary consultation and treatment planning session.`
  },
  {
    question: 'How often do I need to be treated?',
    answer: `Treatment intervals vary depending on the treatment area and individual hair growth cycle. Your technician will
    advise you on the most suitable schedule during your consultation.`
  },
  {
    question: 'What age can I start laser hair removal treatments?',
    answer: `Laser hair removal treatments are generally suitable from the age of 16 with parental consent. Age requirements
    may vary depending on local regulations.`
  },
  {
    question: 'Does sun exposure affect my treatments?',
    answer: `Yes. Sun exposure can increase the risk of side effects. It is recommended to avoid sun exposure and tanning
    before and after your laser hair removal treatments.`
  },
  {
    question: 'What if I am on medication?',
    answer: `Some medications can increase sensitivity to laser treatments. Please inform your technician of any medications
    you are taking so they can assess suitability and adjust your treatment plan if needed.`
  },
  {
    question: 'What if I have PCOS or other hormonal imbalances?',
    answer: `Hormonal conditions such as PCOS may affect results and require additional maintenance treatments. Your technician
    will discuss realistic expectations and tailor a treatment plan for you.`
  },
  {
    question: 'What do I need to do to prepare for my laser hair removal appointment?',
    answer: `Avoid sun exposure, waxing, plucking or bleaching the area before treatment. Shave the area 24 hours prior to
    your appointment unless advised otherwise by your technician.`
  },
  {
    question: 'How do I care for the area after treatment?',
    answer: `After treatment, avoid heat, sun exposure and harsh products on the treated area. Use soothing products as
    recommended by your technician and follow aftercare instructions carefully.`
  },
  {
    question: 'When will my Laser Hair Removal purchase expire?',
    answer: `Laser Hair Removal packages typically have an expiry date. Please refer to your purchase terms or consult your
    clinic for specific expiry details.`
  }
];

}
