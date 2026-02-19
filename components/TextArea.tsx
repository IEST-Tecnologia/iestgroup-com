import { ReactNode } from "react";

export function Textarea({
  required,
  name,
  label,
  rows = 4,
}: {
  required?: boolean;
  name: string;
  label: ReactNode;
  rows?: number;
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
      <textarea
        className="bg-white border-[#D5D7DA] rounded-[7px] border p-3"
        name={name}
        rows={rows}
      />
    </label>
  );
}
