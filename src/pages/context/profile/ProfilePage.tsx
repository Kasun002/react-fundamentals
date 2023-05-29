import React, { useContext } from "react";
import UserContext from "../UserContext";
import SettingsPage from "../setting/SettingsPage";

const ProfilePage: React.FC = () => {
    const { user, updateUser } = useContext(UserContext);

    return (
        <>
            <h2>Profile Page (First children of root context provider)</h2>
            <form className="form" autoComplete="off">
                <div className="form__group">
                    <label htmlFor="name" className="form__label">
                        *First Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.firstName}
                        onChange={(e) => updateUser({ ...user, firstName: e.target.value })}
                        className="form__input"
                    />
                </div>
                <div className="user-list__item">
                    <div className="user-list__address">Email: {user.email}</div>
                </div>
            </form>
            <SettingsPage />
        </>
    );
}

export default ProfilePage;