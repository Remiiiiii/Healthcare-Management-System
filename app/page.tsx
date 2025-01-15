import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import Link from "next/link";
import Image from "next/image";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screens">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-ks.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-[50px] w-[200px] ml-[-5px]"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 KareSphere
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/landing-dr-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="hidden object-contain h-50 w-50 md:block max-w-[50%] mt-[10%]"
      />
    </div>
  );
};

export default Home;
