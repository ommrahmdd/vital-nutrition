import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function NavVm() {
  const { i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState(0);
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
  let handleSelectChange = (value: string) => {
    if (i18n.language === "en") i18n.changeLanguage("ar");
    else i18n.changeLanguage("en");
  };
  let handleActiveLink = (index: number) => {
    setActiveLink(index);
  };
  return { options, activeLink, handleSelectChange, handleActiveLink };
}
