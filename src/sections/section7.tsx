
import img3 from "@/assets/image3.png";
import img4 from "@/assets/image4.png";
import img5 from "@/assets/image5.png";
import img6 from "@/assets/image6.png";
import img7 from "@/assets/image7.png";
import img8 from "@/assets/image8.png";

export default function Section7(){

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
        
      <section className=" text-white py-16  sm:w-[80%] max-md:px-4 m-auto">
        <div className=" mx-auto text-center lg:text-center">
          <h6 className="uppercase text-[10px] tracking-[2px] font-body text-[#bdbdbd] font-medium">
            INTRODUCING...
          </h6>
          <h2 className="text-[44px] md:text-5xl font-bold my-2 font-headline tracking-tight leading-tight">
            Stayzaa Listed
          </h2>
          <p className="text-base text-[#bdbdbd] font-medium font-body tracking-tighter">
            You’ve done the hard part of creating your portfolio of <br />
            incredible properties. Let us help you outshine competitors <br />
            and take it to the next level with our new offering.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 sm:mt-20 font-body">
          {section7.map((i) => (
            <div className="w-full overflow-hidden rounded-2xl md:max-w-[300px] lg:max-w-[410px] theme-light:border theme-light:border-default">
              <img src={i.img} alt={i.alt} />
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
    )
}