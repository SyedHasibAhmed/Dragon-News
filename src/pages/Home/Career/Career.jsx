import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import BreakingNews from "../BreakingNews";

const Career = () => (
  <div className="text-center">
    <Header></Header>
    <BreakingNews></BreakingNews>
    <Navbar></Navbar>
    <h2 className="text-3xl">Career Coming Soon...</h2>
    {/* Dasiy Ui */}
    <progress className="progress w-full"></progress>
    {/* ...................... */}
    <div className="carousel carousel-center rounded-box">
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          alt="Pizza"
        />
      </div>
    </div>
    {/* .............. */}
    <div className="overflow-x-auto">
      <ul className="steps">
        <li className="step">start</li>
        <li className="step step-secondary">2</li>
        <li className="step step-secondary">3</li>
        <li className="step step-secondary">4</li>
        <li className="step">5</li>
        <li className="step step-accent">6</li>
        <li className="step step-accent">7</li>
        <li className="step">8</li>
        <li className="step step-error">9</li>
        <li className="step step-error">10</li>
        <li className="step">11</li>
        <li className="step">12</li>
        <li className="step step-warning">13</li>
        <li className="step step-warning">14</li>
        <li className="step">15</li>
        <li className="step step-neutral">16</li>
        <li className="step step-neutral">17</li>
        <li className="step step-neutral">18</li>
        <li className="step step-neutral">19</li>
        <li className="step step-neutral">20</li>
        <li className="step step-neutral">21</li>
        <li className="step step-neutral">22</li>
        <li className="step step-neutral">23</li>
        <li className="step step-neutral">end</li>
      </ul>
    </div>
    {/* Dasiy Ui */}
  </div>
);

export default Career;
