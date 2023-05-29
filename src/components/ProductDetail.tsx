import React from "react";
import useForm from "../hooks/useForm";
import { IProductDetailForm } from "../interfaces/IProduct";
import './css/_form.css';

const ProductDetail: React.FC = () => {
    const initialValues: IProductDetailForm = {
        name: '',
        price: '',
        description: ''
    }
    const { values, errors, handleChange, onSubmit } = useForm(initialValues);

    return (
        <>
            <h2>Product detail form</h2>
            <form className="form" onSubmit={onSubmit} autoComplete="off">
                <div className="form__group">
                    <label htmlFor="name" className="form__label">
                        *Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        className="form__input"
                    />
                    {errors.name && <div className="form__error">{errors.name}</div>}
                </div>
                <div className="form__group">
                    <label htmlFor="price" className="form__label">
                        *Price:
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        className="form__input"
                    />
                    {errors.price && <div className="form__error">{errors.price}</div>}
                </div>
                <div className="form__group">
                    <label htmlFor="description" className="form__label">
                        Description(optional):
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        className="form__input form__input--textarea"
                    ></textarea>
                </div>
                <div className="form__group--button">
                    <button type="submit" className="form__button" >
                        Save
                    </button>
                    <button type="button" className="form__button">
                        Reset
                    </button>
                </div>

            </form>
        </>
    );
}

export default ProductDetail;