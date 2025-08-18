import { useEffect, useState } from "react"   

export default function Posts() {  

    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setPosts(data)
            console.log(posts)
        }

        fetchData()
    }, [])
    return (
        <h1>This is the Posts page</h1>
    )
}
