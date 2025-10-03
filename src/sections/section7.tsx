import img3 from "@/assets/image3.png";
import img4 from "@/assets/image4.png";
import img5 from "@/assets/image5.png";
import img6 from "@/assets/image6.png";
import img7 from "@/assets/image7.png";
import img8 from "@/assets/image8.png";

export default function Section7() {
  const section7 = [
    {
      img: img4,
      title: "BOOKING PLATFORM",
      description: "Wander Booking Platform",
      alt: "laptop",
    },
    {
      img: img5,
      title: "CONCIERGE 24/7",
      description: "Guest Communication",
      alt: "phone",
    },
    {
      img: img6,
      title: "MARKETING",
      description: "Dedicated marketing machine",
      alt: "dashboard",
    },
    {
      img: img7,
      title: "SOFTWARE",
      description: "WanderOS operating system",
      alt: "os",
    },
    {
      img: img3,
      title: "PRICING",
      description: "Intelligent pricing strategy",
      alt: "price",
    },
    {
      img: img8,
      title: "EXPENDITURE",
      description: "CapEx for standardization",
      alt: "expenditure",
    },
  ];
  return (
    <section className=" text-white md:py-16 px-5 max-w-[1440px] m-auto">
      <div className=" mx-auto space-y-4 md:max-w-[465px]">
        <h6 className="uppercase text-center text-[10px] tracking-[2px] text-[#bdbdbd] font-medium">
          INTRODUCING...
        </h6>
        <h2 className="font-headline text-[2.5rem] leading-[3rem] xl:leading-[3.75rem] tracking-[-0.075rem] text-balance mx-auto !block font-bold xl:text-[56px] text-center">
          Stayzaa Listed
        </h2>
        <p className="mt-6 text-base text-[#d9d9d9] text-center">
          You’ve done the hard part of creating your portfolio of <br />
          incredible properties. Let us help you outshine competitors <br />
          and take it to the next level with our new offering.
        </p>
      </div>
      <div className="flex max-w-screen-xl mt-20 flex-wrap justify-center !gap-6 md:mx-auto">
        {section7.map((i) => (
          <div className="w-full overflow-hidden rounded-2xl md:max-w-[300px] lg:max-w-[410px] theme-light:border theme-light:border-default">
            <img
              className="relative h-[258px] w-full"
              src={i.img}
              alt={i.alt}
            />
            <div className="h-full space-y-2 bg-[#ffffff40]/25 p-6">
              <p className="uppercase text-[10px] tracking-[2px] text-[#bdbdbd] font-medium">
                {i.title}
              </p>
              <p className="mt-2 text-start text-xl font-medium">
                {i.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
