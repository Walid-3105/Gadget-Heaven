import React from "react";

const Banner = () => {
  return (
    <>
      <div className="px-5 relative">
        <div>
          <div className=" hero bg-[#9538E2] min-h-screen rounded-b-xl text-center">
            <div className="px-40 pb-60">
              <h3 className="font-bold text-[56px] text-white ">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h3>
              <p className="font-normal text-white px-32 mb-4">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <button className="font-bold text-[#9538E2] bg-white rounded-3xl py-2 px-7">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        {/* absolute left-40 top-48 */}
        <div className="border border-2px p-4 rounded-2xl w-fit mx-auto absolute top-96 left-40">
          <div className=" hero bg-base-200 bg-banner mx-auto w-[1000px] h-[460px]  rounded-2xl"></div>
        </div>
        <div>
          <h3 className="font-bold text-[40px] text-center py-10 mt-64">
            Explore Cutting-Edge Gadgets
          </h3>
        </div>
      </div>
    </>
  );
};

export default Banner;
