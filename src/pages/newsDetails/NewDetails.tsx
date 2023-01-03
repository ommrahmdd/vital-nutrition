import { Breadcrumb } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { ImNewspaper } from "react-icons/im";
import Container from "../../components/UI/Container";
import { getNewById } from "../../services/news";
// Css
import "./newDetails.css";
import { useTranslation } from "react-i18next";
import useNewDetails from "./NewDetailsVm";
import { INew } from "../../models/INew";
import { Placeholder } from "semantic-ui-react";

export default function NewDetails() {
  let { id } = useParams();
  const { i18n } = useTranslation();
  const { _new, handleUpdateNew } = useNewDetails();
  useEffect(() => {
    window.scrollTo(0, 0);
    getNewById(id!).then((data: INew | any) => {
      setTimeout(() => {
        handleUpdateNew(data);
      }, 5000);
    });
  }, []);
  return (
    <div>
      <Container>
        {/* Breadcurmb */}
        <div className="my-10">
          <Breadcrumb className="text-xl text-orangeColor">
            <Breadcrumb.Item href="/">
              <AiFillHome />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/news">
              <ImNewspaper />
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* Details */}
        {_new ? (
          <div className="w-full ">
            {i18n.language === "en" ? (
              <div className="space-y-5">
                <p className="capitalize text-greenColor text-lg">
                  {_new?.en.type}
                </p>
                <p className="text-2xl font-semibold md:text-3xl lg:text-4xl lg:max-w-3xl">
                  {_new?.en.title}
                </p>
                <p className="text-lg text-greyColorLight font-medium md:text-2xl lg:max-w-5xl">
                  {_new?.en.midTitle}
                </p>
                <img src={_new.img} alt="New" />
                <p className="text-lg leading-9 text-greyColor md:text-xl md:max-w-2xl lg:text-2xl lg:max-w-3xl lg:leading-9">
                  {_new.en.details}
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <p className="capitalize text-greenColor text-lg">
                  {_new?.ar.type}
                </p>
                <p className="text-2xl font-semibold md:text-3xl lg:text-4xl lg:max-w-3xl">
                  {_new?.ar.title}
                </p>
                <p className="text-lg text-greyColorLight font-medium md:text-2xl lg:max-w-5xl">
                  {_new?.ar.midTitle}
                </p>
                <img src={_new.img} alt="New" />
                <p className="text-lg leading-9 text-greyColor md:text-xl md:max-w-2xl lg:text-2xl lg:max-w-3xl lg:leading-9">
                  {_new.ar.details}
                </p>
              </div>
            )}
          </div>
        ) : (
          <Placeholder fluid>
            <Placeholder.Line length="very short" />
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Image square />
            <Placeholder.Line length="full" />
            <Placeholder.Line length="full" />
            <Placeholder.Line length="full" />
            <Placeholder.Line length="full" />
            <Placeholder.Line length="full" />
            <Placeholder.Line length="full" />
            <Placeholder.Line length="full" />
            <Placeholder.Line length="full" />
          </Placeholder>
        )}
      </Container>
    </div>
  );
}
