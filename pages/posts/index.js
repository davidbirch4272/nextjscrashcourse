import { useEffect, useState } from "react";

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      return {
        props: { 
            posts: data 
        }
      }
}

export default function Posts({posts}) {
  //    const [posts, setPosts] = useState([]);
  //    useEffect(() => {
  //    const fetchData = async () => {
  //    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //    const data = await res.json();
  //    setPosts(data);
  //    };

  //    fetchData();
  //    }, []);

  //    useEffect(() => {
  //    console.log(posts);
  //    }, [posts]);

  return (
    <>
      <h1>This is the Posts page</h1>
      {posts?.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </>
  );
}
