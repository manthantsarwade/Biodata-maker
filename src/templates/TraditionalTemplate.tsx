import React from 'react';
import { BiodataProfile } from '../utils/types';
import { formatValue, fullHeightRange } from '../utils/formatters';

type TraditionalTemplateProps = {
  profile: BiodataProfile;
};

const TraditionalTemplate: React.FC<TraditionalTemplateProps> = ({ profile }) => {
  return (
    <div className="rounded-3xl border border-cream bg-cream p-8 font-serif text-slate-800 shadow-soft">
      <div className="flex flex-col gap-6 border-b border-maroon/20 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-maroon">Marathi Biodata</p>
          <h2 className="mt-2 text-3xl font-semibold text-maroon">{formatValue(profile.fullName)}</h2>
          <p className="text-sm text-slate-600">{formatValue(profile.profession)}</p>
        </div>
        <div className="h-28 w-24 overflow-hidden rounded-2xl border border-maroon/20 bg-white">
          {profile.profilePhoto ? (
            <img src={profile.profilePhoto} alt="Profile" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
              Photo
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section>
          <h3 className="text-sm font-semibold text-maroon">Personal Details</h3>
          <div className="mt-3 space-y-2 text-sm">
            <p>Date of Birth: {formatValue(profile.dateOfBirth)}</p>
            <p>Age: {formatValue(profile.age)}</p>
            <p>Height: {formatValue(profile.height)}</p>
            <p>Blood Group: {formatValue(profile.bloodGroup)}</p>
            <p>Birth Time: {formatValue(profile.birthTime)}</p>
            <p>Birth Place: {formatValue(profile.birthPlace)}</p>
            <p>Complexion: {formatValue(profile.complexion)}</p>
            <p>Gotra: {formatValue(profile.gotra)}</p>
            <p>Devak: {formatValue(profile.devak)}</p>
          </div>
        </section>
        <section>
          <h3 className="text-sm font-semibold text-maroon">Education & Career</h3>
          <div className="mt-3 space-y-2 text-sm">
            <p>Qualification: {formatValue(profile.highestQualification)}</p>
            <p>Profession: {formatValue(profile.profession)}</p>
            <p>Company: {formatValue(profile.companyName)}</p>
            <p>Annual Income: {formatValue(profile.annualIncome)}</p>
            <p>Work Location: {formatValue(profile.workLocation)}</p>
          </div>
        </section>
      </div>

      <div className="mt-6 border-t border-maroon/20 pt-6">
        <h3 className="text-sm font-semibold text-maroon">Family Details</h3>
        <div className="mt-3 grid gap-4 text-sm md:grid-cols-2">
          <div>
            <p>Father: {formatValue(profile.fatherName)}</p>
            <p>Father Occupation: {formatValue(profile.fatherOccupation)}</p>
          </div>
          <div>
            <p>Mother: {formatValue(profile.motherName)}</p>
            <p>Mother Occupation: {formatValue(profile.motherOccupation)}</p>
          </div>
          <div>
            <p>Brothers (Married): {formatValue(profile.brothersMarried)}</p>
            <p>Brothers (Unmarried): {formatValue(profile.brothersUnmarried)}</p>
          </div>
          <div>
            <p>Sisters (Married): {formatValue(profile.sistersMarried)}</p>
            <p>Sisters (Unmarried): {formatValue(profile.sistersUnmarried)}</p>
          </div>
          <div>
            <p>Family Type: {formatValue(profile.familyType)}</p>
            <p>Native Place: {formatValue(profile.nativePlace)}</p>
          </div>
          <div>
            <p>Caste: {formatValue(profile.caste)}</p>
            <p>Sub-caste: {formatValue(profile.subCaste)}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section>
          <h3 className="text-sm font-semibold text-maroon">Horoscope</h3>
          <div className="mt-3 space-y-2 text-sm">
            <p>Rashi: {formatValue(profile.rashi)}</p>
            <p>Nakshatra: {formatValue(profile.nakshatra)}</p>
            <p>Nadi: {formatValue(profile.nadi)}</p>
            <p>Gan: {formatValue(profile.gan)}</p>
            <p>Mangal: {formatValue(profile.mangal)}</p>
          </div>
        </section>
        <section>
          <h3 className="text-sm font-semibold text-maroon">Partner Expectations</h3>
          <div className="mt-3 space-y-2 text-sm">
            <p>Expected Education: {formatValue(profile.expectedEducation)}</p>
            <p>Expected Height: {fullHeightRange(profile)}</p>
            <p>Expected Caste: {formatValue(profile.expectedCaste)}</p>
            <p>Preferred Location: {formatValue(profile.preferredLocation)}</p>
          </div>
        </section>
      </div>

      <div className="mt-6 border-t border-maroon/20 pt-6">
        <h3 className="text-sm font-semibold text-maroon">Contact</h3>
        <div className="mt-3 grid gap-4 text-sm md:grid-cols-2">
          <p>Mobile: {formatValue(profile.mobileNumber)}</p>
          <p>Parent Contact: {formatValue(profile.parentContact)}</p>
          <p>Email: {formatValue(profile.email)}</p>
          <p>Address: {formatValue(profile.address)}</p>
        </div>
      </div>

      {profile.aboutMe && (
        <div className="mt-6 border-t border-maroon/20 pt-6">
          <h3 className="text-sm font-semibold text-maroon">About Me</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{profile.aboutMe}</p>
        </div>
      )}
    </div>
  );
};

export default TraditionalTemplate;
