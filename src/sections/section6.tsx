import { DollarSign, Rocket, Users } from "lucide-react";

export default function Section6(){

    return (<section className=" text-white py-16 max-md:px-4  sm:w-[80%] m-auto">
        {/* Heading */}
        <div className=" mx-auto lg:text-left">
          <h6 className="uppercase text-xs tracking-[2px] font-body font-medium text-[#bdbdbd]">
            GUESTS
          </h6>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-headline tracking-tight leading-tight">
            Who are Stayzaa guests?
          </h2>
          <p className="text-base text-[#ececec] mt-4 leading-tighter font-body">
            Stayzaa guests are primarily from high net-worth, affluent
            <br />
            households who value consistency and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-12">
          <div>
            <DollarSign className="w-6 h-6 text-white/50" />
            <p className="mt-4 sm:mt-2 text-start text-xl font-medium font-body">
              Higher net worth individuals
            </p>
            <p className="font-body text-[#bdbdbd] font-medium">
              70% of Wander guests are affluent, with net worths exceeding $1M.
              They have a much higher repeat booking rate and lifetime value
              than average.
            </p>
          </div>

          <div>
            <Rocket className="w-6 h-6 text-white/50" />
            <p className="mt-4 sm:mt-2 text-start text-xl font-medium font-body">
              The modern traveler
            </p>
            <p className="text-base text-[#bdbdbd]  font-medium font-body">
              Wander’s audience is the modern traveler who values consistent
              quality, beautiful architecture and interior design, and
              white-glove service.
            </p>
          </div>

          <div>
            <Users className="w-6 h-6 text-white/50" />
            <p className="mt-4 sm:mt-2 text-start text-xl font-medium font-body">
              Lovers of premium brands
            </p>
            <p className="font-body text-[#bdbdbd] font-medium">
              Wander guests love premiums brands like Apple, Tesla, Nike,
              Porsche, Four Seasons and more. They value quality, great design
              and luxury.
            </p>
          </div>
        </div>
      </section>)
}