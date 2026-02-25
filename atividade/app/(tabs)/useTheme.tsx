import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface ColorScheme {
    bgPrimary: string;
    bgSecondary: string;
    success: string;
    danger: string;
    warning: string;
    text: string;
    gradients: {
        background: [string, string];
    }
    statusTheme: "light-content" | "dark-content";
}

const lightColors: ColorScheme = {
    bgPrimary: "#fff",
    bgSecondary: "#cfcece",
    success: "#88e12f",
    danger: "#e73232" ,
    warning: "#ecc44a",
    text: "#262626" ,
    gradients: {
        background: ["#e7e7e7", "#b2b2b2"],
    },
    statusTheme: "light-content" as const,
}

const darkColors: ColorScheme = {
    bgPrimary: "#2b2a2a",
    bgSecondary: "#090909",
    success: "#88e12f",
    danger: "#e73232" ,
    warning: "#ecc44a",
    text: "#eaeaea" ,
    gradients: {
        background: ["#3a3939", "#232222"],
    },
    statusTheme: "dark-content" as const,
}

// null check - verificicar o tipo do contexto
// void - nada
interface ThemeContextType {
    isDarkMode : boolean;
    toggleDarkMode : () => void;
    colors : ColorScheme;
}

const ThemeContext = createContext<undefined | ThemeContextType>(undefined)

// themeProvider - altera o esquemas de cores
export const ThemeProvider = ({ children } : { children: ReactNode }) =>{
    // salva as variaveis
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    useEffect(() => {
        // coleta o que o usuario vai escolher e salvar na memoria
         AsyncStorage.getItem("darkMode").then((value) => {
            if(value) setIsDarkMode(JSON.parse(value));
         });
    }, []);

     // troca o tema
    const toggleDarkMode = async () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode)
        await AsyncStorage.setItem("darkMode", JSON.stringify(newMode))
    };

    const colors = isDarkMode ? darkColors : lightColors;

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode, colors}} >
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("DEU PAU")
    }

    return context;
}


export default useTheme;
