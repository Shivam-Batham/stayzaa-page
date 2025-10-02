import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import houseWander from "@/assets/houseWander.jpg";

export default function Section11() {
  return (
    <section className="relative py-10 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-screen">
        <img
          src={houseWander}
          alt="Wander Partnership"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0b] via-transparent to-[#0a0b0b]" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1440px] px-5 md:px-16 lg:px-20">
        <div className=" relative z-10 max-w-[609px] space-y-6">
          <h2 className="font-headline text-[2.5rem] leading-[3rem] xl:leading-[3.75rem] tracking-[-0.075rem] text-balance md:mr-20 xl:m-0 !block font-bold xl:text-[56px] text-start">
            Consider this a personal invitation to explore a partnership with
            Wander.
          </h2>
          <p className="mt-6 text-base text-[#d9d9d9]">
            Elevate your portfolio by aligning with the world’s premier vacation
            rentals. With Wander Listed, you unlock luxury brand recognition,
            cutting-edge technology, a vast guest network and an unrivaled
            marketing engine — all while maintaining your operational
            independence.
          </p>

          <button className="mt-4 flex items-center justify-center bg-white w-fit rounded-md text-md text-black px-6 h-12  font-bold">
            <p className=" ">Learn more about Stayzaa Listed</p>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
