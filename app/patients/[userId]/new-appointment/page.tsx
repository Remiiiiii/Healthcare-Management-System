import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

const NewAppointment = async ({ params }: { params: { userId: string } }) => {
  const { userId } = await params;
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-ks.png"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-[150px] w-[250px] ml-[-25px]"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient?.$id || ""}
          />

          <p className="copyright mt-10 py-12">© 2025 KareSphere</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[40%] bg-bottom"
      />
    </div>
  );
};

export default NewAppointment;
