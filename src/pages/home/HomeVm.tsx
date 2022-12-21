import img01 from "./../../assets/imgs/products/01.png";
import img02 from "./../../assets/imgs/products/02.png";
import img03 from "./../../assets/imgs/products/03.png";
import img04 from "./../../assets/imgs/products/04.png";
import newsHeader from "./../../assets/imgs/home/newsHeader.png";
import newsUser from "./../../assets/imgs/home/newsUser.png";
import { useTranslation } from "react-i18next";
export default function HomeVm() {
  const { t } = useTranslation();
  const products = [
    {
      img: img01,
      title: "Loxymune junior",
      text: "Kids immunity",
    },
    {
      img: img02,
      title: "CURCOMLOX PLUS",
      text: "Advanced curcumin",
    },
    {
      img: img03,
      title: "CRANBELOX",
      text: "Urinary health",
    },
    {
      img: img04,
      title: "OMEGALOX 3",
      text: "Omega-3",
    },
    {
      img: img01,
      title: "Loxymune junior",
      text: "Kids immunity",
    },
    {
      img: img02,
      title: "CURCOMLOX PLUS",
      text: "Advanced curcumin",
    },
  ];
  const news = [
    {
      img: newsHeader,
      type: t("home.news.newsTypes", { returnObjects: true }),
      title: t("home.news.newsInfo.title"),
      text: t("home.news.newsInfo.text"),
      userName: t("home.news.newsInfo.userName"),
      userImg: newsUser,
      date: t("home.news.newsInfo.date"),
    },
    {
      img: newsHeader,
      type: t("home.news.newsTypes", { returnObjects: true }),
      title: t("home.news.newsInfo.title"),
      text: t("home.news.newsInfo.text"),
      userName: t("home.news.newsInfo.userName"),
      userImg: newsUser,
      date: t("home.news.newsInfo.date"),
    },
    {
      img: newsHeader,
      type: t("home.news.newsTypes", { returnObjects: true }),
      title: t("home.news.newsInfo.title"),
      text: t("home.news.newsInfo.text"),
      userName: t("home.news.newsInfo.userName"),
      userImg: newsUser,
      date: t("home.news.newsInfo.date"),
    },
  ];
  return {
    products,
    news,
  };
}
