import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from "../../components/UI/Container";
import { usePartners } from "./PartnersVm";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Partners() {
  const { t } = useTranslation();
  const { arrOfImgs } = usePartners();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-20">
      <Container>
        <div className="">
          {/* Text */}
          <div className="space-y-3">
            <p className="text-greenColor font-semibold tracking-wider">
              {t("partnersPage.smallTitle")}
            </p>
            <h3 className="text-2xl font-bold text-orangeColor lg:text-4xl lg:max-w-lg">
              {t("partnersPage.title")}
            </h3>
          </div>
          {/* Grid */}
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[...arrOfImgs, ...arrOfImgs, ...arrOfImgs, ...arrOfImgs].map(
              (img, index) => (
                <div
                  className="transition-all duration-200 ease-in-out hover:opacity-30"
                  key={index}
                >
                  <LazyLoadImage src={img} alt="partnerImg" effect="blur" />
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
