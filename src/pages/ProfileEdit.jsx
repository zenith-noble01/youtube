import React from "react";
import "../Styles/profileEdit.scss";
import { BiPencil } from "react-icons/bi";
import { Sidebar } from "../Components";
import { cover, user } from "../Images";

const ProfileEdit = () => {
  const handleEditUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app__profileEdit">
      <Sidebar />

      <div className="profileEdit__container">
        <form onSubmit={handleEditUser}>
          <div className="user__profile__picture">
            <div className="cover__edit">
              <img src={cover} alt="" className="userCoverPic" />
              <div className="edit">
                <BiPencil />
              </div>
            </div>
            <div className="profile__picture">
              <img src={user} className="userProfile" alt="" />
              <div className="edit">
                <BiPencil />
              </div>
            </div>
          </div>

          <div className="input__wrapper">
            <div className="input__container">
              <input type="text" placeholder="Username..." />
            </div>
            <div className="input__container">
              <input type="email" placeholder="Email..." />
            </div>
            <div className="input__container">
              <input type="password" placeholder="Password..." />
            </div>

            <button>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
