import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes';

type ThemeContextType = {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: undefined,
    setTheme: () => null,
    mounted: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useNextTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeContext.Provider value={{ mounted, theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </NextThemeProvider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};