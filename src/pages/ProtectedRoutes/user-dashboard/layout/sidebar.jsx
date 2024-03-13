import { useAuth } from "../../../../middleware/auth";
import { uploadIcon } from "../../../../assets";
import { useState } from "react";
import ImageModal from "../../../../components/image-uploader/imageModal";
import axios from "axios";

function Sidebar() {
  const { user, setUser } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const url = import.meta.env.VITE_CLIENT_SERVER_URL;

  const updateAvatar = async (image) => {
    await axios
      .post(`${url}/updateUserPicture`, image)
      .then((res) => {
        setUser((prev) => ({ ...prev, picture: res.data.url }));
        setModalOpen(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="rounded-lg w-full py-6 px-4 md:p-6 bg-white flex md:flex-col items-center md:justify-center gap-4">
      <div className="w-full order-2 md:order-1 space-y-2">
        <h1 className="md:text-center text-lg md:text-xl font-semibold">
          {user?.fullname}
        </h1>
        <p className="md:text-center text-gray-600 text-xs md:text-sm">
          {user?.email}
        </p>
      </div>

      <div
        title={user?.fullname}
        className="relative min-w-[64px] md:flex justify-center order-1 md:order-2 cursor-pointer"
      >
        {user?.picture ? (
          <img
            src={user?.picture}
            alt={user?.fullname}
            className="w-16 h-16 md:w-32 md:h-32 rounded-full bg-neutral-grey"
          />
        ) : (
          <div className="rounded-full bg-neutral-1000 flex items-center justify-center w-16 h-16 md:w-32 md:h-32">
            <h2 className="text-uppercase md:text-3xl font-black text-neutral-100">
              {user?.fullname.split(" ")[0].charAt(0)}
              {user?.fullname.split(" ")[1].charAt(0)}
            </h2>
          </div>
        )}

        <button
          onClick={() => setModalOpen(true)}
          className="md:hidden absolute bottom-0 w-16 h-8 rounded-b-full flex justify-center items-center bg-[#00000066] opacity-0 transition-opacity hover:opacity-100"
        >
          <img src={uploadIcon} alt="Upload" />
        </button>
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="hidden md:block w-full text-center order-3 bg-secondary-500 whitespace-nowrap text-white py-4 rounded-lg hover:bg-secondary-600"
      >
        Upload Photo
      </button>

      <div className="order-4 hidden md:flex flex-col gap-4 text-center text-[#8C8C8F] border border-[#8C8C8F] text-xs bg-[#F0EFF5] rounded-lg p-4">
        <p>
          Upload a new picture. Larger image will be resized automatically.{" "}
        </p>
        <p>
          Maximum upload size is{" "}
          <span className="font-bold text-black">1MB</span>
        </p>
      </div>

      <p className="order-5 hidden md:block text-center text-gray-600 text-sm">
        Member Since:{" "}
        <span className="font-bold text-neutral-100">1 October 2020</span>
      </p>

      {modalOpen && (
        <ImageModal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Sidebar;
