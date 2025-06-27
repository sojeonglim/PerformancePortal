import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-07-20T20:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const CountdownDigit = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-gradient-to-br from-friends-peru to-friends-brown rounded-xl p-4 text-white text-center min-w-[80px] md:min-w-[100px]">
      <div className="text-2xl sm:text-4xl font-bold">{value.toString().padStart(2, '0')}</div>
      <div className="text-sm uppercase tracking-wide">{label}</div>
    </div>
  );

  return (
    <section className="py-16 bg-friends-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold mb-8">Show Starts In</h2>
        
        <div className="flex justify-center space-x-4 sm:space-x-8 mb-8">
          <CountdownDigit value={timeLeft.days} label="Days" />
          <CountdownDigit value={timeLeft.hours} label="Hours" />
          <CountdownDigit value={timeLeft.minutes} label="Minutes" />
          <CountdownDigit value={timeLeft.seconds} label="Seconds" />
        </div>
        
        <p className="text-lg opacity-90">Don't miss out on this once-in-a-lifetime experience!</p>
      </div>
    </section>
  );
}
