const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vite",
  "Tailwind",
  "Node JS",
  "GitHub",
  "Figma",
  "Framer Motion",
  "Firebase",
  "MongoDB",
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-12 uppercase">Skills</h2>

        <div className="flex flex-wrap gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-8 py-5 bg-blue-500 text-white border-[4px] border-black shadow-[6px_6px_0px_black] font-black text-xl uppercase brutal-hover"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;