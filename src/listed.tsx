import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Section5 from "./sections/section5";
import Section6 from "./sections/section6";
import Section7 from "./sections/section7";
import Section8 from "./sections/section8";
import Section9 from "./sections/section9";
import Section10 from "./sections/section10";
import Section11 from "./sections/section11";

export default function Listed() {
  
  return (
    <div className="w-full pt-6 bg-[#0c0c0c] text-white pb-20 overflow-hidden">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      {/* min-[1640px]:max-w-[1640px] w-full  mx-auto p-7 lg:p-10 xl:p-20 py-8 space-y-8 */}
      
    </div>
  );
}
