import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      {/* Login With */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl text-center">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          GitHub
        </button>
      </div>
      {/* Find Us On */}
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4 text-center">Find Us on</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg hover:bg-sky-900"
          href=""
        >
          <FaFacebook className="mr-3 "></FaFacebook>
          <span>Facebook</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border-x hover:bg-sky-700"
          href=""
        >
          <FaTwitter className="mr-2"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg hover:bg-red-900"
          href=""
        >
          <FaInstagram className="mr-2"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>

      {/* q zone */}
      <div className="p-4 space-y-3 mb-6">
        <div>
          <h2 className="text-3xl">Q Zone</h2>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
