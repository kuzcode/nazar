import { Link } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

const Topbar = () => {
  const { user } = useUserContext();
  return (
    <section className="topbar">
      <div className="flex-center py-4 px-5">
          <Link to={`/profile/${user.id}`} className="mx-2">
            <p>Профиль</p>
          </Link>
          <Link to={`/profile/${user.id}`} className="mx-2">
            <p>Про нас</p>
          </Link>
        </div>
    </section>
  );
};

export default Topbar;
