import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import BreakingNews from "../BreakingNews";

const About = () => {
  return (
    <div className="text-center">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <h2 className="text-3xl">About Coming Soon...</h2>
      <progress className="progress w-full "></progress>

      {/* Dasiy Ui */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* Dasiy Ui */}
    </div>
  );
};

export default About;
