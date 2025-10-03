import img9 from "@/assets/image9.png";
import img10 from "@/assets/image10.png";
import img11 from "@/assets/image11.png";

export default function Section8() {
  const section8 = [
    {
      img: img9,
      title: "Tour video",
      alt: "phone",
    },
    {
      img: img10,
      title: "Travel guides",
      alt: "phone",
    },
    {
      img: img11,
      title: "Professional photos",
      alt: "phone",
    },
  ];
  return (
    <section className=" space-y-5 px-5 py-10 md:space-y-20 md:px-16 md:py-20 xl:px-20 max-w-[1440px] m-auto">
      <div className="mx-auto space-y-4 text-center md:max-w-[465px]">
        <h6 className="uppercase text-[10px] tracking-[2px] text-[#bdbdbd] font-medium">
          LAUNCHING WITH A BANG
        </h6>
        <h2 className="mx-auto font-headline font-bold text-[2.5rem] leading-[3rem] tracking-[-0.075rem] xl:tracking-[-0.125rem] xl:leading-[3.75rem] text-balance xl:text-[56px] !block md:px-14 lg:px-4">
          Property Marketing Launch
        </h2>

        <p className="mt-6 text-base text-[#d9d9d9]">
          Our launch and marketing strategy is to "overinvest" in <br />
          content telling the story of your home and to make it famous <br />
          with our growing network of travelers.
        </p>
      </div>
      <ul className="flex flex-wrap justify-center gap-20 mt-20">
        {section8.map((i, index) => (
          <li key={index} className="w-fit text-center">
            <div className="relative h-[375px] w-[182px] md:h-[461px] md:w-[224px] xl:h-[655px] xl:w-[318px]">
              <img
                src={i.img}
                alt={i.alt}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-2 text-base font-medium whitespace-nowrap">
              {i.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
