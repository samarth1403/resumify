import Image from "next/image";
import React from "react";

interface propTypes {
  label?: string;
  type: "text" | "email" | "password" | "checkbox" | "number";
  value: string | number | boolean | readonly string[];
  setValue: (
    key: string,
    value: string | number | boolean | readonly string[]
  ) => void;
  name: string;
  placeholder?: string;
  className?: string;
  divClassName?: string;
  error?: { message: string };
  isRequired?: boolean;
  iconPath?: string;
  iconFromTop?: string;
}

const FormField = ({
  label,
  type,
  name,
  value,
  setValue,
  placeholder,
  className,
  divClassName,
  error,
  isRequired,
  iconPath,
  iconFromTop,
}: propTypes) => {
  return (
    <div
      className={`flex-start w-full flex-col gap-[5px] ${divClassName} relative `}
    >
      {label && (
        <label htmlFor={name}>
          {label}
          {isRequired && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <input
        id={name}
        type={type}
        checked={type === "checkbox" ? (value as boolean) : undefined}
        value={type !== "checkbox" ? (value as string | number) : undefined}
        onChange={(e) => {
          setValue(
            name,
            type === "checkbox" ? e.target.checked : e.target.value
          );
        }}
        placeholder={placeholder}
        className={`${className} ${iconPath ? "pl-10" : ""} `}
      />
      {iconPath && (
        <Image
          src={iconPath}
          alt={""}
          width={25}
          height={25}
          className={`absolute left-2 ${iconFromTop || "top-1/2"} object-contain`}
        />
      )}
      {error && (
        <span className="text-[0.85rem] text-red-700">{error.message}</span>
      )}
    </div>
  );
};

export default FormField;
