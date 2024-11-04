import React from "react";

const Banner = () => {
  return (
    <>
      <div className="px-5">
        <div>
          <div className="hero bg-[#9538E2] min-h-screen rounded-xl text-center">
            <div className="px-40">
              <h3 className="font-bold text-[56px] text-white">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h3>
              <p className="font-normal text-white px-32">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>
        {/* absolute left-40 top-48 */}
        <div className="border border-2px p-4 rounded-2xl w-fit mx-auto">
          <div className=" hero bg-base-200 bg-banner mx-auto w-[1000px] min-h-screen rounded-2xl"></div>
        </div>
        <div>
          <h3 className="font-bold text-[40px] text-center py-10">
            Explore Cutting-Edge Gadgets
          </h3>
        </div>
      </div>
    </>
  );
};

export default Banner;
