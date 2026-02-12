"use client";
import { ReactNode, useMemo, useRef, useState } from "react";
import Button from "./Button";
import Image from "next/image";

export function FileInput({
  required,
  name,
  label,
  accept,
  defaultValue,
}: {
  required?: boolean;
  name: string;
  label: ReactNode;
  accept: string;
  defaultValue?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(defaultValue);
  return (
    <label className="flex flex-col">
      <span
        className={
          "mr-4" + required
            ? "after:content-['*'] after:text-red-700 after:ml-1"
            : ""
        }
      >
        {label}
      </span>

      <input
        onChange={(e) => {
          if (e.currentTarget.files && e.currentTarget.files.length > 0) {
            setPreview(URL.createObjectURL(e.currentTarget.files[0]));
          }
        }}
        ref={inputRef}
        type="file"
        accept={accept}
        name={name}
        required={!defaultValue}
        hidden
      />
      <div>
        <Button
          onClick={() => {
            inputRef.current?.click();
          }}
          type="button"
        >
          Escolher Arquivo
        </Button>
      </div>
      {preview && (
        <Image
          src={preview}
          width={512}
          height={512}
          alt="Preview"
          className="mt-2 h-40 object-contain border border-gray-200 rounded"
        />
      )}
    </label>
  );
}
