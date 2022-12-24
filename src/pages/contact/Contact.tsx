import React, { useLayoutEffect } from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import Container from "../../components/UI/Container";
import { useContact } from "./ContactVm";
import { useTranslation } from "react-i18next";
import "leaflet/dist/leaflet.css";
export default function Contact() {
  const { t } = useTranslation();
  const { initialValue, validate, mIcon } = useContact();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {/* Left */}
          <div className="">
            {/* Text */}
            <div className="flex flex-col items-start gap-y-8">
              <p className="text-greenColor font-semibold text-lg tracking-wider">
                {t("contactPage.location.contact")}
              </p>
              <h3 className="text-2xl font-bold text-greyColor lg:text-4xl lg:max-w-lg">
                {t("contactPage.location.title")}
              </h3>
              <p className="text-greyColorLight lg:max-w-lg">
                {t("contactPage.location.midTitle")}
              </p>
              {/* Location and email */}
              <div className="flex items-start flex-col gap-3 lg:flex-row">
                <div className="flex flex-col items-start gap-y-1 bg-greenColorLight bg-opacity-10 p-4 rounded-lg ">
                  <div className="inline-block bg-greenColorLight bg-opacity-20 p-3 rounded-xl ">
                    <HiLocationMarker className="text-greenColorLight text-2xl" />
                  </div>
                  <p className="max-w-xs text-greyColorLight">
                    {t("contactPage.location.location")}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-y-1 bg-greenColorLight bg-opacity-10 p-4 rounded-lg ">
                  <div className="inline-block bg-greenColorLight bg-opacity-20 p-3 rounded-xl ">
                    <MdEmail className="text-greenColorLight text-2xl" />
                  </div>
                  <p className="inline-block max-w-xs text-greyColorLight lg:text-sm lg:max-w-xs">
                    {t("contactPage.location.email")}
                  </p>
                </div>
              </div>
            </div>
            {/* Map */}
            <div className="w-full h-[15rem] overflow-hidden mt-3 z-10">
              <MapContainer
                center={[25.276987, 55.296249]}
                zoom={13}
                scrollWheelZoom={true}
                style={{
                  width: "100%",
                  height: "15rem",
                  zIndex: "5",
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[25.276987, 55.296249]} icon={mIcon}>
                  <Popup>{t("contactPage.location.location")}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          {/* Form */}
          <div className="bg-greyColorLighter p-7">
            <Formik
              initialValues={initialValue}
              validate={validate}
              onSubmit={() => {}}
            >
              <Form className="flex flex-col items-start gap-y-5">
                {/* fName */}
                <div className="w-full flex flex-col items-start gap-y-2">
                  <Field
                    type="text"
                    name="fName"
                    placeholder={t("contactPage.formFields.fName")}
                    className="py-2 px-5 w-full rounded-md outline-greenColor"
                  />
                  <div className="text-xs text-red-600 capitalize flex w-full justify-end">
                    <ErrorMessage name="fName" />
                  </div>
                </div>
                {/* lName */}
                <div className="w-full flex flex-col items-start gap-y-2">
                  <Field
                    type="text"
                    name="lName"
                    placeholder={t("contactPage.formFields.lName")}
                    className="py-2 px-5 w-full rounded-md outline-greenColor"
                  />
                  <div className="text-xs text-red-600 capitalize flex w-full justify-end">
                    <ErrorMessage name="lName" />
                  </div>
                </div>
                {/* Email */}
                <div className="w-full flex flex-col items-start gap-y-2">
                  <Field
                    type="email"
                    name="email"
                    placeholder={t("contactPage.formFields.email")}
                    className="py-2 px-5 w-full rounded-md outline-greenColor"
                  />
                  <div className="text-xs text-red-600 capitalize flex w-full justify-end">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                {/* phone */}
                <div className="w-full flex flex-col items-start gap-y-2">
                  <Field
                    type="phone"
                    name="phone"
                    placeholder={t("contactPage.formFields.phone")}
                    className="py-2 px-5 w-full rounded-md outline-greenColor"
                  />
                  <div className="text-xs text-red-600 capitalize flex w-full justify-end">
                    <ErrorMessage name="phone" />
                  </div>
                </div>
                {/* Message */}
                <div className="w-full flex flex-col items-start gap-y-2">
                  <Field
                    type="text"
                    as="textarea"
                    name="message"
                    placeholder={t("contactPage.formFields.message")}
                    className="py-2 px-5 w-full rounded-md outline-greenColor min-h-[10rem]"
                  />
                  <div className="text-xs text-red-600 capitalize flex w-full justify-end">
                    <ErrorMessage name="message" />
                  </div>
                </div>
                {/* STYLE: Submit */}
                <button
                  type="submit"
                  className="w-full py-3 bg-greenColor text-white rounded-lg transition-all ease-in-out  duration-300 hover:bg-greenColorLight"
                >
                  {t("contactPage.formFields.submit")}
                </button>
                {/* Policy */}
                <div className="text-greyColor">
                  <p>{t("contactPage.formFields.privacy")}</p>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </Container>
    </div>
  );
}
