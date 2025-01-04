import { useTheme } from "next-themes"
import { Button } from "@/ui/button"
import useTranslation from "next-translate/useTranslation"
import { useEffect, useState } from 'react'
import { DarkModeSwitch } from "react-toggle-dark-mode"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const { t: tCommon } = useTranslation("common")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label={tCommon("toggleTheme")}
        >
            <DarkModeSwitch
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                size={24}
                moonColor="currentColor"
                sunColor="currentColor"
            />
        </Button>
    )
}
