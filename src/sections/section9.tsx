import img12 from "@/assets/image12.png";

export default function Section9() {
  const section9 = [
    {
      img: img12,
      title: "Stayzaa is just so luxe...",
      description:
        "Britni and Daniel from Brookly are repeat Stayzaa guests who have booked several stays in just a handful of months. After taking their first trip to Stayzaa Cave Creek for Britni's birthday over the summer, they planned two additional getaways to Stayzaa Hudson Valley – just outside of New York City.",
      alt: "Stayzaa is just so luxe...",
    },
    {
      img: img12,
      title: "Stayzaa is just so luxe...",
      description:
        "Britni and Daniel from Brookly are repeat Stayzaa guests who have booked several stays in just a handful of months. After taking their first trip to Stayzaa Cave Creek for Britni's birthday over the summer, they planned two additional getaways to Stayzaa Hudson Valley – just outside of New York City.",
      alt: "Stayzaa is just so luxe...",
    },
  ];
  return (
    <section className=" text-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-16 lg:px-20">
        <div className="mb-12 space-y-4">
          <h6 className="uppercase text-[10px] tracking-[2px] text-[#bdbdbd] font-medium">
            TESTIMONIALS
          </h6>
          <h2 className="font-headline text-[2.5rem] leading-[3rem] tracking-[-0.075rem] xl:tracking-[-0.125rem] xl:leading-[3.75rem] text-balance !block font-bold xl:text-[56px] text-start">
            Guests love Stayzaa
          </h2>
          <p className="mt-6 text-base text-[#d9d9d9]">
            But don't just take our word for it. Hear what they have to say for
            yourself.
          </p>
        </div>
      </div>

      <div className="mx-auto my-0 flex w-full max-w-[1440px] flex-col items-center gap-y-10 lg:flex-row">
        {section9.map((i, index) => (
          <div
            key={index}
            className="my-10 box-border flex w-full flex-1 flex-col items-center justify-center gap-10 px-5 md:px-16 lg:max-w-[50vw] lg:px-20 "
          >
            {/* Image */}
            <img
              className={`
          relative flex h-[200px] w-[calc(100vw-30px)] max-w-[350px] items-center justify-center 
          md:h-[300px] md:max-w-[500px] min-[1500px]:h-[360px] min-[1500px]:max-w-[600px]
          order-3 ${index % 2 !== 0 ? "lg:order-1" : ""}
        `}
              src={i.img}
              alt={i.alt}
            />

            {/* Text */}
            <div
              className={`max-w-[457px] flex flex-col text-center ${
                index % 2 !== 0 ? "lg:order-2" : ""
              }`}
            >
              <p className="text-4xl font-medium order-1">"{i.title}"</p>
              <p className="mt-6 text-base text-[#d9d9d9] order-2">
                {i.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
