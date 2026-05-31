const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const quoteFieldOptions = {
  service: [
    'Select a service',
    'Office Cleaning',
    'Janitorial Services',
    'Commercial Deep Cleaning',
    'Move-Out / Turnover Cleaning',
    'Post-Construction Cleaning',
    'Retail / Storefront Cleaning',
    'Medical / Dental Office Cleaning',
    'Apartment /