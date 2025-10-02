import img1 from "@/assets/image1.png";
import img2 from "@/assets/image2.png";
import img3 from "@/assets/image3.png";

export default function Section5(){

    const section5 = [
    {
      img: img1,
      tag: "CONSOLIDATION",
      title: "We consolidate the top 1% of properties on one platform",
      desc: "The top 1% of vacation rentals generate 35% of revenue. With the best vacation rentals in one place, consumers only have one place to look.",
    },
    {
      img: img2,
      tag: "CONSOLIDATION",
      title: "We consolidate the top 1% of properties on one platform",
      desc: "The top 1% of vacation rentals generate 35% of revenue. With the best vacation rentals in one place, consumers only have one place to look.",
    },
    {
      img: img3,
      tag: "CONSOLIDATION",
      title: "We consolidate the top 1% of properties on one platform",
      desc: "The top 1% of vacation rentals generate 35% of revenue. With the best vacation rentals in one place, consumers only have one place to look.",
    },
  ];
    return (
        <section className="md:mt-30 lg:mt-5 text-white py-16 max-md:px-4  md:w-[80%] lg:px-20 m-auto">
        {/* Heading */}
        <div className=" sm:mx-auto  lg:text-left">
          <p className="uppercase text-[10px] tracking-[2px] text-[#bdbdbd] font-body font-medium">
            THE THESIS
          </p>
          <h2 className="text-[44px] md:text-5xl font-bold mt-2 font-headline tracking-tight leading-tight ">
            Why Stayzaa works
          </h2>
          <p className="text-lg text-[#cecece] mt-4 leading-tight font-body">
            Stayzaa has verticalized the traditionally fragmented components of
            the travel ecosystem into one unified experience.
          </p>
        </div>

        <div className="invisible sm:visible flex items-center md:p-12 mx-40 font-body">
          <span className="m-4 bg-[#ffffff40] flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold ">
            1
          </span>
          <div className="flex-grow border-t border-[#ffffff40]"></div>
          <span className="m-4 bg-[#ffffff40] flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
            2
          </span>
          <div className="flex-grow border-t border-[#ffffff40]"></div>
          <span className="m-4 bg-[#ffffff40] flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
            3
          </span>
        </div>
        {/* section 7 */}
        {/* cards */}
        <div className="flex lg:flex-row flex-col md:flex-col  lg:w-full md:m-auto md:max-w-[395px] lg:max-w-full   -mt-10 sm:mt-0 items-center gap-5 place-content-center">
          {section5.map((card, index) => (
            <div
              key={index}
              className="h-fit w-full max-w-[410px] md:max-w-full overflow-hidden rounded-2xl"
            >
              <img
                src={card.img}
                alt=""
                className="animate-fade-in duration-300 w-full h-56 md:h-64 object-cover"
              />
              <div className="bg-[#ffffff40]/25 min-h-[calc(100%-220px)] space-y-2 p-6">
                <h6 className=" whitespace-nowrap text-[10px] font-medium text-[#bdbdbd] uppercase tracking-[2px] font-body">
                  {card.tag}
                </h6>
                <h3 className="mt-0 text-start text-xl font-medium font-body">
                  {card.title}
                </h3>
                <p className="font-body text-[#cecece]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}