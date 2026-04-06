"use client";

type RadioOption = {
  label: string;
  value: string;
};

type RadioGroupProps =
  | {
      multiple?: false;
      name: string;
      legend: string;
      options: RadioOption[];
      value?: string;
      direction: "horizontal" | "vertical";
      onChange?: (value: string) => void;
      error?: string;
      className?: string;
    }
  | {
      multiple: true;
      name: string;
      legend: string;
      options: RadioOption[];
      value?: string[];
      direction: "horizontal" | "vertical";
      onChange?: (value: string[]) => void;
      error?: string;
      className?: string;
    };

export default function RadioGroup({
  name,
  legend,
  options,
  value,
  direction,
  onChange,
  error,
  multiple = false,
  className = "",
}: RadioGroupProps & { multiple?: boolean }) {
  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    const current = (value as string[]) ?? [];
    const next = checked
      ? [...current, optionValue]
      : current.filter((v) => v !== optionValue);
    (onChange as (v: string[]) => void)?.(next);
  };

  return (
    <fieldset className={className}>
      <legend className="text-sm font-medium text-gray-700 mb-2">
        {legend}
      </legend>
      <div
        className={`flex ${direction == "vertical" ? "flex-col" : "flex-row"} gap-4`}
      >
        {options.map((option) =>
          multiple ? (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name={name}
                value={option.value}
                checked={((value as string[]) ?? []).includes(option.value)}
                onChange={(e) =>
                  handleCheckboxChange(option.value, e.target.checked)
                }
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ) : (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={(value as string) === option.value}
                onChange={(e) => (onChange as (v: string) => void)?.(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ),
        )}
      </div>
      {error && <p className="mt-1 text-xs text-secondary">{error}</p>}
    </fieldset>
  );
}
