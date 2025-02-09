import useTranslation from "next-translate/useTranslation";
import Link from 'next/link';

const Navbar = () => {
    const { t: tCommon } = useTranslation("common");

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#001432] backdrop-blur-sm z-40 px-4 md:px-20 py-4">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-[#87CEEB] text-xl font-bold">
                    Portfolio
                </Link>

                <div className="flex items-center space-x-6">
                    <Link href="#about" className="text-gray-100 hover:text-[#87CEEB] transition-colors">
                        {tCommon("about")}
                    </Link>
                    <Link href="#skills" className="text-gray-100 hover:text-[#87CEEB] transition-colors">
                        {tCommon("skills")}
                    </Link>
                    <Link href="#contact" className="text-gray-100 hover:text-[#87CEEB] transition-colors">
                        {tCommon("contact")}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 