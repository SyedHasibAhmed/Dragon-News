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
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4">Find Us on</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="p-4 flex text-lg items-center border-x" href="">
          <FaTwitter className="mr-2"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2"></FaInstagram>
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default RightSideNav;
