import PatientForm from "@/components/forms/PatientForm";
import { Link } from "lucide-react";
import Image from "next/image";

export default function NewAppointment() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification | Passkey Modal*/}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-ks.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-[150px] w-[250px]"
          />
          {/* <PatientForm /> */}
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2025 KareSphere
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
