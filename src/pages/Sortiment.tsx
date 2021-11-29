import { Link } from "react-router-dom";

import Content from '../components/Content';

const Sortiment = () => {
  return (
    <div>
      <span>Sortiment</span><br />
      <Link to="/">Home</Link>
      <Content />
    </div>
  );
};

export default Sortiment;
