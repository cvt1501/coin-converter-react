import { useStateContext } from "../hooks/useStateProvider";
import { TrophyIcon } from "../icons/Trophy";

interface CyptoProps {
  price: string;
  label: string;
  id: string;
}

export default function Cypto({ price, label, id }: CyptoProps) {
  const { removeMarket } = useStateContext();

  return (
    <li className="flex items-center justify-between py-5 border-b border-label pr-6">
      <div className="flex items-center">
        <TrophyIcon />
        <div className="flex flex-col ml-10">
          <h5 className="font-latoBold text-white text-xl">
            {label.includes(":") ? label.split(":").pop() : label}
          </h5>
          <label className="block mt-2 text-label font-latoLight">
            {Number(price).toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
            })}
          </label>
        </div>
      </div>
      <button
        onClick={() => removeMarket(id)}
        className="text-label font-latoRegular text-xl outline-none"
      >
        x
      </button>
    </li>
  );
}
