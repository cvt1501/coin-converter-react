import React, { FC } from "react";
import Form from "../components/Form";
import HomeGettings from "../components/HomeGettings";
import ResultsContainer from "../components/ResultsContainer";

export const Home: FC<any> = () => {
  return (
    <section
      id="home-container"
      className="overflow-hidden font-latoRegular w-screen bg-default max-w-full"
    >
      <div className="container px-6 m-auto relative h-full">
        <div className="flex items-baseline justify-between md:flex-row flex-col">
          <HomeGettings />
          <div className="md:hidden block order-3 w-full">
            <ResultsContainer />
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};
