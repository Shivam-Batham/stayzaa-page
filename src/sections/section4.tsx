import { Building2, Home } from "lucide-react";
import building from "@/assets/sec-4.jpg";

export default function Section4(){

    return (<section className=" max-w-[1440px] mx-auto px-5 py-10 md:px-16 md:py-20 xl:px-20">
        {/* Heading */}
        <div className="sm:w-[60%] md:w-[80%] max-md:mx-4 sm:mx-0  lg:text-left space-y-4">
          <p className="uppercase tracking-[2px] text-[10px] text-[#bdbdbd] font-medium font-body">
            Leading the way
          </p>
          <h2 className="font-headline text-[2.5rem] leading-[3rem] tracking-[-0.075rem] xl:leading-[3.75rem] text-balance   font-bold xl:text-[56px] text-start">
            We’re creating a new category
          </h2>
          <p className="text-base max-sm:w-[100%] text-white/90 mt-4 font-body">
            Wander is transforming the $2 trillion (and growing) lodging
            industry by combining the quality of a luxury hotel with the comfort
            of a private vacation home – and pulling customers from both
            markets.
          </p>
        </div>

        {/* section 5 */}
        <div className=" w-full relative mt-20 sm:mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="rounded-l-2xl bg-gradient-to-r from-[#ffffff40] to-transparent px-6 py-10 flex flex-col items-center flex-1 text-center lg:text-left max-w-xs rotate-90 md:rotate-0 lg:rotate-360">
            <div className="rotate-270  md:rotate-0 ">
              <Home className="mx-auto lg:mx-0 h-8 w-8 text-gray-400" />
              <p className="mt-4 text-gray-400 whitespace-nowrap font-body">
                Vacation rentals
              </p>
              <p className="text-2xl font-bold mt-1 font-body">$300B</p>
            </div>
          </div>

          {/* Middle Image */}
          <div className="rounded-2xl overflow-hidden w-full max-w-max">
            <img
              src={building} 
              alt="Wander"
              className="w-60 h-60 object-cover"
            />
          </div>

          {/* Hotels & Resorts */}
          <div className="rotate-90 md:rotate-0  lg:rotate-360 bg-gradient-to-l from-[#ffffff40] to-transparent rounded-r-2xl px-6 py-10 flex flex-col items-center flex-2 text-center lg:text-left max-md:w-[300px] max-md:mt-10 max-md:items-end">
            <div className="rotate-270 md:rotate-0 lg:rotate-360 ">
              <Building2 className="mx-auto lg:mx-0 h-8 w-8 text-gray-400" />
              <p className="mt-4 text-gray-400 font-body">Hotels & resorts</p>
              <p className="text-2xl font-bold mt-1 font-body">$1.7T</p>
            </div>
          </div>

          <div className="absolute left-0 w-full -top-6 md:-top-1 text-center sm:text-left text-[10px] text-[#bdbdbd] tracking-[2px] font-medium">
            LODGING INDUSTRY – $2T
          </div>
        </div>
      </section>)
}