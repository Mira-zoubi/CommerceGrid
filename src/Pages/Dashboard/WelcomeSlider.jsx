import { useState, useEffect } from "react";
import WelcomeImg from "../../assets/WelcomeImg.png";
import WelcomeImg1 from "../../assets/WelcomeImg1.png";
import WelcomeImg2 from "../../assets/WelcomeImg2.png";
import WelcomeImg3 from "../../assets/WelcomeImg3.png";

function WelcomeSlider() {

  const [CurrentIndex, setCurrentIndex] = useState(0);

  const Slides = [
    { img: WelcomeImg },
    { img: WelcomeImg1 },
    { img: WelcomeImg2 },
    { img: WelcomeImg3 },
  ];

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, 2100);

    return () => clearInterval(autoPlay);
  }, [CurrentIndex]);


  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === Slides.length - 1 ? 0 : prev + 1
    );
  };
return (
  <div className="w-full mb-10">
    <div
      className="
        relative
        w-full
        h-[260px]
        rounded-3xl
        overflow-hidden
        bg-white/10 backdrop-blur-xl
        shadow-[0_20px_45px_rgba(0,0,0,0.12)]
       
      "
    >
      {Slides.map((slide, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${slide.img})` }}
          className={`
            absolute inset-0 bg-cover bg-center 
            transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            ${index === CurrentIndex
              ? "opacity-100 scale-100 blur-0 z-10"
              : "opacity-0 scale-105 blur-sm z-0"}
          `}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r 
                      from-black/50 via-black/20 to-transparent z-20" />

      <div className="absolute bottom-6 left-6 z-30 text-white max-w-md">
        <h2 className="text-2xl font-semibold">Welcome Back</h2>
        <p className="text-sm text-white/80 mt-1">
          Let’s build something great today
        </p>
      </div>
    </div>
  </div>
);

}

export default WelcomeSlider;
