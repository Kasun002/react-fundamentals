import React, { useState } from "react";
import { TUser, initialUser } from "../../interfaces/TUser";
import UserContext from "./UserContext";
import ProfilePage from "./profile/ProfilePage";

const ContextRootPage: React.FC = () => {
    const [user, setUser] = useState<TUser>(initialUser);

    const updateUser = (updatedUser: Partial<TUser>) => {
        setUser((prevUser) => ({ ...prevUser, ...updatedUser }));
    };
    return (
        <UserContext.Provider value={{ user, updateUser }}>
            <ProfilePage />
            <div className="divider"></div>
            <div className="p-2">
                <h3>How this work</h3>
                <ul>
                    <li>ContextRoot is the parent component</li>
                    <li>It has the context provider (structure of context provider)
                        <pre>
                            <code>
                                {"<UserContext.Provider value={{\n"}
                                {"  user: user,\n"}
                                {"  updateUser: updateUser\n"}
                                {"}}>\n"}
                                {"  <ProfilePage />\n"}
                                {"</UserContext.Provider>"}
                            </code>
                        </pre>
                    </li>
                    <li>ProfilePage is child of ContextRootPage </li>
                    <li>SettingsPage is child of ProfilePage</li>
                    <div>1) ContextRootPage (grand parent) </div>
                    <div>2) Profile page (parent) </div>
                    <div>3) Settings page (child)</div>
                </ul>
            </div>
        </UserContext.Provider>

    );
}

export default ContextRootPage;