import Image from "next/image";
import React from "react";

interface propTypes {
  label?: string;
  value: string;
  setValue: (key: string, value: string) => void;
  name: string;
  placeholder?: string;
  className?: string;
  error?: { message: string };
  isRequired?: boolean;
  rows: number;
  iconPath?: string;
}

const TextAreaField = ({
  label,
  name,
  value,
  setValue,
  placeholder,
  className,
  error,
  isRequired,
  rows,
  iconPath,
}: propTypes) => {
  return (
    <div className={`flex-start relative w-full flex-col gap-[5px] `}>
      {label && (
        <label htmlFor={name}>
          {label}
          {isRequired && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={name}
        value={value as string}
        onChange={(e) => {
          setValue(name, e.target.value);
        }}
        placeholder={placeholder}
        className={`${className} ${iconPath ? "pl-10" : ""} `}
        rows={rows}
      />
      {iconPath && (
        <Image
          src={iconPath}
          alt={""}
          width={25}
          height={25}
          className={`absolute left-2 top-3 object-contain`}
        />
      )}
      {error && (
        <span className="text-[0.85rem] text-red-700">{error.message}</span>
      )}
    </div>
  );
};

export default TextAreaField;
