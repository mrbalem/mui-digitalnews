import React, { FC } from "react";
import PageHome from "./index";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Plantillas",
  component: PageHome,
};

export const LandingPage: FC = () => <PageHome />;
