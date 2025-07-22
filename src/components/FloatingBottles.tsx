import { Droplets } from "lucide-react";

const FloatingBottles = () => {
  const bottles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    size: Math.random() * 20 + 30,
    left: Math.random() * 80 + 10,
    duration: Math.random() * 2 + 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bottles.map((bottle) => (
        <div
          key={bottle.id}
          className="absolute animate-float opacity-10"
          style={{
            left: `${bottle.left}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${bottle.delay}s`,
            animationDuration: `${bottle.duration}s`,
          }}
        >
          <Droplets
            className="text-primary"
            style={{
              width: `${bottle.size}px`,
              height: `${bottle.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingBottles;