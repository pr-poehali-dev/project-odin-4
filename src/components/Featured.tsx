export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-black">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/mountain-landscape.jpg"
          alt="501-й Элитный штурмовой легион"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.5) hue-rotate(220deg) saturate(2)" }}
        />
        <div className="relative -mt-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        </div>
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-blue-400">
          501-й Элитный штурмовой легион
        </h3>
        <p className="text-2xl lg:text-4xl mb-8 text-white leading-tight">
          Под командованием Асоки Тано и Энакина Скайуокера — легион, вписавший своё имя в историю Войн Клонов. Джеонозис, Утапау, осада Мандалора — всё это ты.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-blue-400 text-lg mt-0.5">⚡</span>
            <p className="text-neutral-400 text-sm leading-relaxed">
              <span className="text-white font-medium">Глубокий ролевой отыгрыш</span> — команды /me, /do, /try, /roll для полного погружения в галактику
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-400 text-lg mt-0.5">🛡️</span>
            <p className="text-neutral-400 text-sm leading-relaxed">
              <span className="text-white font-medium">Фракции и батальоны</span> — выбери сторону: Республика, КНС или нейтральные организации
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-400 text-lg mt-0.5">🌌</span>
            <p className="text-neutral-400 text-sm leading-relaxed">
              <span className="text-white font-medium">Мультивселенная</span> — десятки уникальных локаций, ивентов и сюжетных арок
            </p>
          </div>
        </div>
        <button
          id="join"
          className="bg-blue-500 text-white border border-blue-500 px-6 py-3 text-sm transition-all duration-300 hover:bg-transparent hover:text-blue-400 cursor-pointer w-fit uppercase tracking-widest"
        >
          Вступить в ряды
        </button>
      </div>
    </div>
  );
}
