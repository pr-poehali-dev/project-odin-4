import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Nova Galactic Universe"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.4) hue-rotate(200deg) saturate(1.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-black/60" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-blue-400 uppercase tracking-[0.4em] text-sm mb-4 font-medium">
          GTA RolePlay · Star Wars Universe
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          NOVA
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            GALACTIC
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed mb-10">
          Мультивселенная ролевая игра во вселенной Звёздных Войн. Стань клоном-солдатом, сепаратистом или джедаем — галактика ждёт тебя.
        </p>
        <a
          href="#join"
          className="inline-block border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 uppercase tracking-widest text-sm px-8 py-3"
        >
          Вступить в ряды
        </a>
      </div>
    </div>
  );
}
