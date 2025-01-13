import RegisterForm from "@/components/forms/RegisterForm";
import { getUser, getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

import React from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-ks.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-[50px] w-[200px] ml-[-5px]"
          />
          <RegisterForm user={user} />
          <p className="copyright py-12">© 2025 KareSphere</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="Register image"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
