import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <button className={styles["button"]}>{text}</button>;
}
