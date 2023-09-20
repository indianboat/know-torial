"use client";

import React from 'react';
import { PiDesktopFill } from "react-icons/pi";
import { PiMoonFill } from "react-icons/pi";
import { TbSunFilled } from "react-icons/tb";
import { useTheme } from 'next-themes';

const ThemeMode = () => {

  const { theme, setTheme } = useTheme("system");
  
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <>
      <div className={`rounded-full flex w-fit p-1`}>
        <button
          onClick={() => handleThemeChange('dark')}
          type="button"
          className={`${theme === 'dark' ? 'bg-slate-600 text-white' : ' text-gray-700'
            } p-2 rounded-full  focus:outline-none w-full flex justify-center`}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
          title='dark'
        >
          <PiMoonFill size={20} />
        </button>
        <button
          onClick={() => handleThemeChange('light')}
          type="button"
          className={`${theme === 'light' ? 'bg-slate-600 text-white' : ' text-gray-700'
            } p-2 rounded-full focus:outline-none w-full flex justify-center`}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
          title='light'
        >
          <TbSunFilled size={20} />
        </button>
      </div>
    </>
  )
}

export default ThemeMode