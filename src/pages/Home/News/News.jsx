import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl">News Detail Coming Soon... </h2>
          <progress className="progress w-full "></progress>
          <p>{id}</p>
          {/* Dasiy Ui */}
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          {/* Dasiy Ui */}
        </div>

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
