import React from 'react';
import { BiodataProfile } from '../utils/types';
import { formatValue, fullHeightRange } from '../utils/formatters';

type PremiumTemplateProps = {
  profile: BiodataProfile;
};

const PremiumTemplate: React.FC<PremiumTemplateProps> = ({ profile }) => {
  return (
    <div className="rounded-3xl border border-gold/40 bg-white p-6 shadow-soft">
      <div className="flex flex-col gap-6 border-b border-gold/30 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Premium Biodata</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">{formatValue(profile.fullName)}</h2>
          <p className="text-sm text-slate-500">{formatValue(profile.profession)}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right text-xs text-slate-500">
            <p>Age: {formatValue(profile.age)}</p>
            <p>Height: {formatValue(profile.height)}</p>
            <p>Blood Group: {formatValue(profile.bloodGroup)}</p>
          </div>
          <div className="h-28 w-24 overflow-hidden rounded-2xl border border-gold/40">
            {profile.profilePhoto ? (
              <img src={profile.profilePhoto} alt="Profile" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                Photo
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <h3 className="text-sm font-semibold text-slate-800">Personal Details</h3>
            <div className="mt-3 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
              <p>Gender: {formatValue(profile.gender)}</p>
              <p>DOB: {formatValue(profile.dateOfBirth)}</p>
              <p>Birth Time: {formatValue(profile.birthTime)}</p>
              <p>Birth Place: {formatValue(profile.birthPlace)}</p>
              <p>Complexion: {formatValue(profile.complexion)}</p>
              <p>Gotra: {formatValue(profile.gotra)}</p>
              <p>Devak: {formatValue(profile.devak)}</p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-100 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-800">Family Timeline</h3>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div className="border-l-2 border-gold pl-4">
                <p className="font-semibold text-slate-700">Parents</p>
                <p>Father: {formatValue(profile.fatherName)} ({formatValue(profile.fatherOccupation)})</p>
                <p>Mother: {formatValue(profile.motherName)} ({formatValue(profile.motherOccupation)})</p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <p className="font-semibold text-slate-700">Siblings</p>
                <p>Brothers: {formatValue(profile.brothersMarried)} married, {formatValue(profile.brothersUnmarried)} unmarried</p>
                <p>Sisters: {formatValue(profile.sistersMarried)} married, {formatValue(profile.sistersUnmarried)} unmarried</p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <p className="font-semibold text-slate-700">Family Roots</p>
                <p>Family Type: {formatValue(profile.familyType)}</p>
                <p>Native Place: {formatValue(profile.nativePlace)}</p>
                <p>Caste: {formatValue(profile.caste)}</p>
                <p>Sub-caste: {formatValue(profile.subCaste)}</p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-100 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-800">Education & Career</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>Qualification: {formatValue(profile.highestQualification)}</p>
              <p>Profession: {formatValue(profile.profession)}</p>
              <p>Company: {formatValue(profile.companyName)}</p>
              <p>Annual Income: {formatValue(profile.annualIncome)}</p>
              <p>Work Location: {formatValue(profile.workLocation)}</p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <h3 className="text-sm font-semibold text-slate-800">Horoscope</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>Rashi: {formatValue(profile.rashi)}</p>
              <p>Nakshatra: {formatValue(profile.nakshatra)}</p>
              <p>Nadi: {formatValue(profile.nadi)}</p>
              <p>Gan: {formatValue(profile.gan)}</p>
              <p>Mangal: {formatValue(profile.mangal)}</p>
            </div>
          </section>

          <section className="rounded-2xl border border-gold/30 bg-white p-5">
            <h3 className="text-sm font-semibold text-slate-800">Expectations</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>Expected Education: {formatValue(profile.expectedEducation)}</p>
              <p>Expected Height: {fullHeightRange(profile)}</p>
              <p>Expected Caste: {formatValue(profile.expectedCaste)}</p>
              <p>Preferred Location: {formatValue(profile.preferredLocation)}</p>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-100 bg-white p-5">
          <h3 className="text-sm font-semibold text-slate-800">Contact</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>Mobile: {formatValue(profile.mobileNumber)}</p>
            <p>Parent Contact: {formatValue(profile.parentContact)}</p>
            <p>Email: {formatValue(profile.email)}</p>
            <p>Address: {formatValue(profile.address)}</p>
          </div>
        </section>
        {profile.aboutMe && (
          <section className="rounded-2xl bg-slate-900 p-5 text-sm text-white">
            <h3 className="text-sm font-semibold">About Me</h3>
            <p className="mt-2 text-slate-100">{profile.aboutMe}</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default PremiumTemplate;
