import { ArrowRight } from "lucide-react";

import profile from "../assets/img/profil.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen px-6 py-20 flex items-center overflow-hidden relative bg-[#f5f1e8]">

      {/* BACKGROUND DECOR */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 border-[5px] border-black rotate-12 floating-shape"></div>

      <div className="absolute bottom-16 right-20 w-24 h-24 bg-blue-500 border-[5px] border-black -rotate-12 floating-shape delay-2"></div>

      <div className="absolute top-1/2 right-10 w-14 h-14 bg-yellow-300 border-[4px] border-black rounded-full floating-shape delay-3"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* TEXT */}
        <div>

          <p className="hero-badge text-lg font-black uppercase mb-4 bg-red-500 inline-block px-4 py-2 border-[4px] border-black">
            FRONTEND DEVELOPER
          </p>

          <h1 className="text-[5rem] md:text-[8rem] font-black leading-none uppercase">

            <span className="hero-title-line block overflow-hidden">
              <span className="hero-title-word inline-block">
                DAVIQ
              </span>
            </span>

            <span className="hero-title-line block overflow-hidden">
              <span className="hero-title-word inline-block">
                FAQIH
              </span>
            </span>

          </h1>

          <p className="hero-desc mt-8 text-xl max-w-xl font-medium border-l-[6px] border-black pl-4">
            Membangun website modern dengan gaya editorial,
            brutalism, dan interaksi yang berani untuk
            menciptakan tampilan yang unik, tegas,
            dan berbeda dari website biasa.
          </p>

          {/* BUTTON */}
          <div className="flex flex-wrap gap-5 mt-10">

            <button className="hero-btn px-8 py-4 bg-blue-500 text-white border-[4px] border-black font-black flex items-center gap-2 cursor-pointer">
              DOWNLOAD CV

              <span className="hero-arrow inline-block">
                <ArrowRight size={22} />
              </span>
            </button>

            <button className="hero-btn px-8 py-4 bg-white border-[4px] border-black font-black cursor-pointer">
              CONTACT ME
            </button>

          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-5 mt-8">

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/daviq faqih"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon bg-pink-500"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-7 h-7"
              />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/6289606821880"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon bg-green-500"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="w-7 h-7"
              />
            </a>

          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">

          <div className="hero-image-wrapper relative w-[320px] h-[420px] bg-yellow-300 border-[6px] border-black overflow-hidden">

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 hero-glow"></div>

            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover hero-image-img"
            />

            {/* LABEL */}
            <div className="absolute bottom-4 left-4 bg-white border-[4px] border-black px-4 py-2 font-black rotate-[-4deg]">
              AVAILABLE FOR WORK
            </div>

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

        @keyframes scaleRotateIn {
          from {
            opacity: 0;
            transform: scale(0.8) rotate(-8deg);
          }

          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
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

        @keyframes arrowBounce {
          0%,100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(8px);
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

        /* =========================
           TEXT
        ========================== */

        .hero-badge {
          animation: slideUpFade 0.7s ease 0.2s both;
        }

        .hero-title-word {
          animation: slideFromLeft 0.9s cubic-bezier(0.22,1,0.36,1) both;
        }

        .hero-title-line:nth-child(1) .hero-title-word {
          animation-delay: 0.35s;
        }

        .hero-title-line:nth-child(2) .hero-title-word {
          animation-delay: 0.55s;
        }

        .hero-desc {
          animation: slideUpFade 0.7s ease 0.8s both;
        }

        /* =========================
           BUTTON
        ========================== */

        .hero-btn {
          animation: slideUpFade 0.7s ease both;
          box-shadow: 8px 8px 0px black;
          transition: all 0.25s ease;
        }

        .hero-btn:hover {
          transform: translate(-4px,-4px);
          box-shadow: 16px 16px 0px black;
        }

        .hero-arrow {
          animation: arrowBounce 1.5s infinite ease-in-out;
        }

        /* =========================
           IMAGE
        ========================== */

        .hero-image-wrapper {
          animation: scaleRotateIn 1s cubic-bezier(0.22,1,0.36,1) 0.5s both;
          box-shadow: 14px 14px 0px black;
          transition: all 0.35s ease;
        }

        .hero-image-wrapper:hover {
          transform: scale(1.03) rotate(2deg);
          box-shadow: 24px 24px 0px black;
        }

        .hero-image-img {
          transition: transform 0.5s ease;
        }

        .hero-image-wrapper:hover .hero-image-img {
          transform: scale(1.08);
        }

        .hero-image-wrapper:hover .hero-glow {
          animation: glowMove 1.2s linear infinite;
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

          h1 {
            font-size: 4rem !important;
          }

          .hero-image-wrapper {
            width: 280px;
            height: 360px;
          }

        }

      `}</style>
    </section>
  );
};

export default Hero;