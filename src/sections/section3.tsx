import { CalendarRange, Moon, Smile, Users } from "lucide-react";
import globe2 from "@/assets/globe-2.svg";

export default function Section3() {

  const section3 = [
    { icon: <Moon />, value: "47,006", label: "total nights booked" },
    {
      icon: <CalendarRange />,
      value: "129 years",
      label: "of guest happiness",
    },
    { icon: <Smile />, value: "94%", label: "guest satisfaction rate" },
    { icon: <Users />, value: "610,653", label: "Wanderers and counting" },
  ];
  return (
    <div className="relative w-full md:-mt-50 lg:-mt-60 xl:-mt-72 2xl:-mt-80 h-[600px]  ">
      <img
        src={globe2}
        alt="globe"
        className="w-full h-[600px] object-cover "
      />
      <div className="absolute bottom-0 bg-gradient-to-b from-[#0a0b0b78] via-[#0404045f] to-[#000000] h-full w-full"></div>
      <div className="absolute bottom-8 w-full  mx-auto   ">
        <div className="  max-w-[1440px] mx-auto px-5 py-10 md:px-16 md:py-20  xl:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {section3.map((item, index) => (
              <div key={index} className="flex flex-col text-start  items-start space-y-2">
                <span className="text-white text-3xl">{item.icon}</span>
                <p className="font-body mt-2 text-2xl font-medium text-white">{item.value}</p>
                <p className="font-body text-white/80 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}