import { use, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ProfileSection = () => {
  const { user, updateUser, setUser } = use(AuthContext);

  const [editMode, setEditMode] = useState(false);
  //   const [profile, setProfile] = useState();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const userProfileInfo = {
      photoURL: photo,
      displayName: name,
      email: email,
    };
    updateUser(userProfileInfo).then(() => {
      Swal.fire({
        icon: "success",
        title: "profile updated",
        showConfirmButton: false,
        timer: 1500,
      });
      setUser((prev) => ({
        ...prev,
        ...userProfileInfo,
      }));
    });

    setEditMode(false);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6  rounded-2xl shadow-lg">
      {/* Profile Photo */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={user?.photoURL}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-teal-500 object-cover"
        />

        {/* User Info */}
        {editMode ? (
          <form onSubmit={handleUpdate} className="w-full space-y-3">
            <div className="flex items-center">
              <label className="font-bold px-2 text-teal-600">Name:</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="w-full  border-b p-2  border-teal-600 focus:outline-none"
              />
            </div>
            <div className="flex items-center">
              <label className="font-bold px-2 text-teal-600">Email:</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your Email"
                className="w-full  border-b p-2  border-teal-600 focus:outline-none"
              />
            </div>
            <div className="flex items-center">
              <label className="font-bold px-2 text-teal-600">Photo:</label>
              <input
                type="text"
                name="photo"
                defaultValue={user?.photoURL}
                placeholder="Photo URL"
                className="w-full  border-b p-2  border-teal-600 focus:outline-none"
              />
            </div>

            <div className="flex gap-3 justify-center mt-4">
              <button
                // onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <p className="text-gray-600">{user?.email}</p>
            <button
              className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
