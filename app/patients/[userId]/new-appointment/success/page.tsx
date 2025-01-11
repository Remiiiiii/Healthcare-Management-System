import Link from "next/link";
import Image from "next/image";
import { getAppointments } from "@/lib/actions/appointment.actions";
import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Success = async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointments(appointmentId);
  const doctor = appointment
    ? Doctors.find((doc) => doc.name === appointment.primaryPhysician)
    : null;

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-ks.png"
            height={1000}
            width={1000}
            alt="logo"
            className="h-[150px] w-[250px]"
          />
        </Link>
        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={100}
            width={100}
            alt="success"
            className="mt-[-50px] pb-10"
          />

          <h2 className="header mb-6 max-w-[600px] text-center">
            Great! Your
            <span className="text-green-500"> appointment request</span> has
            been submitted
          </h2>
          <p>We&apos;ll contact you soon to confirm your appointment</p>
        </section>
        <div>
          <p>Appointment Details:</p>
        </div>
        <section className="request-details">
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image || ""}
              alt="doctor"
              height={100}
              width={100}
              className="size-15"
            />
            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p>
              {appointment
                ? formatDateTime(appointment.schedule).dateTime
                : "No appointment scheduled"}
            </p>
          </div>
        </section>
        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            Schedule Another Appointment
          </Link>
        </Button>
        <p className="copyright">© 2025 KareSphere</p>
      </div>
    </div>
  );
};

export default Success;
