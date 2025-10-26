import React from 'react';
import styles from './index.module.css';


interface SelectOption {
    value: string;
    label: string;
}

interface FilterSelectProps {
    label: string;

    name: string;

    value: string;

    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;

    options: SelectOption[];
}


export default function FilterSelect({
    label,
    name,
    value,
    onChange,
    options
}: FilterSelectProps) {
    return (
        <div className={styles.navHeaderCell}>
            <span>{label}</span>
            <select
                className={styles.filterSelect}
                name={name}
                value={value}
                onChange={onChange}
            >
                {/* Automaticky vygeneruje <option> z pole */}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}