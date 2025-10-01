
import img9 from "@/assets/image9.png";
import img10 from "@/assets/image10.png";
import img11 from "@/assets/image11.png";

export default function Section8(){

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
    return (<section className=" text-white sm:py-16  sm:w-[80%] max-md:px-4 m-auto">
        <div className=" mx-auto text-center lg:text-center">
          <h6 className="uppercase text-[10px] tracking-[2px] font-body text-[#bdbdbd] font-medium">
            LAUNCHING WITH A BANG
          </h6>
          <h2 className="text-[44px] md:text-5xl font-bold my-2 font-headline tracking-tight leading-tight max-w-md px-18 md:px-8 m-auto">
            Property Marketing Launch
          </h2>
          <p className="font-body text-base text-[#bdbdbd] mt-4">
            Our launch and marketing strategy is to "overinvest" in <br />
            content telling the story of your home and to make it famous <br />
            with our growing network of travelers.
          </p>
        </div>
        <div className="font-body flex flex-wrap md:grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 sm:mt-20 p-4 max-md:justify-center">
          {section8.map((i) => (
            <div
              className={`w-full overflow-hidden rounded-2xl md:max-w-[300px] lg:max-w-[320px] theme-light:border theme-light:border-default max-md:!w-48 `}
            >
              <img src={i.img} alt={i.alt} />
              <p className="mt-2 text-center text-xl font-medium">{i.title}</p>
            </div>
          ))}
        </div>
      </section>
)
}