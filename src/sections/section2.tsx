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
    <div className="rounded-sm sm:w-[80%] px-4 md:p-20 sm:m-auto grid grid-cols-1 gap-10 md:grid-cols-10 mt-10 md:bg-gradient-to-b from-[#000] via-[#0a0b0b] to-transparent relative z-10">
      <div className="  rounded shadow col-span-6 z-10 max-w-[600px] space-y-8 xl:max-w-[755px]">
        <p className="font-headline text-[44px]  sm:text-5xl text-balance mx-auto !block font-bold xl:text-5xl text-start leading-tight tracking-tight">
          Unlock your home’s full potential with Stayzaa.
        </p>
        <p className="text-[#cecece] text-start text-base leading-tighter font-body">
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
              <li key={index} className="flex items-center space-x-3">
                <span className="text-[#ffffff66] ">{item.icon}</span>
                <span className="font-medium text-lg">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="text-white sm:ml-0 shadow col-span-6 sm:col-span-4
        flex  sm:w-full sm:max-w-[426px] flex-col rounded-2xl border border-white/10 
        p-5 backdrop-blur-md xl:min-w-[410px] justify-self-end z-[999]
        "
      >
        <form action="" className="space-y-4 ">
          <p className="text-4xl font-headline font-medium">Apply today</p>
          <p className="mt-4 font-body">
            to see your projected performance with Stayzaa
          </p>
          <div className="flex gap-4 mt-10 font-body">
            <Input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First name"
              className="border font-body border-white/30 placeholder:text-[#ececec]"
            />
            <Input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last name"
              className="border font-body border-white/30 placeholder:text-[#ececec]"
            />
          </div>
          <Input
            type="text"
            name="phonenumber"
            id="phonenumber"
            placeholder="Phone number"
            className="border font-body border-white/30 placeholder:text-[#ececec]"
          />
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border font-body border-white/30 placeholder:text-[#ececec] "
          />

          <Button
            type="submit"
            variant={"outline"}
            className="
              py-5 px-5 mt-2 font-body bg-white w-full text-center text-black  rounded-md text-sm font-medium shadow hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
              "
          >
            Continue
          </Button>

          <div className="  flex items-center">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="font-body mx-4 text-gray-300">or</span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>

          <div
            className="flex 
            gap-4
            item-center justify-center
             "
          >
            <Button className="bg-black border w-[50%]">
              <img src={Google} alt="google" className="h-5 w-5" />
            </Button>
            <Button className="bg-black border  w-[50%]">
              <img src={Facebook} alt="facebook" className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
