import { useState } from "react";

const getInitialValue = (localStorageKey, initialValue) => {
    const localStorageValue = localStorage.getItem(localStorageKey)

    if (localStorageValue) {
        return JSON.parse(localStorageValue)
    }

    return initialValue
}

const saveValue = (localStorageKey, newValue) => {
    localStorage.setItem(localStorageKey, JSON.stringify(newValue));
}

const resolveNewValue = (oldValue, newValue) => {
    if (typeof newValue === 'function') {
        newValue(oldValue)
    }

    return newValue
}

export const useStateFromLocalStorage = (localStorageKey, initialValue) => {
    const [value, setValue] = useState(() => getInitialValue(localStorageKey, initialValue))

    const setValueWithSaveToLocalStorage = (newValue) => {
        const resolvedNewValue = resolveNewValue(value, newValue)
        saveValue(localStorageKey, resolvedNewValue)
        setValue(resolvedNewValue)
    }

    return [value, setValueWithSaveToLocalStorage]
}
