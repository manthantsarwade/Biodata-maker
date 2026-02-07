export type Gender = 'Male' | 'Female' | 'Other';

export type FamilyType = 'Joint' | 'Nuclear';

export type MangalStatus = 'Yes' | 'No';

export type BiodataProfile = {
  fullName: string;
  gender: Gender;
  dateOfBirth: string;
  age: string;
  height: string;
  bloodGroup: string;
  birthTime: string;
  birthPlace: string;
  complexion: string;
  gotra: string;
  devak: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brothersMarried: string;
  brothersUnmarried: string;
  sistersMarried: string;
  sistersUnmarried: string;
  familyType: FamilyType;
  nativePlace: string;
  caste: string;
  subCaste: string;
  highestQualification: string;
  profession: string;
  companyName: string;
  annualIncome: string;
  workLocation: string;
  rashi: string;
  nakshatra: string;
  nadi: string;
  gan: string;
  mangal: MangalStatus;
  expectedEducation: string;
  expectedHeightMin: string;
  expectedHeightMax: string;
  expectedCaste: string;
  preferredLocation: string;
  mobileNumber: string;
  parentContact: string;
  email: string;
  address: string;
  aboutMe: string;
  profilePhoto: string;
};

export type TemplateOption = 'traditional' | 'modern' | 'premium';
