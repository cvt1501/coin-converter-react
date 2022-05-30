import { useState } from "react";
import { useStateContext } from "../hooks/useStateProvider";
import { Input } from "./Input";

export default function Form() {
  const [input, setInput] = useState("");
  const { addMarket, isLoading } = useStateContext();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        addMarket(input);
      }}
      id="home-form"
      className="z-50 md:py-10 py-8 md:px-12 px-8 w-full bg-white rounded-sm flex flex-col items-center order-2 md:mt-0 mt-8"
    >
      <Input
        input={{
          disabled: isLoading,
          value: input,
          onChange: (event) => setInput(event.target.value),
          placeholder: "BTC",
        }}
        label="CRYPTOCURRENCY CODE"
      />
      <button
        disabled={isLoading}
        className="bg-btn-action font-latoRegular text-white text-lg p-2 opacity-90 hover:opacity-100 w-full rounded-full"
      >
        {isLoading ? "Including..." : "Add"}
      </button>
      <p className="text-center text-sm font-latoLight text-label leading-5 md:mt-10 mt-5">
        Use of this service is subject to terms and <br />
        conditions.
      </p>
    </form>
  );
}
