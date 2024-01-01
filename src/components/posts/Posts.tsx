"use client";
import { trpc } from "@/app/_trpc/client";
import React from "react";

type post = { id: number; title: string }

const Posts = () => {
  // const data  = trpc.getTodoList.useQuery();
  const posts = trpc.getPosts.useQuery();

  return (
    <div>
      {/* {data.data?.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
        </div>
      ))} */}
      {posts.data?.map((post: post) => {
        return (
          <div key={post.id}>
            <span>{post.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
