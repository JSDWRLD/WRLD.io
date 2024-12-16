import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      className="cta flex flex-col items-center justify-center p-10 text-center bg-[#1e1e1e] rounded-lg border border-gray-700 shadow-[0_0_15px_4px_rgba(255,255,255,0.1)]"
    >
      <p className="cta-text text-blue text-2xl font-semibold mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
        Want to chat? <br className="sm:block hidden" />
        Reach out to me by clicking Contact!
      </p>
      <Link
        to="/contact"
        className="btn px-6 py-3 bg-gray-800 text-white font-bold uppercase tracking-wide rounded-lg shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-transform hover:scale-105 hover:shadow-[0_0_18px_rgba(255,255,255,0.6)]"
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
