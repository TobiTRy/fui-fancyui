/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './lib/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    // Generate all spacing classes that might be dynamically created by getSpacingClass()
    // Supports spacing values 0-10 as defined in FUI spacing system
    ...Array.from({ length: 11 }, (_, i) => `mt-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `mb-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `ml-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `mr-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `pt-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `pb-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `pl-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `pr-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `px-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `py-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `p-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `m-${i}`),
    ...Array.from({ length: 11 }, (_, i) => `gap-${i}`),
  ],
};
