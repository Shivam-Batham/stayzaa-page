import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Factory,
  House,
  Mountain,
  Sparkles,
  SunMedium,
  Sunset,
} from "lucide-react";
import Google from "@/assets/google.svg";
import Facebook from "@/assets/facebook.svg";

export default function Section2() {

  const section2 = [
    { icon: <Sparkles />, label: "Luxury home" },
    { icon: <Factory />, label: "Contemporary design" },
    { icon: <House />, label: "New(ish) build" },
    { icon: <Mountain />, label: "Dramatic views" },
    { icon: <Sunset />, label: "Beachfront / ski-in ski-out" },
    { icon: <SunMedium />, label: "“Wow” factor" },
  ];
  return (
    <div className="rounded-sm max-w-[1440px] mx-auto px-5 py-10 md:px-16 md:py-20 xl:px-20 w-full    space-y-8  grid grid-cols-1 gap-12 xl:grid-cols-10 mt-10 md:bg-gradient-to-b from-[#020408] via-[#0a0b0b] to-transparent relative z-10">
      <div className="   rounded shadow col-span-6 z-10 max-w-[600px] space-y-8 xl:max-w-[755px]">
        <p className="font-headline  text-[40px] leading-[3rem] tracking-[-0.075rem] xl:tracking-[-0.125rem] xl:leading-[3.75rem] xl:text-[56px]   text-balance mx-auto !block font-bold x  text-start ">
          Unlock your home’s full potential with Stayzaa.
        </p>
        <p className="text-[rgba(217,217,217,1)] text-md   text-start text-base leading-tighter font-body">
          Don't get lost in a sea of mediocre vacation rentals on other travel
          platforms. Outshine competitors while continuing to deliver an
          incredible guest experience with Stayzaa Listed. With Stayzaa in your
          corner, our distribution engine, pricing model and smart technology
          come together with your operational expertise to attract high value
          guests from our vast network of travelers and drive more profits.
        </p>

        <div className="w-full font-body">
          <ul className="grid gap-6 sm:grid-cols-2">
            {section2.map((item, index) => (
              <li key={index} className="whitespace-nowrap flex items-center space-x-3">
                <span className="text-[#ffffff66] ">{item.icon}</span>
                <span className="font-bold text-[20px]">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="text-white sm:ml-0 shadow col-span-6 sm:col-span-4
        flex  sm:w-full sm:max-w-[426px] flex-col rounded-2xl border border-white/10 
        p-5 backdrop-blur-md xl:min-w-[410px] xl:justify-self-end z-[999]
        "
      >
        <form action="" className="space-y-6 max-w-md mx-auto">
          {/* Heading */}
          <div className="text-start">
            <p className="text-4xl font-body font-bold">Apply today</p>
            <p className="mt-2 text-gray-300 font-body">
              to see your projected performance with Stayzaa
            </p>
          </div>

          {/* Name fields */}
          <div className="flex gap-4">
            <Input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First name"
              className="flex-1 border border-white/15 placeholder:text-[#ececec] px-3 py-2 rounded-md font-body focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <Input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name"
              className="flex-1 border border-white/15 placeholder:text-[#ececec] px-3 py-2 rounded-md font-body focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Phone number */}
          <Input
            type="text"
            name="phonenumber"
            id="phonenumber"
            placeholder="Phone number"
            className="w-full border border-white/15 placeholder:text-[#ececec] px-3 py-2 rounded-md font-body focus:ring-2 focus:ring-primary focus:outline-none"
          />

          {/* Email */}
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border border-white/15 placeholder:text-[#ececec] px-3 py-2 rounded-md font-body focus:ring-2 focus:ring-primary focus:outline-none"
          />

          {/* Link */}
          <Input
            type="text"
            name="Link"
            id="Link"
            placeholder="Enter Link"
            className="w-full border border-white/15 placeholder:text-[#ececec] px-3 py-2 rounded-md font-body focus:ring-2 focus:ring-primary focus:outline-none"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="outline"
            className="w-full py-4 text-black bg-white rounded-md font-medium shadow hover:bg-white/90 focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none"
          >
            Continue
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="flex-grow border-t border-white/30"></div>
            <span className="text-white font-body">or</span>
            <div className="flex-grow border-t border-white/30"></div>
          </div>

          {/* Social buttons */}
          <div className="flex gap-4">
            <Button className="flex-1 flex items-center justify-center gap-2 border border-white/15 bg-[#141414] text-white rounded-md py-2 hover:bg-[#252525]">
              <img src={Google} alt="google" className="h-5 w-5" />
            </Button>
            <Button className="flex-1 flex items-center justify-center gap-2 border border-white/15 bg-[#141414] text-white rounded-md py-2 hover:bg-[#252525]">
              <img src={Facebook} alt="facebook" className="h-5 w-5" />
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
}
