// import Link from "link";
import { AiOutlinePhone, AiOutlineDoubleRight } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
const CallToActions = () => {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-light-blue-400 mt-8 py-8">
            <div className="container mx-auto  grid sm:md:flex justify-between  items-center px-16">
                <div data-aos="fade-right">
                    <p className="text-white text-3xl font-semibold font-sans">Have A Question?</p>
                </div>
                <div data-aos="fade-down" className="mt-2 flex gap-2 items-center text-white text-3xl font-sans">
                    <p><SiWhatsapp /></p>
                    <p>+880137468389</p>
                </div>
                <div data-aos="fade-left" className="mt-2">
                    <Link href='about'> <button className="hover:transition duration-500 ease-out hover:ease-in hover:scale-75 flex  gap-4 items-center text-white text-2xl border-4 border-white p-4 rounded"><p className="font-sans">Get In Touch</p><p><AiOutlineDoubleRight /></p></button></Link>
                </div>
            </div>
        </div>
    );
};

export default CallToActions;