import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiDark } from "react-icons/ci";
import { MdDarkMode, MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BiHourglass } from "react-icons/bi";
import { RiContactsBookLine } from "react-icons/ri";
import gsap, { Power0 } from "gsap";
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
  const menuIcons = [
    <AiOutlineHome />,
    <MdProductionQuantityLimits />,
    <AiOutlineInfoCircle />,
    <HiOutlineNewspaper />,
    <BiHourglass />,
    <RiContactsBookLine />,
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
  let handleCloseMenu = (dir: string) => {
    let tl = gsap.timeline();
    tl.to(document.querySelector(".menu"), {
      duration: 0.2,
      ease: Power0.easeInOut,
      display: "hidden",
      [dir]: "-100vw",
      stagger: 0.1,
    }).to(document.querySelector(".menu__overlay"), {
      duration: 0.3,
      ease: Power0.easeInOut,
      display: "hidden",
      [dir]: "-100vw",
    });
  };
  let handleOpenMenu = (dir: string) => {
    let tl = gsap.timeline();
    tl.to(document.querySelector(".menu__overlay"), {
      duration: 0.2,
      ease: Power0.easeInOut,
      display: "flex",
      [dir]: 0,
      stagger: 0.05,
    }).to(document.querySelector(".menu"), {
      duration: 0.2,
      ease: Power0.easeInOut,
      display: "flex",
      [dir]: 0,
    });
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
    handleCloseMenu,
    handleOpenMenu,
    menuIcons,
  };
}
