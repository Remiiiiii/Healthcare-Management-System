export const GenderOptions = ["male", "female"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Patricia Green - Cardiologist",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Leila Cameron - Pediatrician ",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livingston - Orthopedic Surgeon",
  },
  {
    image: "/assets/images/dr-wu.png",
    name: "Evan Wu - Neurologist ",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Johnathan Powell - Ophthalmologist ",
  },
  {
    image: "/assets/images/dr-ramirez.png",
    name: "Alex Ramirez - Dermatologist ",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Jasmine Lee - Pediatrician ",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Alyana Cruz - Gynecologist ",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Jiya Sharma - Neurologist",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
