import React, { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useRecoilState } from 'recoil';
import { themeState } from '../../store/atoms/theme';

interface ThemeToggleProps {

}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ }) => {
    const [theme, setTheme] = useRecoilState(themeState);

    useEffect(() => {
        if (localStorage.theme === "dark") {
            setTheme(true)
            return
        }
    }, [])
    
    useEffect(() => {
        theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
        theme ? localStorage.setItem("theme", 'dark') : localStorage.removeItem("theme")
    }, [theme])

    return (
        <>
            <div onClick={() => setTheme(!theme)} className={`w-14 mb-6 cursor-pointer h-7 flex pt-[3px] px-1 transition-colors duration-1000 border  rounded-3xl ${theme ? "border-primary-300" : "border-primary-700"}`}>
                <div className={`transition flex  duration-700 ${theme ? "translate-x-7" : "translate-x-0"}`}>
                <DarkModeSwitch
                    style={{ marginBottom: '2rem' }}
                    checked={theme}
                    onChange={setTheme}
                    size={20}
                    sunColor="#FF8300"
                    moonColor="#E7F2F8"
                    />
                    </div>
            </div>
        </>
    );
}
export default ThemeToggle