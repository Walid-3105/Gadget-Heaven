import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  const { product_id, product_title, price } = data;
  const chartData = Array.isArray(data) ? data : [data];

  return (
    <div>
      <div className=" hero bg-[#9538E2] h-[286px] text-center">
        <div className="px-40 ">
          <h3 className="font-bold text-[32px] text-white mb-5">Statistics</h3>
          <p className="font-normal text-white px-32 mb-4">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="mt-20 ml-44 mb-20">
        <BarChart width={1000} height={300} data={chartData}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="product_title" />
          <YAxis dataKey="price"></YAxis>
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
