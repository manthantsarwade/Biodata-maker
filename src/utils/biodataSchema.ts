import { BiodataProfile } from './types';

export type FieldOption = {
  label: string;
  value: string;
};

export type FieldConfig = {
  name: keyof BiodataProfile;
  label: string;
  type: 'text' | 'number' | 'date' | 'select' | 'textarea' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  options?: FieldOption[];
  tooltip?: string;
};

export type SectionConfig = {
  id: string;
  title: string;
  description: string;
  fields: FieldConfig[];
};

export const biodataSections: SectionConfig[] = [
  {
    id: 'personal',
    title: 'Personal Details',
    description: 'Core information used in every Marathi marriage biodata.',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter full name' },
      {
        name: 'gender',
        label: 'Gender',
        type: 'select',
        required: true,
        options: [
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' },
          { label: 'Other', value: 'Other' },
        ],
      },
      { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
      { name: 'age', label: 'Age', type: 'number', required: true, placeholder: 'Age in years' },
      { name: 'height', label: 'Height', type: 'text', required: true, placeholder: 'e.g., 5 ft 6 in' },
      {
        name: 'bloodGroup',
        label: 'Blood Group',
        type: 'select',
        options: [
          { label: 'A+', value: 'A+' },
          { label: 'A-', value: 'A-' },
          { label: 'B+', value: 'B+' },
          { label: 'B-', value: 'B-' },
          { label: 'O+', value: 'O+' },
          { label: 'O-', value: 'O-' },
          { label: 'AB+', value: 'AB+' },
          { label: 'AB-', value: 'AB-' },
        ],
      },
      { name: 'birthTime', label: 'Birth Time', type: 'text', placeholder: 'e.g., 7:30 AM' },
      { name: 'birthPlace', label: 'Birth Place', type: 'text', placeholder: 'City, State' },
      { name: 'complexion', label: 'Complexion', type: 'text', placeholder: 'e.g., Fair, Wheatish' },
      {
        name: 'gotra',
        label: 'Gotra',
        type: 'text',
        tooltip: 'Gotra refers to lineage or ancestral clan in Maharashtrian families.',
      },
      {
        name: 'devak',
        label: 'Devak',
        type: 'text',
        tooltip: 'Devak is a family deity or sacred symbol connected to lineage.',
      },
    ],
  },
  {
    id: 'family',
    title: 'Family Details',
    description: 'Family background, parents, and sibling information.',
    fields: [
      { name: 'fatherName', label: 'Father Name', type: 'text', required: true },
      { name: 'fatherOccupation', label: 'Father Occupation', type: 'text' },
      { name: 'motherName', label: 'Mother Name', type: 'text', required: true },
      { name: 'motherOccupation', label: 'Mother Occupation', type: 'text' },
      { name: 'brothersMarried', label: 'Brothers (Married)', type: 'number' },
      { name: 'brothersUnmarried', label: 'Brothers (Unmarried)', type: 'number' },
      { name: 'sistersMarried', label: 'Sisters (Married)', type: 'number' },
      { name: 'sistersUnmarried', label: 'Sisters (Unmarried)', type: 'number' },
      {
        name: 'familyType',
        label: 'Family Type',
        type: 'select',
        options: [
          { label: 'Joint', value: 'Joint' },
          { label: 'Nuclear', value: 'Nuclear' },
        ],
      },
      { name: 'nativePlace', label: 'Native Place', type: 'text', placeholder: 'Village / Town' },
      { name: 'caste', label: 'Caste', type: 'text' },
      { name: 'subCaste', label: 'Sub-caste', type: 'text' },
    ],
  },
  {
    id: 'education',
    title: 'Education & Career',
    description: 'Qualification and professional details.',
    fields: [
      { name: 'highestQualification', label: 'Highest Qualification', type: 'text', required: true },
      { name: 'profession', label: 'Profession', type: 'text', required: true },
      { name: 'companyName', label: 'Company / Business Name', type: 'text' },
      { name: 'annualIncome', label: 'Annual Income', type: 'text', placeholder: 'e.g., ₹12 LPA' },
      { name: 'workLocation', label: 'Work Location', type: 'text' },
    ],
  },
  {
    id: 'horoscope',
    title: 'Horoscope / Kundali',
    description: 'Astrology information frequently listed in Marathi biodata.',
    fields: [
      {
        name: 'rashi',
        label: 'Rashi',
        type: 'text',
        tooltip: 'Rashi is the moon sign used for compatibility matching.',
      },
      {
        name: 'nakshatra',
        label: 'Nakshatra',
        type: 'text',
        tooltip: 'Nakshatra is the birth star; important for horoscope matching.',
      },
      {
        name: 'nadi',
        label: 'Nadi',
        type: 'text',
        tooltip: 'Nadi represents a vital compatibility factor in Kundali.',
      },
      {
        name: 'gan',
        label: 'Gan',
        type: 'text',
        tooltip: 'Gan describes temperament categories (Deva, Manushya, Rakshasa).',
      },
      {
        name: 'mangal',
        label: 'Mangal (Yes/No)',
        type: 'select',
        options: [
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' },
        ],
        tooltip: 'Indicates if Manglik dosha is present.',
      },
    ],
  },
  {
    id: 'expectations',
    title: 'Partner Expectations',
    description: 'Preferred partner qualities and filters.',
    fields: [
      { name: 'expectedEducation', label: 'Expected Education', type: 'text' },
      { name: 'expectedHeightMin', label: 'Expected Height (Min)', type: 'text', placeholder: 'e.g., 5 ft 2 in' },
      { name: 'expectedHeightMax', label: 'Expected Height (Max)', type: 'text', placeholder: 'e.g., 5 ft 10 in' },
      { name: 'expectedCaste', label: 'Expected Caste (Optional)', type: 'text' },
      { name: 'preferredLocation', label: 'Preferred Location', type: 'text' },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Details',
    description: 'Primary contact points for families.',
    fields: [
      { name: 'mobileNumber', label: 'Mobile Number', type: 'tel', required: true },
      { name: 'parentContact', label: 'Parent Contact', type: 'tel' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'address', label: 'Address', type: 'textarea' },
    ],
  },
  {
    id: 'about',
    title: 'About Me',
    description: 'Optional introduction section.',
    fields: [
      { name: 'aboutMe', label: 'About Me (Optional)', type: 'textarea', placeholder: 'Share a short introduction.' },
    ],
  },
];
