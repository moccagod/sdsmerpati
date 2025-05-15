import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger saat 50% elemen terlihat
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = target / (duration / 30); // update tiap 30ms
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold">
      {count}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <AnimatedCounter target={55} />
          <p className="mt-2 text-xl font-semibold">Siswa Aktif</p>
        </div>
        <div>
          <AnimatedCounter target={6} />
          <p className="mt-2 text-xl font-semibold">Rombongan Belajar</p>
        </div>
        <div>
          <AnimatedCounter target={8} />
          <p className="mt-2 text-xl font-semibold">Guru dan Tendik</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
