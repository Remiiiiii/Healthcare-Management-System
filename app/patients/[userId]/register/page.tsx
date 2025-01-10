import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-ks.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-[150px] w-[250px] ml-[-25px]"
          />
          <RegisterForm user={user} />
          <p className="copyright py-12">© 2025 KareSphere</p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img2.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img h-full max-w-[390px]"
      />
    </div>
  );
};

export default Register;
