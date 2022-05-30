import ResultsContainer from "./ResultsContainer";

export default function HomeGettings() {
  return (
    <div className="h-full flex flex-col justify-between z-50 order-1">
      <h1 className="text-white text-5xl tracking-wide">
        Now you can track <br /> all your cryptos here!
      </h1>
      <p className="block mt-6 font-latoLight text-description text-2xl leading-8">
        Just enter <br /> cryptocurrency code on the <br /> form to the right.
      </p>
      <div className="md:block hidden">
        <ResultsContainer />
      </div>
    </div>
  );
}
