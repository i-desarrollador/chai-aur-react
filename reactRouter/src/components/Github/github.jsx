import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function github() {
    const data=useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <>
      <div className="text-center bg-gray-700 m-4 text-white text-3xl">
        Github Followers:{data.followers}
        <img src={data.avatar_url} alt="" />
      </div>
    </>
  );
}


//for loader param in Route tag
export default github;

export const gitInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
