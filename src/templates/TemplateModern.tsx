import { displayValue } from "../utils/formatters";
import type { BiodataFormValues } from "../utils/biodataSchema";

type TemplateProps = {
  data: BiodataFormValues;
};

const TemplateModern = ({ data }: TemplateProps) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Modern Profile</p>
          <h1 className="text-3xl font-semibold text-slate-900">{displayValue(data.fullName)}</h1>
          <p className="text-sm text-slate-500">{displayValue(data.profession)}</p>
        </div>
        <div className="h-32 w-32 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          {data.photoDataUrl ? (
            <img src={data.photoDataUrl} alt="Profile" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
              Photo
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <h2 className="text-sm font-semibold text-slate-700">Personal Details</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>🧑 {displayValue(data.gender)}</li>
              <li>🎈 {displayValue(data.age)} years</li>
              <li>🎂 {displayValue(data.dateOfBirth)}</li>
              <li>📏 {displayValue(data.height)}</li>
              <li>🩸 {displayValue(data.bloodGroup)}</li>
              <li>⏰ {displayValue(data.birthTime)}</li>
              <li>🌿 Gotra: {displayValue(data.gotra)}</li>
              <li>🍃 Devak: {displayValue(data.devak)}</li>
              <li>🪷 Caste: {displayValue(data.caste)} ({displayValue(data.subCaste)})</li>
              <li>🏡 Birth Place: {displayValue(data.birthPlace)}</li>
              <li>🎨 Complexion: {displayValue(data.complexion)}</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <h2 className="text-sm font-semibold text-slate-700">Family</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>👨 Father: {displayValue(data.fatherName)}</li>
              <li>👩 Mother: {displayValue(data.motherName)}</li>
              <li>👫 Brothers: {displayValue(data.brothersMarried)} married, {displayValue(data.brothersUnmarried)} unmarried</li>
              <li>👭 Sisters: {displayValue(data.sistersMarried)} married, {displayValue(data.sistersUnmarried)} unmarried</li>
              <li>🏠 {displayValue(data.familyType)} Family</li>
              <li>📍 Native Place: {displayValue(data.nativePlace)}</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <h2 className="text-sm font-semibold text-slate-700">Education & Career</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>🎓 {displayValue(data.highestQualification)}</li>
              <li>💼 {displayValue(data.profession)}</li>
              <li>🏢 {displayValue(data.companyName)}</li>
              <li>💰 {displayValue(data.annualIncome)}</li>
              <li>📍 {displayValue(data.workLocation)}</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <h2 className="text-sm font-semibold text-slate-700">Horoscope</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>♈ Rashi: {displayValue(data.rashi)}</li>
              <li>✨ Nakshatra: {displayValue(data.nakshatra)}</li>
              <li>🌊 Nadi: {displayValue(data.nadi)}</li>
              <li>⚡ Gan: {displayValue(data.gan)}</li>
              <li>🔥 Mangal: {displayValue(data.mangal)}</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <h2 className="text-sm font-semibold text-slate-700">Expectations</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>🎯 Education: {displayValue(data.expectedEducation)}</li>
              <li>📏 Height Range: {displayValue(data.expectedHeightRange)}</li>
              <li>🧭 Location: {displayValue(data.preferredLocation)}</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <h2 className="text-sm font-semibold text-slate-700">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>📞 {displayValue(data.mobileNumber)}</li>
              <li>☎️ {displayValue(data.parentContact)}</li>
              <li>✉️ {displayValue(data.email)}</li>
              <li>📌 {displayValue(data.address)}</li>
            </ul>
          </div>
        </div>

        {data.aboutMe ? (
          <div className="rounded-2xl bg-slate-50 p-4">
            <h2 className="text-sm font-semibold text-slate-700">About Me</h2>
            <p className="mt-2 text-sm text-slate-600">{data.aboutMe}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TemplateModern;
