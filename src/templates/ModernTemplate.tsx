import React from 'react';
import { BiodataProfile } from '../utils/types';
import { formatValue, fullHeightRange } from '../utils/formatters';

type ModernTemplateProps = {
  profile: BiodataProfile;
};

const ModernTemplate: React.FC<ModernTemplateProps> = ({ profile }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 font-sans shadow-soft">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Modern Biodata</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">{formatValue(profile.fullName)}</h2>
          <p className="text-sm text-slate-500">{formatValue(profile.profession)}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {formatValue(profile.age)} yrs
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {formatValue(profile.height)}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {formatValue(profile.workLocation)}
            </span>
          </div>
        </div>
        <div className="h-28 w-28 overflow-hidden rounded-2xl border border-slate-200">
          {profile.profilePhoto ? (
            <img src={profile.profilePhoto} alt="Profile" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
              Photo
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-800">Personal</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>Gender: {formatValue(profile.gender)}</p>
            <p>DOB: {formatValue(profile.dateOfBirth)}</p>
            <p>Blood Group: {formatValue(profile.bloodGroup)}</p>
            <p>Birth Place: {formatValue(profile.birthPlace)}</p>
            <p>Gotra: {formatValue(profile.gotra)}</p>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-800">Education & Career</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>Qualification: {formatValue(profile.highestQualification)}</p>
            <p>Company: {formatValue(profile.companyName)}</p>
            <p>Income: {formatValue(profile.annualIncome)}</p>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-800">Family</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>Father: {formatValue(profile.fatherName)}</p>
            <p>Mother: {formatValue(profile.motherName)}</p>
            <p>Family Type: {formatValue(profile.familyType)}</p>
            <p>Native Place: {formatValue(profile.nativePlace)}</p>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-800">Horoscope</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>Rashi: {formatValue(profile.rashi)}</p>
            <p>Nakshatra: {formatValue(profile.nakshatra)}</p>
            <p>Mangal: {formatValue(profile.mangal)}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-dashed border-slate-200 p-4">
          <h3 className="text-sm font-semibold text-slate-800">Expectations</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>Education: {formatValue(profile.expectedEducation)}</p>
            <p>Height Range: {fullHeightRange(profile)}</p>
            <p>Preferred Location: {formatValue(profile.preferredLocation)}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-dashed border-slate-200 p-4">
          <h3 className="text-sm font-semibold text-slate-800">Contact</h3>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>Mobile: {formatValue(profile.mobileNumber)}</p>
            <p>Parent Contact: {formatValue(profile.parentContact)}</p>
            <p>Email: {formatValue(profile.email)}</p>
            <p>Address: {formatValue(profile.address)}</p>
          </div>
        </div>
      </div>

      {profile.aboutMe && (
        <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-sm text-white">
          <h3 className="text-sm font-semibold">About Me</h3>
          <p className="mt-2 text-slate-100">{profile.aboutMe}</p>
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;
