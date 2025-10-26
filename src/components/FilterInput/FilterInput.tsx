import React from 'react';
import styles from './index.module.css'; // Importuje styly ze stejné složky
import type { style } from 'framer-motion/client';

interface FilterInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}


export default function FilterInput({
    label,
    name,
    value,
    onChange,
    placeholder = "Filtrovat..."

}: FilterInputProps) {
    return (
        <div className={`${styles.navHeaderCell} ${name === 'id' ? 'ml-2' : ''}`}>
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