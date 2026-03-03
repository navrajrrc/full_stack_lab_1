import { useState } from 'react';

export function useFormInput(
    initialValue: string,
    validate: (value: string) => string | null
) {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState<string | null>(null);

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setValue(e.target.value);
        setError(null);
    }

    function validateInput() {
        const validationError = validate(value);
        setError(validationError);
        return !validationError;
    }

    return {
        value,
        setValue,
        error,
        onChange,
        validateInput,
        setError
    };
}