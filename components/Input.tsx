import { ReactNode } from "react";

export function Input({
  type,
  required,
  name,
  label,
  placeholder = "",
  defaultValue,
}: {
  type?: string;
  required?: boolean;
  name: string;
  label: ReactNode;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <label className="flex flex-col">
      <span
        className={
          required ? "after:content-['*'] after:text-red-700 after:ml-1" : ""
        }
      >
        {label}
      </span>
      <input
        type={type}
        className="bg-white border-[#D5D7DA] rounded-[7px] border p-3 font-medium"
        name={name}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </label>
  );
}
