import React from 'react';
import styles from './index.module.css'; // Importuje styly ze stejné složky

interface FilterInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    style?: string
}


export default function FilterInput({
    label,
    name,
    value,
    onChange,
    placeholder = "Filtrovat...",
    style = "",

}: FilterInputProps) {
    return (
        <div className={`${styles.navHeaderCell} ${style}`}>
            <span>{label}</span>
            <input
                type="text"
                placeholder={placeholder}
                className={styles.filterInput}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}