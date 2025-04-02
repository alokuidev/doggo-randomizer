import React from "react";
import { fetchApi } from "../api/api";
import { useQuery } from "@tanstack/react-query";

const DogImage = () => {

  
  const { data , refetch  } = useQuery({
    queryKey: ["post"],
    queryFn: fetchApi,
    refetchOnWindowFocus:false,
    refetchOnMount:false
  });
  return (
    <div className="container">
      <h1 className="title">Random Dog Image</h1>
      <div className="imageContainer">
        <img
          id="dogImage"
          className="dogImage"
          src={data?.message}
          alt="Random Dog"
        />
      </div>
      <button id="fetchButton" className="fetchButton" onClick={() => refetch()}>
        Fetch New Dog
      </button>
    </div>
  );
};

export default DogImage;
