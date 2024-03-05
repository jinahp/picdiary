import styles from "@/styles/button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  text?: string;
}

export default function Button({
  children,
  className,
  disabled,
  onClick,
  text,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children ?? text}
    </button>
  );
}
