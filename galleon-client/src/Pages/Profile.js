import React from "react";
import { Outlet } from "react-router-dom";
function Profile() {
  return (
    <div>
      Profile
      <Outlet />
    </div>
  );
}

export default Profile;
