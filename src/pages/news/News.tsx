import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../../components/pageHeader/PageHeader";
import Container from "../../components/UI/Container";
import { getNews } from "../../services/news";
import { useNews } from "./NewsVm";
import type { INew } from "../../models/INew";
import { CardNewAr, CardNewEn } from "../../components/cardNew/CardNew";
import { Grid, Placeholder, Segment } from "semantic-ui-react";

export default function News() {
  const { t, i18n } = useTranslation();
  const { news, handleUpdateNews, placeholderArr } = useNews();

  useEffect(() => {
    getNews().then((data: INew[] | any) => {
      setTimeout(() => {
        handleUpdateNews(data);
      }, 5000);
    });
  }, []);
  return (
    <div>
      {/* Header */}
      <PageHeader txt={t("newsPage.title")} />
      <Container>
        <div className="">
          {/*TODO: Types of news */}
          {/* ---------------------------- */}
          {/* News */}
          <div className="">
            {/* Check if data is exist or not */}
            {news.length > 0 ? (
              <div className="grid gap-x-5 gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {news.map((_new, index) => (
                  <div
                    className={`overflow-hidden ${
                      index === 0 && "lg:col-span-3 "
                    }md:h-[15rem] lg:h-auto`}
                    key={_new._id}
                  >
                    {i18n.language === "en" ? (
                      <CardNewEn _new={_new} index={index} />
                    ) : (
                      <CardNewAr _new={_new} index={index} />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="">
                <Placeholder className="w-full mb-10">
                  <Segment raised size="massive">
                    <Placeholder>
                      <Placeholder.Header image>
                        <Placeholder.Line length="short" />
                        <Placeholder.Line length="full" />
                        <Placeholder.Line length="long" />
                      </Placeholder.Header>
                    </Placeholder>
                  </Segment>
                </Placeholder>
                <Grid columns={3} stackable>
                  {placeholderArr.map((_, index) => (
                    <Grid.Column key={index}>
                      <Segment raised size="big">
                        <Placeholder>
                          <Placeholder.Image rectangular />
                          <Placeholder.Paragraph>
                            <Placeholder.Line length="medium" />
                            <Placeholder.Line length="medium" />
                            <Placeholder.Line length="medium" />
                            <Placeholder.Line length="short" />
                            <Placeholder.Line length="short" />
                            <Placeholder.Line length="short" />
                          </Placeholder.Paragraph>
                        </Placeholder>
                      </Segment>
                    </Grid.Column>
                  ))}
                </Grid>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
