import React from "react";
import {Link} from "react-router-dom"
import shopdressupImage from "../../public/shopdressup.png";
const Projects = ({ id }) => {
  return (
    <div id={id} className="bg-white flex justify-center py-7">
      <div>
        <div className="py-14">
          <p className="text-4xl">
            My <span className="text-[#457B9D]">Projects</span>
          </p>
        </div>
        <div className="card w-56 sm:w-96 bg-base-100 shadow-xl hover:shadow-black cursor-pointer" style={{position:"inherit"}}>
          <figure className="h-80">
            <img className="h-[100%]" src={shopdressupImage} alt="image" />
          </figure>
          <div className="card-body bg-[#457B9D]">
            <div className=""><p className="text-2xl flex text-[darkblue] justify-center">ShopDressUp</p></div>
            <h2 className="card-title text-white">Key Feature</h2>
            <p className="text-white">The website boasts a clean and modern design built with Tailwind CS
built with Redux enables users to add, remove, and
update chosen items before checkout.
</p>
            <div className="card-actions justify-between">
              <Link to="https://shopdressupclone.netlify.app/"><button className="btn btn-primary">View</button></Link>
                
              <Link to="https://github.com/Ashish0016op/ShopDressup"><button className="btn">GitHub</button> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
