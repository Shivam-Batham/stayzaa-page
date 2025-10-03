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
        <section className="max-w-[1440px] mx-auto px-5 py-10 md:px-16 md:py-20 xl:px-20">
        {/* Heading */}
        <div className="mb-12 space-y-4">
          <p className="uppercase text-[10px] tracking-[2px] text-[#bdbdbd] font-medium">
            THE THESIS
          </p>
          <h2 className="font-headline text-[2.5rem] leading-[3rem] tracking-[-0.075rem] xl:tracking-[-0.125rem] xl:leading-[3.75rem] text-balance md:mr-20 !block font-bold xl:text-[56px] text-start">
            Why Stayzaa works
          </h2>
          <p className="mt-6 text-base text-[#d9d9d9]">
            Stayzaa has verticalized the traditionally fragmented components of
            the travel ecosystem into one unified experience.
          </p>
        </div>

        <div className={`mx-auto my-0 hidden max-w-[calc(310px*3+24px*2)] items-center justify-center gap-x-4 lg:flex`}>
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
        <div className="mt-6 flex max-w-[calc(410px*3+24px*2)] flex-col items-center justify-center gap-6 md:gap-y-10 lg:mx-auto lg:flex-row lg:justify-start">
          {section5.map((card, index) => (
            <div
              key={index}
              className="bg-secondary-100 h-fit w-full max-w-[410px] grow overflow-hidden rounded-2xl bg-[#171717]"
            >
              <img
                src={card.img}
                alt=""
                className="relative h-[220px] w-full"
              />
              <div className="min-h-[calc(100%-220px)] space-y-2 p-6">
                <h6 className=" uppercase text-[10px] tracking-[2px] text-[#bdbdbd] font-medium">
                  {card.tag}
                </h6>
                <h3 className="mt-0 text-start text-xl font-medium">
                  {card.title}
                </h3>
                <p className="mt-2 text-base text-[#d9d9d9] tracking-[0.75px]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}