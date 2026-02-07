import { useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";
import Stepper from "../components/Stepper";
import { sections, type BiodataFormValues } from "../utils/biodataSchema";

type FieldProps = {
  name: keyof BiodataFormValues;
  label: string;
  type?: string;
  placeholder?: string;
  tooltip?: string;
  requiredMessage?: string;
};

const Field = ({
  name,
  label,
  type = "text",
  placeholder,
  tooltip,
  requiredMessage,
}: FieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<BiodataFormValues>();
  const error = errors[name]?.message as string | undefined;
  return (
    <label className="flex flex-col gap-2">
      <span className="label flex items-center gap-2">
        {label}
        {tooltip ? (
          <span
            className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[11px] text-slate-600"
            title={tooltip}
          >
            i
          </span>
        ) : null}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="input-field"
        {...register(name, requiredMessage ? { required: requiredMessage } : undefined)}
      />
      {error ? <span className="text-xs font-medium text-rose-500">{error}</span> : null}
    </label>
  );
};

const TextAreaField = ({ name, label, placeholder, requiredMessage }: FieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<BiodataFormValues>();
  const error = errors[name]?.message as string | undefined;
  return (
    <label className="flex flex-col gap-2">
      <span className="label">{label}</span>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="input-field resize-none"
        {...register(name, requiredMessage ? { required: requiredMessage } : undefined)}
      />
      {error ? <span className="text-xs font-medium text-rose-500">{error}</span> : null}
    </label>
  );
};

const SelectField = ({
  name,
  label,
  options,
  tooltip,
  requiredMessage,
}: FieldProps & { options: string[] }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<BiodataFormValues>();
  const error = errors[name]?.message as string | undefined;
  return (
    <label className="flex flex-col gap-2">
      <span className="label flex items-center gap-2">
        {label}
        {tooltip ? (
          <span
            className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[11px] text-slate-600"
            title={tooltip}
          >
            i
          </span>
        ) : null}
      </span>
      <select
        className="input-field"
        {...register(name, requiredMessage ? { required: requiredMessage } : undefined)}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <span className="text-xs font-medium text-rose-500">{error}</span> : null}
    </label>
  );
};

