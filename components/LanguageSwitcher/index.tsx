import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Button } from '@/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/ui/dropdown-menu'
import { Globe } from 'lucide-react'

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

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full p-2 bg-gray-100">
                    <Globe className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-lg p-3 bg-gray-100 space-y-2" align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => switchLanguage(lang.code)}
                        className="cursor-pointer"
                    >
                        {lang.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
} 