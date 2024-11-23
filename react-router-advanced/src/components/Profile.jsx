import { Outlet, NavLink } from 'react-router-dom';

const Profile = () => (
"Routes", "Route", "ProfileDetails", "ProfileSettings"    <div>
        <h1>Profile</h1>
        <nav>
            <NavLink to="details" style={{ marginRight: '10px' }}>
                Profile Details
            </NavLink>
            <NavLink to="settings">Profile Settings</NavLink>
        </nav>
        {/* The Outlet renders the nested route components */}
        <Outlet />
    </div>
);

export default Profile;
