import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className=" bg-[#e6ffff] text-black">
      <div className=" mx-48 flex flex-col justify-center items-center text-black">
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
