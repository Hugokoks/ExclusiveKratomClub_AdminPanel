import styles from "./index.module.css";

type InputMainProps = {
  label: string;
  name: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  hasError?: boolean;
  autoComplete?: string;
  required?: boolean;
  ref?: React.Ref<HTMLInputElement>;
};

export default function InputMain({
  label,
  name,
  type,
  value,
  onChange,
  ref = null, // ref is optional
  hasError = false, // prop to indicate if there's an error
}: InputMainProps) {
  return (
    <div className={styles.inputGroup}>
      <input
        type={type}
        name={name}
        className={`${styles.input} ${hasError ? styles.inputError : ""}`}
        placeholder=" "
        autoComplete="on"
        value={value}
        onChange={onChange}
        ref={ref}
      />
      <label className={styles.userLabel}>{label}</label>
    </div>
  );
}
