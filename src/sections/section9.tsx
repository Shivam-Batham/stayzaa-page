import img12 from "@/assets/image12.png";


export default function Section9(){
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
    return (<section className=" text-white py-16   sm:w-[80%] max-md:px-4 m-auto">
        <div className=" mx-auto sm:text-center lg:text-start">
          <h6 className="uppercase text-[10px] tracking-[2px] font-body text-[#bdbdbd] font-medium">
            TESTIMONIALS
          </h6>
          <h2 className="text-[44px] md:text-5xl font-bold font-headline tracking-tight leading-tight my-4">
            Guests love Stayzaa
          </h2>
          <p className="font-body text-base text-[#bdbdbd] mt-4">
            But don't just take our word for it. Hear what they have to say for
            yourself.
          </p>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-auto mt-20 p-4 place-items-center  ">
          {section9.map((i, index) => (
            <div
              key={index}
              className=" max-w-[580px] space-y-6 text-center w-full overflow-hidden rounded-2xl
                 theme-light:border theme-light:border-default flex flex-col items-center gap-4"
            >
              {index % 2 === 0 ? (
                <>
                  {/* 1st, 3rd, ... : title -> description -> image */}
                  <p className="mt-2 text-4xl font-medium font-body">"{i.title}"</p>
                  <p className="font-body mt-2 text-white/70 max-w-[420px]">
                    {i.description}
                  </p>
                  <img src={i.img} alt={i.alt} />
                </>
              ) : (
                <>
                  {/* 2nd, 4th, ... : image -> title -> description */}
                  <img src={i.img} alt={i.alt} className=" order-3 sm:order-0" />
                  <p className="mt-2 text-4xl font-medium font-body">"{i.title}"</p>
                  <p className="font-body mt-2 text-white/70 max-w-[420px]">
                    {i.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>)
}