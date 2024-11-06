import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div className="card bg-[#9538E2] text-white w-96 shadow-xl mx-auto mt-40">
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">Page Not found</h2>
          <p className="text-lg">
            An unexpected error occurred. Please try again later
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
