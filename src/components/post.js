import React from "react";
import { useGetPostsQuery } from "../service/api";

export const Posts= ()=>{
    const {data, error,isLoading}= useGetPostsQuery();

    if (isLoading) return <p>Loading</p>
    if (error) return <p> Error : {error.message}</p>;

    return(
        <div>
            <h2>Posts List </h2>
            <ul>
                {data.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};