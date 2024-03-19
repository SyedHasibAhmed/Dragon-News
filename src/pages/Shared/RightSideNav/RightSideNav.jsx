import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

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
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl text-bold text-center">Find Us On</h2>
        <button className="btn btn-outline w-full">
          <FaFacebook></FaFacebook>
          FaceBook
        </button>
        <button className="btn btn-outline w-full">
          <FaTwitter></FaTwitter>
          Twitter
        </button>
        <button className="btn btn-outline w-full">
          <FaInstagram></FaInstagram>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
