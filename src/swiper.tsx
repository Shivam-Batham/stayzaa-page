// components/TestimonialSlider.jsx
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import house from "./assets/houseWander.jpg";
import "./swipper.css";

const testimonials = [
  {
    title: "Seamless experience",
    text: "I can’t begin to express how beautiful and seamless the Wander website is. My goodness! And I’ve always thought the app was miraculously beautiful alone!",
    user: "Ang",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "Relaxing stay",
    text: "Staying at Wander was one of the most relaxing trips I’ve had. The level of thoughtfulness was something I’ve never experienced before. It made for an amazing experience. I can’t wait to stay again!",
    user: "Midhun J. from San Francisco",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    title: "Another great stay",
    text: "This was my third time with Wander and it never disappoints. Everything was perfect, from booking to check-out.",
    user: "Jamie D.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    title: "Top-notch experience",
    text: "Wander takes remote work and leisure to the next level. Every detail was so well thought out.",
    user: "Chris P.",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    title: "Top-notch experience",
    text: "Wander takes remote work and leisure to the next level. Every detail was so well thought out.",
    user: "Chris P.",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    title: "Top-notch experience",
    text: "Wander takes remote work and leisure to the next level. Every detail was so well thought out.",
    user: "Chris P.",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    title: "Top-notch experience",
    text: "Wander takes remote work and leisure to the next level. Every detail was so well thought out.",
    user: "Chris P.",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    title: "Top-notch experience",
    text: "Wander takes remote work and leisure to the next level. Every detail was so well thought out.",
    user: "Chris P.",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    title: "Top-notch experience",
    text: "Wander takes remote work and leisure to the next level. Every detail was so well thought out.",
    user: "Chris P.",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    title: "Top-notch experience",
    text: "Wander takes remote work and leisure to the next level. Every detail was so well thought out.",
    user: "Chris P.",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  // Add more if needed
];

export default function TestimonialSlider({ reverse }: any) {
  const swiperRef: any = useRef(null);

  return (
    <div
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
      className="font-body w-full overflow-hidden py-2 bg-transparent"
    >
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          // Stop autoplay on hover
          swiper.el.addEventListener("mouseenter", () => {
            swiper.autoplay.stop();
          });

          // Resume autoplay on leave
          swiper.el.addEventListener("mouseleave", () => {
            swiper.autoplay.start();
          });
        }}
        slidesPerView="auto"
        spaceBetween={-160}
        loop={true}
        speed={25000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        allowTouchMove={false}
        className="relative testimonial-swiper !ease-linear"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div className=" gap-0 flex w-[calc(100%-180px)] cursor-pointer">
              <img src={house} className="h-[180px] w-[180px] rounded-l-lg" />
              <div className="bg-neutral-900 text-white rounded-l-none rounded-lg p-6 object-cover transition-transform  ease-in-out">
                <h3 className="text-lg font-semibold mb-3">
                  {testimonial.title}
                </h3>
                <p className="text-sm mb-4">{testimonial.text}</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.user}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">
                    {testimonial.user}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute top-0 h-full w-full bg-gradient-to-r z-50 from-[#0c0c0c] via-transparent to-[#0c0c0c] "></div>
      </Swiper>
    </div>
  );
}
