import { DollarSign, Rocket, Users } from "lucide-react";

export default function Section6() {
  return (
    <section className="space-y-10 px-5 py-10 md:space-y-20 md:px-16 xl:px-20 max-w-[1440px] m-auto">
      {/* Heading */}
      <div className="space-y-4">
        <h6 className="uppercase text-[10px] tracking-[2px] text-[#bdbdbd] font-medium">
          GUESTS
        </h6>
        <h2 className="font-headline text-[2.5rem] leading-[3rem] tracking-[-0.075rem] xl:tracking-[-0.125rem] xl:leading-[3.75rem] text-balance md:mr-20 !block font-bold xl:text-[56px] text-start">
          Who are Stayzaa guests?
        </h2>
        <p className="mt-6 text-base text-[#d9d9d9]">
          Stayzaa guests are primarily from high net-worth, affluent
          <br />
          households who value consistency and quality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-12">
        <div className="space-y-4 max-w-[395px]">
          <DollarSign className="w-8 h-8 text-white/50"  strokeWidth={1}/>
          <div>

          <p className="mt-4 sm:mt-2 text-start text-lg font-medium font-body">
            Higher net worth individuals
          </p>
          <p className="font-body text-[#bdbdbd] font-medium">
            70% of Wander guests are affluent, with net worths exceeding $1M.
            They have a much higher repeat booking rate and lifetime value than
            average.
          </p>
          </div>
        </div>

        <div className="space-y-4 max-w-[395px]">
          <Rocket className="w-8 h-8 text-white/50"  strokeWidth={1}/>
          <div className="space-y-1">

          <p className="mt-4 sm:mt-2 text-start text-lg font-medium font-body">
            The modern traveler
          </p>
          <p className="text-base text-[#bdbdbd]  font-medium font-body">
            Wander’s audience is the modern traveler who values consistent
            quality, beautiful architecture and interior design, and white-glove
            service.
          </p>
          </div>
        </div>

        <div className="space-y-4 max-w-[395px]">
          <Users className="w-8 h-8 text-white/50"  strokeWidth={1}/>
          <div>

          <p className="mt-4 sm:mt-2 text-start text-lg font-medium font-body">
            Lovers of premium brands
          </p>
          <p className="font-body text-[#bdbdbd] font-medium">
            Wander guests love premiums brands like Apple, Tesla, Nike, Porsche,
            Four Seasons and more. They value quality, great design and luxury.
          </p>
        </div>
          </div>
      </div>
    </section>
  );
}
