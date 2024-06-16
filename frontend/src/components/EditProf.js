import { images } from "./images";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EditProf = () => {
  const initialProfileImage = images.image2;
  const initialCoverImage = images.image23;
  const initialProfile = {
    name: "Kristian Ujang",
    username: "Krisjang_0012",
    website: "sites.google.com/view/illustratorlife",
    about:
      "Digital Product Designer, Motion Designer Art Director Passionate about innovation, meticulous design and the best global product",
  };

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || initialProfileImage
  );
  const [coverImage, setCoverImage] = useState(
   localStorage.getItem("coverImage") || initialCoverImage
  );
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("profile");
    return savedProfile? JSON.parse(savedProfile) : initialProfile;
  });

  const handleProfileImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCoverImageChange = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setProfileImage(initialProfileImage);
    setCoverImage(initialCoverImage);
    setProfile(initialProfile);
    localStorage.removeItem("profileImage");
    localStorage.removeItem("coverImage");
    localStorage.removeItem("profile");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to save your changes?"
    );
    if (isConfirmed) {
      localStorage.setItem("profileImage", profileImage);
      localStorage.setItem("coverImage", coverImage);
      localStorage.setItem("profile", JSON.stringify(profile));
      window.location.reload();
    }
  };

  useEffect(() => {
    const savedProfileImage = localStorage.getItem("profileImage");
    const savedCoverImage = localStorage.getItem("coverImage");
    const savedProfile = localStorage.getItem("profile");
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
    if (savedCoverImage) {
      setCoverImage(savedCoverImage);
    }
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-md space-y-6">
          <div className="flex space-x-8 items-center">
            <div className="flex space-x-8 items-start">
              <div className="flex flex-col items-center">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Foto Profile
                </label>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full"
                />
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  onChange={handleProfileImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="profileImage"
                  className="mt-2 text-sm bg-gray-700 px-4 py-2 rounded cursor-pointer"
                >
                  Change
                </label>
              </div>
              <div className="flex flex-col items-center">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Foto Cover
                </label>
                <img
                  src={coverImage}
                  alt="Cover"
                  className="w-64 h-24 rounded"
                />
                <input
                  type="file"
                  id="coverImage"
                  name="coverImage"
                  onChange={handleCoverImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="coverImage"
                  className="mt-2 text-sm bg-gray-700 px-4 py-2 rounded cursor-pointer"
                >
                  Change
                </label>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={profile.name}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-gray-800 rounded-md text-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={profile.username}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-gray-800 rounded-md text-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-300"
              >
                Website
              </label>
              <input
                type="text"
                name="website"
                id="website"
                value={profile.website}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-gray-800 rounded-md text-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-300"
              >
                About
              </label>
              <textarea
                id="about"
                name="about"
                rows="3"
                value={profile.about}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-600 bg-gray-800 rounded-md text-white shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-300 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Restart
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Save the change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProf;