const BiodataForm = ({ onPhotoUpload }: { onPhotoUpload: (dataUrl: string) => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { watch } = useFormContext<BiodataFormValues>();
  const photoDataUrl = watch("photoDataUrl");

  const canGoBack = currentStep > 0;
  const canGoForward = currentStep < sections.length - 1;

  const stepContent = useMemo(() => {
    switch (sections[currentStep].id) {
      case "personal":
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              name="fullName"
              label="Full Name"
              placeholder="e.g. Aditi Mahesh Patil"
              requiredMessage="Full name is required."
            />
            <SelectField
              name="gender"
              label="Gender"
              options={["Female", "Male", "Other"]}
              requiredMessage="Gender is required."
            />
            <Field
              name="dateOfBirth"
              label="Date of Birth"
              type="date"
              requiredMessage="Date of birth is required."
            />
            <Field name="age" label="Age" placeholder="e.g. 27" />
            <Field name="height" label="Height" placeholder="e.g. 5'5\"" />
            <Field name="bloodGroup" label="Blood Group" placeholder="e.g. O+" />
            <Field name="birthTime" label="Birth Time" type="time" />
            <Field name="birthPlace" label="Birth Place" placeholder="e.g. Pune" />
            <Field name="complexion" label="Complexion" placeholder="e.g. Fair" />
            <Field
              name="gotra"
              label="Gotra"
              placeholder="e.g. Bharadwaj"
              tooltip="Gotra represents lineage or ancestral clan."
            />
            <Field
              name="devak"
              label="Devak"
              placeholder="e.g. Mango Tree"
              tooltip="Devak is a symbolic family deity or sacred plant."
            />
            <Field name="caste" label="Caste" placeholder="e.g. Maratha" />
            <Field name="subCaste" label="Sub-caste" placeholder="e.g. Kunbi" />
            <div className="md:col-span-2">
              <label className="flex flex-col gap-3">
                <span className="label">Profile Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  className="input-field"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = () => {
                      const result = typeof reader.result === "string" ? reader.result : "";
                      onPhotoUpload(result);
                    };
                    reader.readAsDataURL(file);
                  }}
                />
                {photoDataUrl ? (
                  <img
                    src={photoDataUrl}
                    alt="Uploaded preview"
                    className="h-40 w-32 rounded-xl border border-slate-200 object-cover"
                  />
                ) : null}
              </label>
            </div>
            <div className="md:col-span-2">
              <TextAreaField
                name="aboutMe"
                label="About Me"
                placeholder="Share a short introduction about yourself, hobbies, and values."
              />
            </div>
          </div>
        );
      case "family":
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Field name="fatherName" label="Father Name" placeholder="e.g. Mahesh Patil" />
            <Field
              name="fatherOccupation"
              label="Father Occupation"
              placeholder="e.g. Retired Government Officer"
            />
            <Field name="motherName" label="Mother Name" placeholder="e.g. Kavita Patil" />
            <Field
              name="motherOccupation"
              label="Mother Occupation"
              placeholder="e.g. Homemaker"
            />
            <Field
              name="brothersMarried"
              label="Number of Brothers (Married)"
              placeholder="e.g. 1"
            />
            <Field
              name="brothersUnmarried"
              label="Number of Brothers (Unmarried)"
              placeholder="e.g. 0"
            />
            <Field
              name="sistersMarried"
              label="Number of Sisters (Married)"
              placeholder="e.g. 1"
            />
            <Field
              name="sistersUnmarried"
              label="Number of Sisters (Unmarried)"
              placeholder="e.g. 0"
            />
            <SelectField
              name="familyType"
              label="Family Type"
              options={["Joint", "Nuclear"]}
            />
            <Field name="nativePlace" label="Native Place" placeholder="e.g. Kolhapur" />
          </div>
        );
      case "education":
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              name="highestQualification"
              label="Highest Qualification"
              placeholder="e.g. MBA (Finance)"
            />
            <Field name="profession" label="Profession" placeholder="e.g. Product Manager" />
            <Field
              name="companyName"
              label="Company / Business Name"
              placeholder="e.g. Sahyadri Tech"
            />
            <Field name="annualIncome" label="Annual Income" placeholder="e.g. ₹12 LPA" />
            <Field name="workLocation" label="Work Location" placeholder="e.g. Mumbai" />
          </div>
        );
      case "horoscope":
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              name="rashi"
              label="Rashi"
              placeholder="e.g. Vrishabha"
              tooltip="Rashi refers to the zodiac sign in Vedic astrology."
            />
            <Field
              name="nakshatra"
              label="Nakshatra"
              placeholder="e.g. Rohini"
              tooltip="Nakshatra is the lunar mansion or birth star."
            />
            <Field
              name="nadi"
              label="Nadi"
              placeholder="e.g. Madhya"
              tooltip="Nadi is one of the three astrological pulse categories."
            />
            <Field
              name="gan"
              label="Gan"
              placeholder="e.g. Dev Gan"
              tooltip="Gan classifies temperament in the Kundali matching."
            />
            <SelectField
              name="mangal"
              label="Mangal"
              options={["Yes", "No", "Not Sure"]}
              tooltip="Mangal indicates Manglik dosha presence."
            />
          </div>
        );
      case "expectations":
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              name="expectedEducation"
              label="Expected Education"
              placeholder="e.g. Graduate or above"
            />
            <Field
              name="expectedHeightRange"
              label="Expected Height Range"
              placeholder="e.g. 5'2\" - 5'8\""
            />
            <Field
              name="expectedCaste"
              label="Expected Caste (Optional)"
              placeholder="e.g. Open to all"
            />
            <Field
              name="preferredLocation"
              label="Preferred Location"
              placeholder="e.g. Pune / Mumbai"
            />
          </div>
        );
      case "contact":
        return (
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              name="mobileNumber"
              label="Mobile Number"
              placeholder="e.g. +91 98765 43210"
              requiredMessage="Mobile number is required."
            />
            <Field
              name="parentContact"
              label="Parent Contact"
              placeholder="e.g. +91 98765 11111"
            />
            <Field
              name="email"
              label="Email"
              type="email"
              placeholder="e.g. biodata@email.com"
              requiredMessage="Email is required."
            />
            <div className="md:col-span-2">
              <TextAreaField
                name="address"
                label="Address"
                placeholder="Full residential address with city and state."
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  }, [currentStep, onPhotoUpload, photoDataUrl]);

  return (
    <div className="section-card space-y-6">
      <div className="flex flex-col gap-3">
        <span className="badge">Step {currentStep + 1} of {sections.length}</span>
        <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-slate-800">{sections[currentStep].title}</h2>
        <p className="text-sm text-slate-500">
          Complete the details in this section to build a comprehensive Marathi biodata.
        </p>
      </div>
      {stepContent}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          disabled={!canGoBack}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            canGoBack
              ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
              : "cursor-not-allowed bg-slate-50 text-slate-400"
          }`}
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, sections.length - 1))}
          disabled={!canGoForward}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            canGoForward
              ? "bg-maroon text-white hover:bg-maroon/90"
              : "cursor-not-allowed bg-slate-100 text-slate-400"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BiodataForm;
