import styles from "@/styles/button.module.scss";

interface ButtonProps {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  className,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
