import { ReactNode } from "react";

export function Input({
  required,
  name,
  label,
  placeholder = "",
}: {
  required?: boolean;
  name: string;
  label: ReactNode;
  placeholder?: string;
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
        className="bg-white border-[#D5D7DA] rounded-[7px] border p-3 font-medium"
        name={name}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
}
