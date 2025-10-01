import { CalendarRange, Moon, Smile, Users } from "lucide-react";
import globe2 from "@/assets/globe-2.svg";

export default function Section3(){

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
        <div className="relative sm:w-[80%] m-auto md:-mt-50 mt-10">
        <img
          src={globe2}
          alt="globe"
          className="w-full h-[400px] md:h-[600px] object-cover "
        />
        <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-[#000] h-full w-full"></div>
        <div className="absolute flex justify-between items-end h-full w-full  bottom-0 left-0 p-4 px-8">
          <div className=" w-full grid  grid-cols-2 sm:grid-cols-4 gap-8">
            {section3.map((item, index) => (
              <div key={index}>
                <span className="">{item.icon}</span>
                <p className="font-body mt-4 text-2xl font-medium">{item.value}</p>
                <p className="font-body text-white/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}