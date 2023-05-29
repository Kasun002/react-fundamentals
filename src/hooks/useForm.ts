import { ChangeEvent, FormEvent, useState } from "react";
import { IProductDetailForm } from "../interfaces/IProduct";

const useForm = (initialValues: IProductDetailForm) => {
    const [values, setValues] = useState<IProductDetailForm>(initialValues);
    const [errors, setErrors] = useState<Partial<IProductDetailForm>>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm(values);
        if (Object.keys(validationErrors).length === 0) {
            // We can call API here 
            resetForm();// Need to reset form depending on the API response
        } else {
            setErrors(validationErrors);
        }
    };

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    };

    const validateForm = (formValues: IProductDetailForm) => {
        const errors: Partial<IProductDetailForm> = {};
        if (!formValues.name) {
            errors.name = "Name is required";
        }

        if (!formValues.price) {
            errors.price = "Price is required";
        }

        if (formValues.name && formValues.name.length < 3) {
            errors.name = "Name should have at least 3 characters";
        }

        if (formValues.name && formValues.name.length > 50) {
            errors.name = "Name maximum length should be less than 50 characters";
        }

        if (Number(formValues.price) < 0) {
            errors.price = "Price cannot be 0";
        }

        return errors;
    };

    return { values, errors, handleChange, resetForm, onSubmit };
};

export default useForm;