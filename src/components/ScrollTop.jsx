import { ArrowUp } from "lucide-react";

const ScrollTop = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollTop}
            className="fixed bottom-6 right-6 bg-yellow-300 border-[4px] border-black p-4 shadow-[6px_6px_0px_black] brutal-hover"
        >
            <ArrowUp size={28} />
        </button>
    );
};

export default ScrollTop;