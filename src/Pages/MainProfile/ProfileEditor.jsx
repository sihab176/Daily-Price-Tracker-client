import { use, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const ProfileEditor = () => {
  const { user, updateUser, setUser } = use(AuthContext);

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.displayName.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const userProfileInfo = {
      photoURL: photo,
      displayName: name,
      email: email,
    };
    updateUser(userProfileInfo).then(() => {
      toast.success("successfully updated");
      setUser((prev) => ({
        ...prev,
        ...userProfileInfo,
      }));
    });
    setIsEditing(false);
  };

  return (
    <div className="p-6 flex md:flex-row flex-col gap-6 ">
      <section>
        <img
          className="w-24 h-24 rounded-full border-4 border-teal-700 "
          src={user?.photoURL}
          alt=""
        />
      </section>
      <section>
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {user?.displayName}
          </h1>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        <hr className="border-gray-200 mb-6" />

        <form onSubmit={handleSubmit}>
          {/* Profile Editor Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Edit Profile
            </h2>
            <p className="text-gray-600 mb-6">
              Update your profile information, contact details and profile
              picture
            </p>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="displayName"
                    defaultValue={user?.displayName}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900 font-medium">
                    {user?.displayName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Photo URL
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="photoURL"
                    defaultValue={user?.photoURL}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900 font-medium">{user?.photoURL}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-gray-900 font-medium">{user?.email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProfileEditor;
