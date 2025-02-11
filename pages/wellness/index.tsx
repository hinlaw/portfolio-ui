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
import { Button } from "@/ui/button";
import useTranslation from "next-translate/useTranslation";
import { useState } from 'react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Navbar from "@/components/Navbar";

const Wellness = () => {
    const { t: tCommon } = useTranslation("common");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <h1>Wellness</h1>
            <div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline">Open Sheet</Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-full bg-black border-[#87CEEB] z-50"
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
                <div className="z-40">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Wellness;