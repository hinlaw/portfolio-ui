import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/ui/sheet";
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const { t: tCommon } = useTranslation("common");
    const [isLanguageSheetOpen, setLanguageSheetOpen] = useState(false);

    return (
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

                <Sheet>
                    <SheetTrigger asChild>
                        <button className="text-gray-100 hover:text-[#87CEEB] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </SheetTrigger>

                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>{tCommon("switchLanguage")}</SheetTitle>
                            <SheetDescription>
                                {/* Add a description if needed */}
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <button onClick={() => setLanguageSheetOpen(true)}>
                                {tCommon("switchLanguage")}
                            </button>
                            {isLanguageSheetOpen && (
                                <Sheet>
                                    <SheetContent>
                                        {/* Language switcher component or logic here */}
                                        <button onClick={() => setLanguageSheetOpen(false)}>
                                            {tCommon("close")}
                                        </button>
                                    </SheetContent>
                                </Sheet>
                            )}
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <button type="button" onClick={() => setLanguageSheetOpen(false)}>
                                    {tCommon("close")}
                                </button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};

export default Navbar;