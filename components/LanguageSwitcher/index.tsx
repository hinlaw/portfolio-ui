import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Button } from '@/ui/button'
import { Globe } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetFooter,
    SheetClose
} from "@/ui/sheet"

const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh-cn', label: '简体中文' },
    { code: 'zh-hk', label: '繁體中文' },
]

export function LanguageSwitcher() {
    const router = useRouter()
    const { pathname, asPath, query } = router

    const switchLanguage = (locale: string) => {
        localStorage.setItem('preferredLanguage', locale)
        router.push({ pathname, query }, asPath, { locale })
    }

    useEffect(() => {
        const savedLanguage = localStorage.getItem('preferredLanguage')
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
            <SheetContent side="right" className="bg-gray-900 w-[300px] border-[#87CEEB]">
                <SheetHeader>
                    <SheetTitle className="text-[#87CEEB] text-center">Select Language</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 py-4">
                    {languages.map((lang) => (
                        <Button
                            key={lang.code}
                            variant="ghost"
                            onClick={() => switchLanguage(lang.code)}
                            className={`justify-start text-gray-100 hover:text-[#87CEEB] hover:bg-black ${router.locale === lang.code ? 'bg-black' : ''
                                }`}
                        >
                            {lang.label}
                        </Button>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}