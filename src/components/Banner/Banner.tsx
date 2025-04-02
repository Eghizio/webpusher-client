type Variant = "info" | "success" | "warning" | "danger";

interface Props {
  children: React.ReactNode;
  variant?: Variant;
}

const getVariantStyles = (variant: Variant) => {
  switch (variant) {
    case "success":
      return "bg-green-50 border-green-400";
    case "warning":
      return "bg-yellow-50 border-yellow-400";
    case "danger":
      return "bg-red-50 border-red-400";
    case "info":
    default:
      return "bg-blue-50 border-blue-400";
  }
};

export const Banner = ({ children, variant = "info" }: Props) => (
  <article
    className={`mb-8 border-l-4 p-4 shadow-sm ${getVariantStyles(variant)}`}
  >
    {children}
  </article>
);
