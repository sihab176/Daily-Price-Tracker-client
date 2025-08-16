import React, { useEffect, useState, useMemo } from "react";
import BgImage from "../../assets/time-2.jpg";
import { Link } from "react-router";

const LimitedOffer = () => {
  // ✅ Create target date only once
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 4);
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    // <section
    //   style={{ backgroundImage: `url(${BgImage})` }}
    //   className="w-full h-[300px] bg-no-repeat bg-cover bg-center bg-fixed "
    // >
    //     <h1 className="text-2xl text-center">We offer a hot deal offer every festival</h1>
    //  <div className="flex items-center justify-center">
    //      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        
    //     <div className="flex flex-col p-2 bg-[#006d77] rounded-box text-neutral-content">
    //       <span className="countdown font-mono text-5xl">
    //         <span style={{ "--value": timeLeft.days }}>{timeLeft.days}</span>
    //       </span>
    //       days
    //     </div>
    //     <div className="flex flex-col p-2 bg-[#006d77] rounded-box text-neutral-content">
    //       <span className="countdown font-mono text-5xl">
    //         <span style={{ "--value": timeLeft.hours }}>{timeLeft.hours}</span>
    //       </span>
    //       hours
    //     </div>
    //     <div className="flex flex-col p-2 bg-[#006d77] rounded-box text-neutral-content">
    //       <span className="countdown font-mono text-5xl">
    //         <span style={{ "--value": timeLeft.minutes }}>{timeLeft.minutes}</span>
    //       </span>
    //       min
    //     </div>
    //     <div className="flex flex-col p-2 bg-[#006d77] rounded-box text-neutral-content">
    //       <span className="countdown font-mono text-5xl">
    //         <span style={{ "--value": timeLeft.seconds }}>{timeLeft.seconds}</span>
    //       </span>
    //       sec
    //     </div>
    //   </div>
    //  </div>
    //  <button className="btn bg-teal-500">Buy Now</button>
    // </section>
    <section
  style={{ backgroundImage: `url(${BgImage})` }}
  className="w-full h-[300px] bg-no-repeat bg-cover bg-center bg-fixed flex flex-col items-center justify-center text-center space-y-4"
>
  <h1 className="text-2xl font-bold  drop-shadow-lg">
    We offer a hot deal offer every festival
  </h1>

  {/* Countdown */}
  <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div className="flex flex-col p-2 bg-[#006d77] rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": timeLeft.days }}>{timeLeft.days}</span>
      </span>
      days
    </div>
    <div className="flex flex-col p-2 bg-[#006d77] rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": timeLeft.hours }}>{timeLeft.hours}</span>
      </span>
      hours
    </div>
    <div className="flex flex-col p-2 bg-[#006d77] rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": timeLeft.minutes }}>{timeLeft.minutes}</span>
      </span>
      min
    </div>
    <div className="flex flex-col p-2 bg-[#006d77] rounded-box text-neutral-content">
      <span className="countdown font-mono text-5xl">
        <span style={{ "--value": timeLeft.seconds }}>{timeLeft.seconds}</span>
      </span>
      sec
    </div>
  </div>

  {/* Button */}
 <Link to="/allProduct">
  <button className="btn bg-teal-500 text-white mt-4 px-6 py-2 rounded-lg shadow-md hover:bg-teal-600">
    Buy Now
  </button>
 </Link>
</section>

  );
};

export default LimitedOffer;
