import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputoChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const OnResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        onInputoChange,
        OnResetForm
    }
}
