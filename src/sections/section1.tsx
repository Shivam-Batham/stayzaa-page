import { Button } from "@/components/ui/button";
import logo from ".././assets/Stayzaa-brand-logo.svg";
import call from ".././assets/call.svg";
import globe from ".././assets/globe-1.svg";
import stayzaamapIcon from ".././assets/stayzaa_map_icon 1.svg";
import { ArrowRight } from "lucide-react";
import rec2 from ".././assets/rec2.svg";

export default function Section1() {
  const active = 50;
  const section1 = [
    {
      key: 1,
      img: rec2,
      title: "Increase profits",
      description:
        " Upgrade your performance with our dedicated marketing machine, growing guest network and access to the best property management software in the world. Stayzaa on average outperform the marketby 30%+.",
      alt: "Increase profits",
    },
    {
      key: 2,
      img: rec2,
      title: "Reach more guests",
      description:
        " Let our expert team promote your property to hundreds of thousands of travelers while you focus on delivering a world-class guest experience. With a dedicated marketing team in your corner, you can outshine the competition.",
      alt: "Reach more guests",
    },
    {
      key: 3,
      img: rec2,
      title: "Maintain independence",
      description:
        "Gain the strength of a premium brand and powerful tools while keeping the independence that makes your vacation home special. It's the perfect balance of support and freedom, designed to help you win on your terms.",
      alt: "Maintain independence",
    },
  ];
  return (
    <>
      <div className="w-[90%] sm:w-[80%] m-auto flex justify-between">
        <img src={logo} className=" w-[88px] h-[24px]" />

        <div className="border rounded-full flex px-1">
          <img src={call} className="w-[20px] h-[25px] pt-1" />
          <p className="font-body font-normal text-sm p-[2px]">
            Book live 8160189602
          </p>
        </div>
      </div>

      {/* section 1 */}
      <div className="relative w-[90%] sm:w-[80%] m-auto">
        <div
          className="mt-[57px] 
         flex flex-col gap-5 "
        >
          <p className="px-5 py-4 z-[999] font-body font-medium ">
            <span className=" text-[#9e9e9a]">Introducing</span> Stayzaa Listed
          </p>
          <p className="z-[999] sm:w-160 font-headline text-balance !block mx-0 text-left text-5xl font-normal xl:text-6xl">
            Our distribution, Your property management.
          </p>
          <p className="z-[999] sm:w-150 leading-6 font-body  text-white/50 font-medium">
            Elevate above the competition by flying the Wander flag. Unlock
            luxury brand recognition, cutting-edge technology, a vast guest
            network and an unrivaled marketing engine — all while maintaining
            your operational independence.
          </p>

          <Button className="my-4 z-[999] bg-white  w-73 rounded-md text-md  text-black p-6  flex  font-bold font-body tracking-[0px]">
            <p className=" ">Learn more about Stayzaa Listed</p>
            <ArrowRight className="" />
          </Button>
        </div>

        <div className="mt-16 w-full sm:w-[60%] grid grid-cols-12 gap-4 relative">
          <div className="col-span-12 h-2 bg-transparent rounded-full relative">
            {/* 1st Segment (0–20) */}
            <div className="absolute w-[20%] left-0 h-2 rounded-full bg-white/50 z-[999]">
              <div
                className="absolute top-0 left-0 h-2 rounded-full bg-white z-[9999]"
                style={{ width: `${(Math.min(active, 20) / 20) * 100}%` }}
              ></div>
            </div>

            {/* 2nd Segment (21–78 → 58% width) */}
            <div className="absolute w-[58%] left-[21%] h-2 rounded-full bg-white/50 z-[999]">
              <div
                className="absolute top-0 left-0 h-2 rounded-full bg-white z-[9999]"
                style={{
                  width:
                    active > 20
                      ? `${(Math.min(active - 20, 58) / 58) * 100}%`
                      : "0%",
                }}
              ></div>
            </div>

            {/* 3rd Segment (79–100 → 20% width) */}
            <div className="absolute w-[20%] left-[80%] h-2 rounded-full bg-white/50 z-[999]">
              <div
                className="absolute top-0 left-0 h-2 rounded-full bg-white z-[9999]"
                style={{
                  width:
                    active > 78
                      ? `${(Math.min(active - 78, 22) / 22) * 100}%`
                      : "0%",
                }}
              ></div>
            </div>
          </div>

          {/* Floating Icon */}
          <div
            className="absolute h-2 -top-12 transition-transform duration-300 ease-in-out"
            style={{ width: `${active}%` }}
          >
            <div
              className={`absolute flex flex-col items-center z-[999] rotate-180 ${
                active < 20 ? "-right-2.5" : "-right-4"
              }`}
            >
              <img
                src={stayzaamapIcon}
                alt="Property"
                className="min-h-7 min-w-7 object-cover bg-white rounded-sm z-[999] p-1"
              />
              <div className="absolute h-5 w-5 bg-white rounded-sm -top-1.5 rotate-45"></div>
            </div>
          </div>

          <div className="absolute left-0 bottom-4 text-xs z-50 text-[#ffffff66] font-body">
            Handpicked ( Phase 1 )
          </div>
          <div className="absolute left-[4%] top-4 text-xs z-50 text-[#ffffff66] font-body">
            Top 50 properties
          </div>
          <div className="absolute left-[40%] top-4 text-xs z-50 text-[#ffffff66] font-body">
            Onboarded 65th Host
          </div>
        </div>

        <div className=" flex items-center justify-center py-10 my-15">
          <p className="text-[#ffffffaa] text-[10px] font-semibold font-body z-[999] tracking-widest">
            AS SEEN IN
          </p>
        </div>

        {/* section 2 */}

        <div className="relative mx-auto flex flex-col gap-10 px-2 py-10 md:flex-row md:justify-between md:px-16 lg:pb-[120px] lg:pt-0 xl:px-0 font-body">
          {section1.map((i) => (
            <div key={i.key} className="md:flex z-50">
              <img
                src={i.img}
                alt="Increase profits"
                className=" -ml-2 w-32 h-32 object-contain sm:mr-2"
              />
              <div>
                <p className="font-medium text-lg ">{i.title}</p>
                <p className="text-[#ffffff66] w-[266px] text-base mt-2">
                  {i.description}
                </p>
              </div>
            </div>
          ))}

          <div className="w-screen h-[700px] absolute bottom-0 bg-gradient-to-b from-transparent to-[#0a0b0b] z-10"></div>
        </div>

        <div className="absolute z-10 top-0 h-[970px] object-cover -right-[180%] sm:-right-[60%]">
          <img
            src={globe}
            alt=""
            className=" h-[970px] object-cover opacity-40"
          />
          <div className="w-full h-full absolute bottom-0 bg-gradient-to-b from-transparent  to-[#0a0b0b] z-10"></div>
        </div>
      </div>
    </>
  );
}
