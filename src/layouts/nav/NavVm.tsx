import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
export default function NavVm() {
  const { i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState<number>(0);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const options = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "ar",
      label: "العربية",
    },
  ];
  const themeOptions = [
    {
      value: "light",
      label: <CiDark className="flex items-center justify-center text-2xl" />,
    },
    {
      value: "dark",
      label: (
        <MdDarkMode className="flex items-center justify-center text-2xl text-slate-900" />
      ),
    },
  ];
  let handleSelectChange = (value: string) => {
    if (i18n.language === "en") i18n.changeLanguage("ar");
    else i18n.changeLanguage("en");
  };
  let handleActiveLink = (index: number) => {
    setActiveLink(index);
  };
  let handleScroll = () => {
    setScrollValue(window.scrollY);
  };
  let handleThemeChange = (value: string) => {
    localStorage.setItem("darkMode", value);
  };
  return {
    options,
    activeLink,
    handleSelectChange,
    handleActiveLink,
    scrollValue,
    handleScroll,
    themeOptions,
    handleThemeChange,
  };
}
