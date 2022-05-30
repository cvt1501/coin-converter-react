import { FC } from "react";

interface InputProps {
  input: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label: string;
}

export const Input: FC<InputProps> = ({ input, label }) => {
  return (
    <div className="w-full p-3 mb-4 relative border border-label rounded-md">
      <label
        className="absolute -top-2 bg-white text-sm px-2 z-10 text-label"
        style={{ fontSize: 10 }}
      >
        {label}
      </label>
      <input className="placeholder:text-label outline-none" {...input} />
    </div>
  );
};
