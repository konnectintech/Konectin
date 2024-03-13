import { useAuth } from "../../../../middleware/auth";
import { uploadIcon } from "../../../../assets"
import axios from "axios"
import { useRef, useState } from "react";


function Sidebar() {
  const { user } = useAuth();

  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    picture: "",
    isEmailVerified: false,
    typeOfUser: "Regular",
    notificationSettings: {
      emails: true,
      pushNotifications: true
    },
    socials: {
      github: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      medium: ""
    }
  })


  const updatePicture = async (userId, newPicture) => {
    try {
      const url = import.meta.env.VITE_CLIENT_SERVER_URL;
      const updatedUserData = {
        ...userData,
        picture: newPicture
      }
      await axios.put(`${url}/v2/updateUser?userId=${userId}`, updatedUserData)
      console.log("PUT request successful");
    } catch (error) {
      console.error("Error making PUT request: ", error);
    }
  }

  const hiddenFileInput = useRef(null)

  const handleUpdatePicture = () => {
    hiddenFileInput.current.click();
  }

  const handleChange = async (event) => {
    const pictureUploaded = event.target.files[0]
    if (!pictureUploaded) return
    try {
      const userId = user?._id
      await updatePicture(userId, pictureUploaded.name)
      setUserData(prevUserData => ({
        ...prevUserData,
        picture: pictureUploaded.name
      }))
    } catch (error) {
      console.error("Error handling picture upload: ", error);
    }
  }

  return (
    <div className="rounded-lg w-full py-6 px-4 md:p-6 bg-white flex md:flex-col items-center sm:justify-center gap-4">
      <div className="w-full order-2 sm:order-1 space-y-2">
        <h1 className="sm:text-center text-lg md:text-xl font-semibold">
          {user?.fullname}
        </h1>
        <p className="sm:text-center text-gray-600 text-xs md:text-sm">
          {user?.email}
        </p>
      </div>

      <div
        title={user?.fullname}
        className="relative flex justify-center order-1 sm:order-2 cursor-pointer"
      >
        {user?.picture ? (
          <img
            src={user?.picture}
            alt={user?.fullname}
            className="w-16 h-16 sm:w-32 sm:h-32 rounded-full bg-neutral-grey"
          />
        ) : (
          <div className="rounded-full bg-neutral-1000 flex items-center justify-center w-16 h-16 sm:w-32 sm:h-32">
            <h2 className="text-uppercase sm:text-3xl font-black text-neutral-100">
              {user?.fullname.split(" ")[0].charAt(0)}
              {user?.fullname.split(" ")[1].charAt(0)}
            </h2>
          </div>
        )}
        <button onClick={handleUpdatePicture} className="sm:hidden absolute bottom-0 w-16 h-8 rounded-b-full flex justify-center items-center bg-[#00000066] opacity-0 transition-opacity hover:opacity-100">
          <img src={uploadIcon} alt="Upload" />
        </button>
      </div>

      <button onClick={handleUpdatePicture} className="hidden sm:block w-full text-center order-3 bg-secondary-500 whitespace-nowrap text-white py-4 rounded-lg hover:bg-secondary-600">
        Upload Photo
      </button>

      <input 
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{display:"none"}} 
      />

      <div className="order-4 hidden sm:flex flex-col gap-4 text-center text-[#8C8C8F] border border-[#8C8C8F] text-xs bg-[#F0EFF5] rounded-lg p-4">
        <p>
          Upload a new picture. Larger image will be resized automatically.{" "}
        </p>
        <p>
          Maximum upload size is{" "}
          <span className="font-bold text-black">1MB</span>
        </p>
      </div>

      <p className="order-5 hidden sm:block text-center text-gray-600 text-sm">
        Member Since:{" "}
        <span className="font-bold text-neutral-100">1 October 2020</span>
      </p>
    </div>
  );
}

export default Sidebar;
