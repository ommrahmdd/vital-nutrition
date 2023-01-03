import React, { useEffect, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from "../../components/UI/Container";
import { usePartners } from "./PartnersVm";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getAllPartners } from "../../services/partners";
import { Card, Placeholder } from "semantic-ui-react";

export default function Partners() {
  const { t } = useTranslation();
  const { partners, handleUpdatePartners, arrOfPlaceholders } = usePartners();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getAllPartners().then((snapShot) => {
      handleUpdatePartners([...snapShot, ...snapShot, ...snapShot]);
    });
  }, []);
  return (
    <div className="py-20 min-h-[90vh]">
      <Container>
        <div className="">
          {/* Text */}
          <div className="space-y-3">
            <p className="text-greenColor font-semibold tracking-wider">
              {t("partnersPage.smallTitle")}
            </p>
            <p className="text-2xl font-bold text-orangeColor lg:text-4xl lg:max-w-lg">
              {t("partnersPage.title")}
            </p>
          </div>
          {/* Grid */}
          {partners.length > 0 ? (
            <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {partners.map((img, index) => (
                <div
                  className="transition-all duration-200 ease-in-out hover:opacity-30"
                  key={index}
                >
                  <LazyLoadImage src={img.img} alt="partnerImg" effect="blur" />
                </div>
              ))}
            </div>
          ) : (
            <div className="my-10 w-full">
              <Card.Group itemsPerRow={4}>
                {arrOfPlaceholders.map((_, index) => (
                  <Card key={index}>
                    <Card.Content>
                      <Placeholder>
                        <Placeholder.Image rectangular />
                      </Placeholder>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
