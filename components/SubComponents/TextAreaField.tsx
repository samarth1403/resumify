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
}: propTypes) => {
  return (
    <div className={`flex-start w-full flex-col gap-[5px] `}>
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
        className={`${className}`}
        rows={rows}
      />
      {error && (
        <span className="text-[0.85rem] text-red-700">{error.message}</span>
      )}
    </div>
  );
};

export default TextAreaField;
