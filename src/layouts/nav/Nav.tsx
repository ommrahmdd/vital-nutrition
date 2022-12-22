import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Select } from "antd";
import Container from "../../components/UI/Container";
import useNav from "./NavVm";
import logoImg from "./../../assets/imgs/home/logo.png";
import "./nav.css";
export default function Nav() {
  const { t, i18n } = useTranslation();
  const { options, handleSelectChange, activeLink, handleActiveLink } =
    useNav();
  return (
    <div className="bg-white py-5 sticky top-0 left-0 w-full  z-50 shadow-xl">
      <Container>
        <nav className="flex items-center justify-between">
          {/*STYLE: Logo */}
          <div className="">
            <Link to="/">
              <img src={logoImg} alt="logo" className="w-28" />
            </Link>
          </div>
          <div className="flex items-center gap-y-2">
            {/*STYLE: Nav */}
            <ul className=" items-center gap-x-4 hidden lg:flex">
              {(
                t("nav", { returnObjects: true }) as Array<{
                  title: string;
                  to: string;
                }>
              ).map((item, index) => (
                <li
                  key={index}
                  className={`transition-all duration-300 ease-in-out hover:text-orangeColor ${
                    activeLink === index && "text-orangeColorLight"
                  }`}
                >
                  <Link to={item.to} onClick={() => handleActiveLink(index)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/*STYLE: Language */}
            <Select
              defaultValue={i18n.language}
              bordered={false}
              options={options}
              onChange={handleSelectChange}
              className={`w-32 text-center font-semibold ${
                i18n.language === "ar" ? "font-cairo" : ""
              }`}
            />
          </div>
        </nav>
      </Container>
    </div>
  );
}
