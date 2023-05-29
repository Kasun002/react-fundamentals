import React, { useContext } from "react";
import UserContext from "../UserContext";

const SettingsPage: React.FC = () => {
    const { user, updateUser } = useContext(UserContext);

    return (
        <>
            <h2>Settings page (Child of profile page)</h2>
            <form className="form" autoComplete="off">
                <div className="form__group">
                    <label htmlFor="name" className="form__label">
                        *Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={(e) => updateUser({ ...user, email: e.target.value })}
                        className="form__input"
                    />
                </div>
                <div className="user-list__item">
                    <div className="user-list__address">First Name: {user.firstName}</div>
                </div>
            </form>
        </>
    );
}

export default SettingsPage;