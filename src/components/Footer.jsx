const Footer = () => {
    return (
        <footer className="bg-black text-white border-t-[5px] border-white px-6 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-5">
                <h2 className="text-3xl font-black uppercase">
                    DAFIQ PORTFOLIO
                </h2>

                <p className="font-bold uppercase text-sm">
                    Built with React + Vite + Brutalism UI
                </p>
            </div>
        </footer>
    );
};

export default Footer;