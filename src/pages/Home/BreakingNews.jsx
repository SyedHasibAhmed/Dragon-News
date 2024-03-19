import Marquee from "react-fast-marquee"; //text slider
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-error">Breaking News</button>
      <Marquee pauseOnHover={true} speed={70}>
        <Link className="mr-12" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
        <Link className="mr-12" to="/">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
