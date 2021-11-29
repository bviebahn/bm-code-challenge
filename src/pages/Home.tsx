import { Link } from "react-router-dom";
import SelectValue from '../components/SelectValue';


// 1. Define if value setted in persistent storage, if not show SelectValue component
// 2. Set value in storage by select value
// 3. If value already setted redirect user to the Sortiment screen

const Home = () => {
  return (
    <div>
      <span>Home</span><br />
      <Link to="/sortiment">Sortiment</Link>

      <SelectValue />
    </div>
  );
};

export default Home;
