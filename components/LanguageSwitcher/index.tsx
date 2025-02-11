import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Button } from '@/ui/button'
import { Globe, X } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetFooter,
    SheetClose
} from "@/ui/sheet"
import useTranslation from 'next-translate/useTranslation'

const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh-cn', label: '简体中文' },
    { code: 'zh-hk', label: '繁體中文' },
]

export function LanguageSwitcher() {
    const { t: tCommon } = useTranslation("common");
    const router = useRouter()
    const { pathname, asPath, query } = router

    const switchLanguage = (locale: string) => {
        localStorage.setItem('preferred language', locale)
        router.push({ pathname, query }, asPath, { locale })
    }

    useEffect(() => {
        const savedLanguage = localStorage.getItem('preferred language')
        if (savedLanguage && savedLanguage !== router.locale) {
            router.push({ pathname, query }, asPath, { locale: savedLanguage })
        }
    }, [])

    const currentLanguage = languages.find(lang => lang.code === router.locale)?.label || 'English'

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex justify-start w-full gap-2 px-4 py-2 rounded-lg border-[#87CEEB] text-[#87CEEB] hover:bg-gray-700"
                >
                    <Globe className="h-5 w-5" />
                    {currentLanguage}
                </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="bg-gray-900 w-[300px] h-[95vh] border-gray-800 fixed top-1/2 transform -translate-x-[5%] -translate-y-[50%] rounded-xl border-2 border-gray-800 [&>button]:hidden"
            >
                <div >
                    <SheetHeader className="relative border-b border-gray-600 pb-4">
                        <SheetTitle className="text-[#87CEEB] text-start text-md">{tCommon("change language")}</SheetTitle>
                        <SheetClose className="absolute right-0 -top-4">
                            <Button variant="ghost" size="icon" className="text-white px-2 py-2 hover:bg-gray-800 rounded-lg">
                                <X className="h-6 w-6" />
                            </Button>
                        </SheetClose>
                    </SheetHeader>
                    <div className="flex flex-col gap-2 py-4">
                        {languages.map((lang) => (
                            <Button
                                key={lang.code}
                                variant="ghost"
                                onClick={() => switchLanguage(lang.code)}
                                className={`justify-start text-gray-300 hover:text-gray-100 hover:bg-black ${router.locale === lang.code ? 'bg-black text-gray-100' : ''
                                    }`}
                            >
                                {lang.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}