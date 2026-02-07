export type BiodataFormValues = {
  fullName: string;
  gender: string;
  dateOfBirth: string;
  age: string;
  height: string;
  bloodGroup: string;
  birthTime: string;
  birthPlace: string;
  complexion: string;
  gotra: string;
  devak: string;
  caste: string;
  subCaste: string;
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brothersMarried: string;
  brothersUnmarried: string;
  sistersMarried: string;
  sistersUnmarried: string;
  familyType: string;
  nativePlace: string;
  highestQualification: string;
  profession: string;
  companyName: string;
  annualIncome: string;
  workLocation: string;
  rashi: string;
  nakshatra: string;
  nadi: string;
  gan: string;
  mangal: string;
  expectedEducation: string;
  expectedHeightRange: string;
  expectedCaste: string;
  preferredLocation: string;
  mobileNumber: string;
  parentContact: string;
  email: string;
  address: string;
  aboutMe: string;
  photoDataUrl: string;
};

export const defaultValues: BiodataFormValues = {
  fullName: "",
  gender: "",
  dateOfBirth: "",
  age: "",
  height: "",
  bloodGroup: "",
  birthTime: "",
  birthPlace: "",
  complexion: "",
  gotra: "",
  devak: "",
  caste: "",
  subCaste: "",
  fatherName: "",
  fatherOccupation: "",
  motherName: "",
  motherOccupation: "",
  brothersMarried: "",
  brothersUnmarried: "",
  sistersMarried: "",
  sistersUnmarried: "",
  familyType: "",
  nativePlace: "",
  highestQualification: "",
  profession: "",
  companyName: "",
  annualIncome: "",
  workLocation: "",
  rashi: "",
  nakshatra: "",
  nadi: "",
  gan: "",
  mangal: "",
  expectedEducation: "",
  expectedHeightRange: "",
  expectedCaste: "",
  preferredLocation: "",
  mobileNumber: "",
  parentContact: "",
  email: "",
  address: "",
  aboutMe: "",
  photoDataUrl: "",
};

export const sections = [
  {
    id: "personal",
    title: "Personal Details",
  },
  {
    id: "family",
    title: "Family Details",
  },
  {
    id: "education",
    title: "Education & Career",
  },
  {
    id: "horoscope",
    title: "Horoscope / Kundali",
  },
  {
    id: "expectations",
    title: "Expectations",
  },
  {
    id: "contact",
    title: "Contact Details",
  },
];
