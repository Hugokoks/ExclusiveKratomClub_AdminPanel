import React from 'react';


export function createChangeHandler<T>(
    callback: (name: keyof T, value: string) => void
) {
    return (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;

        callback(name as keyof T, value);
    };
}

