import Link from "next/link";
import React from "react";
import Image from "next/image";
import StatCard from "@/components/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/table/columns";

const Admin = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-ks.png"
            height={32}
            width={162}
            alt="Logo"
            className="h-[50px] w-[200px]"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>
      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome</h1>
          <p className="text-dark-700">Manage Appointments</p>
          {appointments && (
            <section className="admin-stat">
              <StatCard
                type="appointments"
                count={appointments.scheduledCount}
                label="Scheduled Appointments"
                icon="/assets/icons/appointments.svg"
              />
              <StatCard
                type="pending"
                count={appointments.pendingCount}
                label="Pending Appointments"
                icon="/assets/icons/pending.svg"
              />
              <StatCard
                type="cancelled"
                count={appointments.cancelledCount}
                label="Cancelled Appointments"
                icon="/assets/icons/cancelled.svg"
              />
            </section>
          )}
        </section>
        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default Admin;
