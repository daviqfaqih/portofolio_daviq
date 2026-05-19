const About = () => {
    return (
        <section
            id="about"
            className="px-6 py-24 bg-[#f5f1e8] overflow-hidden relative"
        >
            {/* BACKGROUND DECOR */}
            <div className="absolute top-10 right-10 w-28 h-28 bg-blue-500 border-[5px] border-black rotate-12 floating-shape"></div>

            <div className="absolute bottom-10 left-10 w-20 h-20 bg-yellow-300 border-[5px] border-black -rotate-12 floating-shape delay-2"></div>

            <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-red-500 border-[4px] border-black rounded-full floating-shape delay-3"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* TITLE */}
                <div className="overflow-hidden mb-10">
                    <h2 className="section-title about-title uppercase inline-block">
                        About Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT CONTENT */}
                    <div className="bg-white brutal-box p-8 about-card relative overflow-hidden">

                        {/* GLOW */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 about-glow"></div>

                        <p className="text-xl font-medium leading-relaxed relative z-10">
                            Saya adalah frontend developer yang fokus membangun
                            interface modern dengan gaya editorial dan neo brutalism.
                            Menyukai layout eksperimental, typography besar,
                            dan interaksi yang terasa raw namun tetap usable.
                        </p>
                    </div>

                    {/* SKILLS */}
                    <div className="grid grid-cols-2 gap-5">
                        {[
                            "React",
                            "Tailwind",
                            "JavaScript",
                            "Framer Motion",
                            "Figma",
                            "Vite",
                        ].map((item, index) => (
                            <div
                                key={item}
                                className="skill-box bg-red-500 text-white border-[4px] border-black p-6 text-center font-black text-xl uppercase"
                                style={{
                                    animationDelay: `${0.2 * index}s`,
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        /* =========================
           ANIMATIONS
        ========================== */

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatMove {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes glowMove {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes textGlow {
          0% {
            text-shadow: 0px 0px 0px transparent;
          }
          50% {
            text-shadow: 6px 6px 0px rgba(0,0,0,0.15);
          }
          100% {
            text-shadow: 0px 0px 0px transparent;
          }
        }

        /* =========================
           TITLE
        ========================== */

        .about-title {
          font-size: 4rem;
          font-weight: 900;
          animation: slideFromLeft 0.9s cubic-bezier(0.22,1,0.36,1) both;
        }

        .about-title:hover {
          animation: textGlow 0.8s ease;
        }

        /* =========================
           ABOUT CARD
        ========================== */

        .about-card {
          animation: slideUpFade 0.8s ease 0.3s both;
          border: 5px solid black;
          box-shadow: 14px 14px 0px black;
          transition: all 0.35s ease;
        }

        .about-card:hover {
          transform: translate(-6px,-6px) rotate(-1deg);
          box-shadow: 22px 22px 0px black;
        }

        .about-card:hover .about-glow {
          animation: glowMove 1.2s linear infinite;
        }

        /* =========================
           SKILL BOX
        ========================== */

        .skill-box {
          animation: slideUpFade 0.7s ease both;
          box-shadow: 8px 8px 0px black;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .skill-box:hover {
          transform: translate(-5px,-5px) rotate(-2deg) scale(1.03);
          box-shadow: 16px 16px 0px black;
        }

        .skill-box:active {
          transform: translate(0px,0px);
          box-shadow: 4px 4px 0px black;
        }

        /* =========================
           FLOATING SHAPES
        ========================== */

        .floating-shape {
          animation: floatMove 5s ease-in-out infinite;
        }

        .delay-2 {
          animation-delay: 1s;
        }

        .delay-3 {
          animation-delay: 2s;
        }

        /* =========================
           RESPONSIVE
        ========================== */

        @media (max-width: 768px) {
          .about-title {
            font-size: 3rem;
          }

          .skill-box {
            font-size: 1rem;
            padding: 1rem;
          }
        }

        /* =========================
           REDUCE MOTION
        ========================== */

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
        </section>
    );
};

export default About;