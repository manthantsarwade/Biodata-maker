import { displayValue } from "../utils/formatters";
import type { BiodataFormValues } from "../utils/biodataSchema";

type TemplateProps = {
  data: BiodataFormValues;
};

const TemplatePremium = ({ data }: TemplateProps) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Premium Biodata</p>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold">{displayValue(data.fullName)}</h1>
            <p className="text-sm text-slate-200">{displayValue(data.profession)}</p>
          </div>
          <div className="h-28 w-24 overflow-hidden rounded-xl border border-gold bg-white">
            {data.photoDataUrl ? (
              <img src={data.photoDataUrl} alt="Profile" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                Photo
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 p-4">
            <h2 className="text-sm font-semibold text-slate-800">Key Details</h2>
            <div className="mt-3 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
              <p><strong>Gender:</strong> {displayValue(data.gender)}</p>
              <p><strong>Date of Birth:</strong> {displayValue(data.dateOfBirth)}</p>
              <p><strong>Age:</strong> {displayValue(data.age)}</p>
              <p><strong>Height:</strong> {displayValue(data.height)}</p>
              <p><strong>Blood Group:</strong> {displayValue(data.bloodGroup)}</p>
              <p><strong>Birth Time:</strong> {displayValue(data.birthTime)}</p>
              <p><strong>Birth Place:</strong> {displayValue(data.birthPlace)}</p>
              <p><strong>Complexion:</strong> {displayValue(data.complexion)}</p>
              <p><strong>Gotra:</strong> {displayValue(data.gotra)}</p>
              <p><strong>Devak:</strong> {displayValue(data.devak)}</p>
              <p><strong>Caste:</strong> {displayValue(data.caste)}</p>
              <p><strong>Sub-caste:</strong> {displayValue(data.subCaste)}</p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 p-4">
            <h2 className="text-sm font-semibold text-slate-800">Education & Career</h2>
            <div className="mt-3 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
              <p><strong>Qualification:</strong> {displayValue(data.highestQualification)}</p>
              <p><strong>Profession:</strong> {displayValue(data.profession)}</p>
              <p><strong>Company:</strong> {displayValue(data.companyName)}</p>
              <p><strong>Annual Income:</strong> {displayValue(data.annualIncome)}</p>
              <p><strong>Work Location:</strong> {displayValue(data.workLocation)}</p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 p-4">
            <h2 className="text-sm font-semibold text-slate-800">Horoscope / Kundali</h2>
            <div className="mt-3 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
              <p><strong>Rashi:</strong> {displayValue(data.rashi)}</p>
              <p><strong>Nakshatra:</strong> {displayValue(data.nakshatra)}</p>
              <p><strong>Nadi:</strong> {displayValue(data.nadi)}</p>
              <p><strong>Gan:</strong> {displayValue(data.gan)}</p>
              <p><strong>Mangal:</strong> {displayValue(data.mangal)}</p>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 p-4">
            <h2 className="text-sm font-semibold text-slate-800">Family Timeline</h2>
            <div className="mt-3 space-y-3 text-sm text-slate-600">
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold"></span>
                <div>
                  <p className="font-semibold">Father</p>
                  <p>{displayValue(data.fatherName)} · {displayValue(data.fatherOccupation)}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold"></span>
                <div>
                  <p className="font-semibold">Mother</p>
                  <p>{displayValue(data.motherName)} · {displayValue(data.motherOccupation)}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold"></span>
                <div>
                  <p className="font-semibold">Siblings</p>
                  <p>
                    Brothers: {displayValue(data.brothersMarried)} married, {displayValue(data.brothersUnmarried)} unmarried
                  </p>
                  <p>
                    Sisters: {displayValue(data.sistersMarried)} married, {displayValue(data.sistersUnmarried)} unmarried
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold"></span>
                <div>
                  <p className="font-semibold">Family Type</p>
                  <p>{displayValue(data.familyType)} · Native Place {displayValue(data.nativePlace)}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 p-4">
            <h2 className="text-sm font-semibold text-slate-800">Expectations</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Education: {displayValue(data.expectedEducation)}</li>
              <li>Height Range: {displayValue(data.expectedHeightRange)}</li>
              <li>Preferred Caste: {displayValue(data.expectedCaste)}</li>
              <li>Preferred Location: {displayValue(data.preferredLocation)}</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 p-4">
            <h2 className="text-sm font-semibold text-slate-800">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Mobile: {displayValue(data.mobileNumber)}</li>
              <li>Parent Contact: {displayValue(data.parentContact)}</li>
              <li>Email: {displayValue(data.email)}</li>
              <li>Address: {displayValue(data.address)}</li>
            </ul>
          </section>

          {data.aboutMe ? (
            <section className="rounded-2xl border border-slate-200 p-4">
              <h2 className="text-sm font-semibold text-slate-800">About Me</h2>
              <p className="mt-2 text-sm text-slate-600">{data.aboutMe}</p>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TemplatePremium;
