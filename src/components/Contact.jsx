const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24 bg-red-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title uppercase mb-10 text-white">
          Contact
        </h2>

        <form className="bg-white border-[5px] border-black p-8 shadow-[10px_10px_0px_black]">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="border-[4px] border-black p-4 font-bold text-lg outline-none"
            />

            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="border-[4px] border-black p-4 font-bold text-lg outline-none"
            />
          </div>

          <textarea
            rows="6"
            placeholder="YOUR MESSAGE"
            className="w-full border-[4px] border-black p-4 font-bold text-lg outline-none mb-6"
          />

          <button className="bg-black text-white px-8 py-4 border-[4px] border-black font-black text-lg uppercase brutal-hover">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;