import { useState } from "react";

interface Props {
  isChecked: boolean;
  onChange: (enabled: boolean) => void;
}

export const Toggle = ({ isChecked, onChange }: Props) => {
  const [checked, setChecked] = useState(isChecked);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange(next);
  };

  return (
    <button
      onClick={toggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        checked ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"
      }`}
      role="switch"
      aria-checked={checked}
      aria-label="Toggle notifications"
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
};
