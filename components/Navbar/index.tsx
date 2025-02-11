import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
    SheetClose
} from "@/ui/sheet";
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link';
import { useState } from 'react';
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Button } from "@/ui/button";
import { Label } from "@/ui/label";
import { Input } from "@/ui/input";
import { Menu } from "lucide-react";

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
                            <Link href="#skills" className="text-gray-100 hover:text-[#87CEEB] transition-colors">
                                {tCommon("skills")}
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
                            className="fixed top-0 right-0 h-full w-[400px] bg-white border-[#87CEEB]"
                        >
                            <SheetHeader className="space-y-4">
                                <SheetTitle className="text-[#87CEEB] text-xl">
                                    {tCommon("switch language")}
                                </SheetTitle>
                                <SheetDescription className="text-gray-300">
                                    {tCommon("description test")}
                                </SheetDescription>
                            </SheetHeader>
                            <div className="py-6">
                                <LanguageSwitcher />
                            </div>
                            <SheetFooter className="absolute bottom-4 right-4">
                                <SheetClose asChild>
                                    <Button
                                        variant="outline"
                                        className="border-[#87CEEB] text-[#87CEEB] hover:bg-[#87CEEB] hover:text-white"
                                    >
                                        {tCommon("close")}
                                    </Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>

    );
};

export default Navbar;