import styles from "./index.module.css";

export default function TemplateBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.TemplateBox}>
      <h2 className="text-2xl italic">{title}</h2>
      <hr />
      <div className="flex flex-col gap-4 mt-4">{children}</div>
    </div>
  );
}
