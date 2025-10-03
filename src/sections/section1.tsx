import logo from ".././assets/Stayzaa-brand-logo.svg";
import stayzaamapIcon from ".././assets/stayzaa_map_icon 1.svg";
import { ArrowRight, Phone } from "lucide-react";
import rec2 from "@/assets/rec2.svg";
import heroImg from "@/assets/heroimage.jpg";

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

      {/* section 1 */}
      <section className="relative isolate mx-auto min-h-fit w-full py-12 pt-20 md:pt-40">
        <div className="absolute top-0 w-full left-1/2 transform -translate-x-1/2  max-w-[1440px] flex justify-between items-center px-5 md:px-16 xl:px-20 h-16 z-10">
        <img src={logo} className=" w-[88px] h-[24px]" />

        <div className="border rounded-full flex px-1 h-max items-center">
          {/* <img src={call} className="w-[20px] h-[25px] pt-1" /> */}
          <Phone className="w-[20px] h-[20px] p-1" />
          <p className="font-body font-normal text-sm p-[2px]">
            Book live 8160189602
          </p>
        </div>

      </div>
        <div className="mx-auto max-w-[1440px] px-5 md:px-16 xl:px-20">
          <div className="grid gap-6 lg:grid-cols-[631px_1fr] xl:gap-[74px]">
            <div
              className=" 
          flex flex-1 flex-col gap-6"
            >
              <div className="flex h-[22px] w-fit items-center gap-1 rounded-full px-2 text-xs backdrop-blur-xs ">
                <span className=" text-[#9e9e9a]">Introducing</span> Stayzaa
                Listed
              </div>
              <p className=" font-headline text-[56px] sm:text-[56px] leading-[3rem] tracking-[-0.075rem] xl:tracking-[-0.125rem] xl:leading-[3.75rem] text-balance !block font-bold xl:text-[64px] text-start">
                Our distribution. Your property management.
              </p>
              <p className="z-[999] text-[#ffffffcc] tracking-[0.3px]">
                Elevate above the competition by flying the Wander flag. Unlock
                luxury brand recognition, cutting-edge technology, a vast guest
                network and an unrivaled marketing engine — all while
                maintaining your operational independence.
              </p>

              <button className="mt-4 flex items-center justify-center bg-white w-fit rounded-md text-md text-black px-6 h-12  font-bold">
                <p className=" ">Learn more about Stayzaa Listed</p>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="opacity-0 my-33 w-full sm:w-[60%] grid grid-cols-12 gap-4 relative">
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

          {/* <div className=" flex items-center justify-center py-10 my-15">
            <p className="text-[#ffffffaa] text-[10px] font-semibold font-body z-[999] tracking-widest">
              AS SEEN IN
            </p>
          </div> */}
        </div>
        <div
          className="absolute inset-0 isolate -z-10 lg:h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>

        <div className="absolute bottom-[-1px] left-0 -z-[1] h-[calc(50%+1px)] w-full bg-gradient-to-t from-[#0c0c0c]  to-[#0c0c0c]/40"></div>
        <div className="absolute top-[-1px] left-0 -z-[1] h-[calc(50%+1px)] w-full bg-gradient-to-b from-[#0c0c0c]/90 to-[#0c0c0c]/40"></div>
      </section>

      {/* section 2 */}
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-10 md:flex-row md:justify-between md:px-16 lg:pb-[120px] lg:pt-0 xl:px-20">
        {section1.map((i) => (
          <div
            key={i.key}
            className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5"
          >
            <img
              src={i.img}
              alt="Increase profits"
              className="w-[108px] h-[108px] object-cover"
            />
            <div className="space-y-2 md:max-w-[266px]">
              <p className="font-medium text-xl ">{i.title}</p>
              <p className="text-[#ffffff66] tracking-[0.3px]">
                {i.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
