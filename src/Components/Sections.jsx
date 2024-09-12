import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Sections.css";

const Sections = () => {
  const btn = useRef();
  const galleryRef = useRef();
  const [addimg, setAddimg] = useState([]);
  const [active, setActive] = useState();

  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);

  const updateScrollButtons = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;

      // Check if scrolling to the left or right is possible
      setLeftDisabled(scrollLeft === 0);
      setRightDisabled(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setAddimg([...addimg, e.target.result]);
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please select an img url first.");
    }

    console.log(addimg);
  };

  const scrollToLeft = () => {
    console.log("Left scrolled");
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollToRight = () => {
    console.log("right scrolled");
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const handleButton = () => {
    if (btn.current) {
      btn.current.click();
    }
  };

  useEffect(() => {
    // updateScrollButtons();
    const handleScroll = () => updateScrollButtons();
    const gallery = galleryRef.current;
    if (gallery) {
      gallery.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (gallery) {
        gallery.removeEventListener("scroll", handleScroll);
      }
    };
  }, [addimg]);

  return (
    <div className="w-[100%] h-[100vh] flex  text-[#A3A2B2] gap-[57px]">
      <div className="w-[50%] h-full  pl-[29px] py-[60px]">
        <div className=" h-full border border-[#96BEE7] rounded-[27px] bg-[#616161D1]"></div>
      </div>

      {/* //right Section  */}

      <div className="w-[50%]  relative flex flex-col py-[60px] h-[100%]  px-10 gap-[14px]">
        <div className=" relative bg-[#363C43] shadow-[5px_5px_5px_0px_rgba(0,0,0,1)] md:h-[350px] overflow-hidden pl-[53px] rounded-2xl pt-[17px] pb-[22px] flex flex-col gap-4">
          <div className="absolute left-[10px] question h-[130px] flex flex-col justify-between w-fit items-center">
            <img src="/Vector.png" alt="" />
            <img src="/box.png" alt="" />
          </div>
          <div className="absolute top-[50%] -translate-y-[50%] right-[10px]">
            <img src="/Scroll.png" alt="" />
          </div>
          <div className="nav lg:mr-[53px] mr-[30px]  rounded-[23px] lg:text-base mx:text-[12px] text-[10px] flex bg-[#171717] p-2 text-[#A3A2B2] justify-between">
            <a
              onClick={() => setActive("About Me")}
              className={` relative  overflow-hidden group w-full flex cursor-pointer justify-center items-center rounded-xl ${
                active === "About Me"
                  ? "bg-[#28292F]  text-white shadow-shadow-nav"
                  : "bg-transparent text-[#A3A2B2] shadow-none"
              } py-2`}
            >
              <span className="realtive z-10">About Me</span>
              <div
                className={`absolute inset-0 bg-[rgb(163,173,178)] transition-transform duration-300 ease-in-out -translate-x-full${
                  active === "About Me" ? " hidden " : " block"
                } group-hover:translate-x-0 brightness-[.2]`}
              ></div>
            </a>
            <a
              onClick={() => setActive("Experiences")}
              className={` relative overflow-hidden group w-full flex justify-center cursor-pointer items-center rounded-xl ${
                active === "Experiences"
                  ? "bg-[#28292F] text-white shadow-shadow-nav"
                  : "bg-transparent text-[#A3A2B2] shadow-none"
              }`}
            >
              <span className="relative z-20">Experiences</span>
              <div
                className={`absolute inset-0 bg-[rgb(163,173,178)] transition-transform duration-300 ease-in-out -translate-x-full${
                  active === "Experiences" ? " hidden " : " block"
                } group-hover:translate-x-0 brightness-[.2]`}
              ></div>
            </a>
            <a
              onClick={() => setActive("Recommended")}
              className={` relative overflow-hidden group w-full flex justify-center cursor-pointer items-center rounded-xl ${
                active === "Recommended"
                  ? "bg-[#28292F] text-white shadow-shadow-nav"
                  : "bg-transparent text-[#A3A2B2] shadow-none"
              }`}
            >
              <span className="relative z-20">Recommended</span>
              <div
                className={`absolute inset-0 bg-[rgb(163,173,178)] transition-transform duration-300 ease-in-out -translate-x-full${
                  active === "Recommended" ? " hidden " : " block"
                } group-hover:translate-x-0 brightness-[.2]`}
              ></div>
            </a>
          </div>
          <div className="paragraph h-full pr-[53px] pt-2 mr-4 overflow-x-hidden overflow-y-scroll mx:text-base text-sm  font-jakarta ">
            <p className=" leading-[1.4] py-[9px]">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now.
              <br /> <br /> I was born and raised in Albany, NY& have been
              living in Santa Carla for the past 10 years my wife Tiffany and my
              4 year old twin daughters- Emma and Ella. Both of them are just
              starting school, so my calender is usually blocked between 9-10
              AM. This is a... <br /> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Neque aliquid ad error, culpa officiis in
              mollitia provident ipsum alias eius vero magni dolorum tempora
              commodi voluptate numquam autem? Qui non unde mollitia esse
              reprehenderit, autem architecto id quis error hic aliquid
              molestias cumque illum ad fuga voluptatum provident doloribus
              doloremque impedit eius! Quas, ipsam sed. Rem consequuntur error
              possimus quam libero. Doloribus aperiam deleniti accusamus,
              perspiciatis earum voluptate facilis cum reiciendis ad repellat
              nostrum eaque molestias debitis architecto recusandae laudantium
              odit quis optio. Id eos molestiae sunt, laudantium quasi, fuga
              optio animi, adipisci distinctio mollitia reiciendis corrupti
              error odio maxime.
            </p>
          </div>
        </div>
        <div className="w-full  flex justify-center  rounded-[2.46px] ">
          <div className="h-[4px] w-[84%] bg-[#34353A] shadow-[0px_3px_5px_0px_rgba(0,0,0,1)] rounded-[2.46px] "></div>
        </div>

        {/* gallery section  */}
        <div className="relative  flex flex-col shadow-[5px_5px_5px_0px_rgba(0,0,0,1)] pl-[32px] bg-[#363C43]   pt-[17px] md:h-[350px]  rounded-2xl">
          <div className="absolute left-[10px]  question h-[120px] flex flex-col justify-between w-fit items-center">
            <img src="/Vector.png" alt="" />
            <img src="/box.png" alt="" />
          </div>

          <div className="flex  lg:justify-between  pl-[21px]  items-center lg:pr-[53px] pr-[30px] ">
            <div className="gallery bg-black rounded-2xl text-white max-xl:text-sm xl:py-4 py-3 lg:px-7 xl:px-10 px-4">
              Gallery
            </div>
            <div className="flex items-center xl:gap-4 gap-1">
              <input
                ref={btn}
                type="file"
                className=" hidden"
                accept="image/*"
                onChange={handleImageUpload}
                name=""
                id=""
              />

              <div
                onClick={handleButton}
                className="addImage bg-[#40464D] lg:whitespace-nowrap  w-fit max-xl:translate-x-4 xl:text-base text-sm leading-[1] rounded-full xl:px-6 px-3 flex justify-center items-center py-1"
              >
                <span className="lg:text-2xl">+</span>
                <span className="flex text-center">
                  ADD IMAGE
                </span>
              </div>

              <div className="left-right flex  xl:gap-3">
                <span
                  style={{ pointerEvents: leftDisabled ? "none" : "auto" }}
                  onClick={scrollToLeft}
                  className={` left-btn rounded-full max-mx:scale-[0.5] max-xl:scale-[0.7] max-xl:translate-x-2  p-4 ${
                    leftDisabled ? "bg-[#6f8bab]" : "bg-[#232528]"
                  }`}
                >
                  <svg
                    enable-background="new 0 0 45 34"
                    height="24px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 45 34"
                    width="24px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon
                      fill={leftDisabled ? "white" : "#6f787c"}
                      points="19.626,31.705 7.712,20 45,20 45,15 7.712,15 19.626,3.006 16.798,0.273 -0.38,17.499   16.798,34.605 "
                    />
                  </svg>
                </span>

                <span
                  style={{ pointerEvents: rightDisabled ? "none" : "auto" }}
                  onClick={scrollToRight}
                  className={`rounded-full right-btn max-mx:scale-[0.5] max-mx:-translate-x-4   max-xl:scale-[0.7] bg-[#232528] p-4 ${
                    rightDisabled ? "bg-[#6f8bab]" : "bg-[#232528]"
                  }`}
                >
                  <svg
                    enable-background="new 0 0 45 34"
                    height="24px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 45 34"
                    width="24px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <polygon
                      fill={rightDisabled ? "white" : "#6f787c"}
                      points="19.626,31.705 7.712,20 45,20 45,15 7.712,15 19.626,3.006 16.798,0.273 -0.38,17.499   16.798,34.605"
                      transform="rotate(180, 22.5, 17)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div
            ref={galleryRef}
            className="relative pl-[21px]  pb-[22px] max-w-[588px]   mt-0  pt-7  gallery-imgs  overflow-x-auto   whitespace-nowrap  flex  gap-[18px]  h-full"
          >
            <div
              id="threed"
              className="  perspective-1000  rounded-3xl h-full max-w-[171.5px] w-full flex-shrink-0  "
            >
              <img
                className=" hover:translateZ(60px) hover:-translate-y-[2px]  z-[50] w-full hover:-rotate-[2deg] hover:shadow-xl hover:shadow-black  hover:grayscale-0 hover:scale-[1.15] transition-all duration-[480ms] ease-in-out  h-full grayscale object-cover rounded-3xl"
                src="/Images/1.webp"
                alt=""
              />
            </div>
            <div
              id="threed"
              className="  perspective-1000  rounded-3xl h-full max-w-[171.5px] w-full flex-shrink-0  "
            >
              <img
                className=" hover:translateZ(60px) hover:-translate-y-[2px] hover:shadow-xl hover:shadow-black   z-[50] w-full hover:-rotate-[2deg]  hover:grayscale-0 hover:scale-[1.15] transition-all duration-[480ms] ease-in-out  h-full grayscale object-cover rounded-3xl"
                src="/Images/2.webp"
                alt=""
              />
            </div>
            <div
              id="threed"
              className="  perspective-1000  rounded-3xl h-full max-w-[171.5px] w-full flex-shrink-0  "
            >
              <img
                className=" hover:translateZ(60px) hover:-translate-y-[2px] hover:shadow-xl hover:shadow-black  z-[50] w-full hover:-rotate-[2deg]  hover:grayscale-0 hover:scale-[1.15] transition-all duration-[480ms] ease-in-out  h-full grayscale object-cover rounded-3xl"
                src="/Images/3.avif"
                alt=""
              />
            </div>

            {addimg.map((image, index) => (
              <div
                id="threed"
                className="  perspective-1000  rounded-3xl h-full max-w-[171.5px] w-full flex-shrink-0  "
              >
                <img
                  className=" hover:translateZ(60px) hover:-translate-y-[2px] hover:shadow-xl hover:shadow-black  z-[50] w-full hover:-rotate-[2deg]  hover:grayscale-0 hover:scale-[1.15] transition-all duration-[480ms] ease-in-out  h-full grayscale object-cover rounded-3xl"
                  src={image}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="absolute -bottom-[18px] left-0 line flex justify-center w-full ">
            <div className="bg-[#34353A] w-[84%] shadow-[0px_3px_5px_0px_rgba(0,0,0,1)] h-[4px] rounded-[2.46px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
