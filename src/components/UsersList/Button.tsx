interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = ({ onClick, disabled, children }: Props) => (
  <button
    className="bg-blue-500 px-2 py-1 rounded-md flex items-center gap-1 disabled:brightness-50 text-white shadow-md"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
