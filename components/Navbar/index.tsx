import useTranslation from "next-translate/useTranslation";
import Link from 'next/link';
import { useState } from 'react';
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Button } from "@/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
    const { t: tCommon } = useTranslation("common");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="fixed top-0 left-0 right-0 bg-[#001432] z-40 px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <Link href="/" className="text-[#87CEEB] text-xl font-bold bg-gradient-to-r from-[#87CEEB] to-purple-300 text-transparent bg-clip-text">
                            {tCommon("Portfolio")}
                        </Link>

                        <div className="flex items-center space-x-6 bg-black px-2 py-1 rounded-full">
                            <Link href="#about" className="text-gray-100 hover:text-[#87CEEB] transition-colors">
                                {tCommon("about")}
                            </Link>
                            <Link href="#contact" className="text-gray-100 hover:text-[#87CEEB] transition-colors">
                                {tCommon("contact")}
                            </Link>
                        </div>
                    </div>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button className="text-gray-100 hover:text-[#87CEEB] transition-colors">
                                <Menu size={24} />
                            </button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-[350px] bg-[#001432] border-gray-800"
                        >
                            <LanguageSwitcher />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>

    );
};

export default Navbar;