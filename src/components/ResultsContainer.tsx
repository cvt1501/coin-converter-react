import { useStateContext } from "../hooks/useStateProvider";
import Cypto from "./Crypto";

export default function ResultsContainer() {
  const { markets } = useStateContext();

  return (
    <div className="mt-20 pb-10 w-full" id="result-container">
      <ul className="w-full">
        {markets.map((market) => (
          <Cypto
            id={market.id}
            key={market.id}
            label={market.marketSymbol}
            price={market.ticker?.lastPrice as string}
          />
        ))}
      </ul>
    </div>
  );
}
