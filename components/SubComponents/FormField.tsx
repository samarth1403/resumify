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
  error?: { message: string };
}

const FormField = ({
  label,
  type,
  name,
  value,
  setValue,
  placeholder,
  className,
  error,
}: propTypes) => {
  return (
    <div className="flex-start w-full flex-col gap-2 lg:gap-3">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        checked={type === "checkbox" ? (value as boolean) : undefined}
        value={type !== "checkbox" ? (value as string | number) : undefined}
        onChange={(e) =>
          setValue(
            name,
            type === "checkbox" ? e.target.checked : e.target.value
          )
        }
        placeholder={placeholder}
        className={`${className}`}
      />
      {error && (
        <span className="text-[0.85rem] text-red-700">{error.message}</span>
      )}
    </div>
  );
};

export default FormField;
