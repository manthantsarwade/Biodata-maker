import { displayValue } from "../utils/formatters";
import type { BiodataFormValues } from "../utils/biodataSchema";

type TemplateProps = {
  data: BiodataFormValues;
};

const TemplateTraditional = ({ data }: TemplateProps) => {
  return (
    <div className="rounded-3xl border border-cream/60 bg-cream p-6 text-slate-800 shadow-soft">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-maroon/80">Marathi Biodata</p>
          <h1 className="font-serif text-3xl text-maroon">{displayValue(data.fullName)}</h1>
          <p className="mt-1 text-sm text-slate-600">{displayValue(data.profession)}</p>
        </div>
        <div className="h-36 w-28 overflow-hidden rounded-2xl border border-maroon/30 bg-white">
          {data.photoDataUrl ? (
            <img src={data.photoDataUrl} alt="Profile" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
              Photo
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <section className="border-t border-maroon/20 pt-4">
          <h2 className="font-serif text-lg text-maroon">Personal Details</h2>
          <div className="mt-3 grid gap-3 text-sm md:grid-cols-2">
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

        <section className="border-t border-maroon/20 pt-4">
          <h2 className="font-serif text-lg text-maroon">Family Details</h2>
          <div className="mt-3 grid gap-3 text-sm md:grid-cols-2">
            <p><strong>Father:</strong> {displayValue(data.fatherName)} ({displayValue(data.fatherOccupation)})</p>
            <p><strong>Mother:</strong> {displayValue(data.motherName)} ({displayValue(data.motherOccupation)})</p>
            <p><strong>Brothers:</strong> Married {displayValue(data.brothersMarried)}, Unmarried {displayValue(data.brothersUnmarried)}</p>
            <p><strong>Sisters:</strong> Married {displayValue(data.sistersMarried)}, Unmarried {displayValue(data.sistersUnmarried)}</p>
            <p><strong>Family Type:</strong> {displayValue(data.familyType)}</p>
            <p><strong>Native Place:</strong> {displayValue(data.nativePlace)}</p>
          </div>
        </section>

        <section className="border-t border-maroon/20 pt-4">
          <h2 className="font-serif text-lg text-maroon">Education & Career</h2>
          <div className="mt-3 grid gap-3 text-sm md:grid-cols-2">
            <p><strong>Qualification:</strong> {displayValue(data.highestQualification)}</p>
            <p><strong>Profession:</strong> {displayValue(data.profession)}</p>
            <p><strong>Company:</strong> {displayValue(data.companyName)}</p>
            <p><strong>Annual Income:</strong> {displayValue(data.annualIncome)}</p>
            <p><strong>Work Location:</strong> {displayValue(data.workLocation)}</p>
          </div>
        </section>

        <section className="border-t border-maroon/20 pt-4">
          <h2 className="font-serif text-lg text-maroon">Horoscope / Kundali</h2>
          <div className="mt-3 grid gap-3 text-sm md:grid-cols-2">
            <p><strong>Rashi:</strong> {displayValue(data.rashi)}</p>
            <p><strong>Nakshatra:</strong> {displayValue(data.nakshatra)}</p>
            <p><strong>Nadi:</strong> {displayValue(data.nadi)}</p>
            <p><strong>Gan:</strong> {displayValue(data.gan)}</p>
            <p><strong>Mangal:</strong> {displayValue(data.mangal)}</p>
          </div>
        </section>

        <section className="border-t border-maroon/20 pt-4">
          <h2 className="font-serif text-lg text-maroon">Expectations</h2>
          <div className="mt-3 grid gap-3 text-sm md:grid-cols-2">
            <p><strong>Education:</strong> {displayValue(data.expectedEducation)}</p>
            <p><strong>Height Range:</strong> {displayValue(data.expectedHeightRange)}</p>
            <p><strong>Preferred Caste:</strong> {displayValue(data.expectedCaste)}</p>
            <p><strong>Preferred Location:</strong> {displayValue(data.preferredLocation)}</p>
          </div>
        </section>

        <section className="border-t border-maroon/20 pt-4">
          <h2 className="font-serif text-lg text-maroon">Contact Details</h2>
          <div className="mt-3 grid gap-3 text-sm md:grid-cols-2">
            <p><strong>Mobile:</strong> {displayValue(data.mobileNumber)}</p>
            <p><strong>Parent Contact:</strong> {displayValue(data.parentContact)}</p>
            <p><strong>Email:</strong> {displayValue(data.email)}</p>
            <p><strong>Address:</strong> {displayValue(data.address)}</p>
          </div>
        </section>

        {data.aboutMe ? (
          <section className="border-t border-maroon/20 pt-4">
            <h2 className="font-serif text-lg text-maroon">About Me</h2>
            <p className="mt-2 text-sm text-slate-700">{data.aboutMe}</p>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default TemplateTraditional;
