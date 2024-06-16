import { images } from "./images";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Myprofile() {
  const [profileImage, setProfileImage] = useState(images.image2);
  const [coverImage, setCoverImage] = useState(images.image23);
  const [profile, setProfile] = useState({
    name: "Kristian Ujang",
    username: "Krisjang_0012",
    website: "sites.google.com/view/illustratorlife",
    about:
      "3D Ilustrator Design, Digital Product Designer, Motion Designer Art Director Passionate about inovation,meculous design and the best global product",
  });

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
    <div className="text-center text-white bg-[#0F0F0F]">
      <header className="bg-[#0F0F0F] w-full">
        <img className="w-full h-[50vh]" src={coverImage} alt="Cover" />
      </header>
      <section>
        <div className="relative flex flex-col justify-center items-center min-h-auto bg-[#0F0F0F]">
          <div className="relative bg-[transparent] text-white w-full max-w-[550px] p-5 rounded-lg text-center">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full object-cover"
              src={profileImage}
              alt="Profile"
            />
            <div className="text-5xl my-2 pt-32">{profile.name}</div>
            <div className="flex justify-around items-center my-4 mx-2 sm:mx-8 md:mx-16 lg:mx-32">
              <div className="flex flex-row items-center">
                <img className="w-6 h-6" src={images.follow} alt="Followers" />
                <span className="block text-xl mb-1 ml-2">7,6k</span>
              </div>
              <div className="ml-6 mr-1 border-r border-white h-8 self-stretch "></div>
              <div className="flex flex-row items-center">
                <img className="w-6 h-6" src={images.heart} alt="Likes" />
                <span className="block text-xl mb-1 ml-2">123,99k</span>
              </div>
            </div>
            <div className="flex justify-around items-center my-4 mx-2 sm:mx-8 md:mx-16 lg:mx-32">
              <button className="flex items-center justify-center border border-white rounded-lg cursor-pointer text-white font-bold mr-2 bg-transparent w-24 py-2">
                <img className="w-5 h-5 mr-2" src={images.image0} alt="Home" />
              </button>
              <Link to="/editprofile">
                <button className="border border-white rounded-lg cursor-pointer text-white font-bold mr-2 bg-transparent w-24 py-2">
                  Edit Profile
                </button>
              </Link>
            </div>
            <div className="text-white hover:underline hover:text-sky-500 mb-5">
              <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer">
                {profile.website}
              </a>
            </div>
            <div className="text-white justify-center">
              <p>{profile.about}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-10">
        <img
          className="w-full h-full object-cover object-center"
          src={images.image104}
          alt="Spiderman pose 1"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image105}
          alt="Spiderman pose 2"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image106}
          alt="Spiderman pose 3"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image109}
          alt="Spiderman pose 4"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image110}
          alt="Spiderman pose 5"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image112}
          alt="Spiderman pose 6"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image107}
          alt="Spiderman pose 7"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image111}
          alt="Spiderman pose 8"
        />
        <img
          className="w-full h-full object-cover object-center"
          src={images.image103}
          alt="Spiderman pose 9"
        />
      </section>
    </div>
  );
}

export default Myprofile;
