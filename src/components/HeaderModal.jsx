import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
function HeaderModal({ categories, setOpen,open }) {
  
  useEffect(() => {
    if (open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [open]);
  return (
    <div className="header_modal">
      <div className="container">
        <nav onClick={() => setOpen(false)}>
          <ul className="navs">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="has_dropdown">
              <NavLink to="/categories">Categories</NavLink>
              <ul className="dropdown">
                {categories[0].children.map((cat) => {
                  return (
                    <li>
                      <NavLink to={`${cat.id}/category`}>{cat.name}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
const t = (a) => a;
export default connect(t)(HeaderModal);
