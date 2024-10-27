import React, { useState,useEffect } from "react";

function App() {
 
  const [Post, setPost] = useState([]);
  const [newPost, setNewPost] = useState("");

   
useEffect(() =>{ 
  const Post =JSON.parse(localStorage.getItem("Post")) 

  if(Post && Post.length>0){ 
    setPost(Post) 
  } 
},[]) 

useEffect(()=>{ 
  localStorage.setItem("Post",JSON.stringify(Post)) 
},[Post]) 

 
  const handleInputChange = (e) => {
    setNewPost(e.target.value);
  };

 
  const addPost = () => {
    
      setPost([...Post, newPost]);
      setNewPost("");
    
  };

  const deletePost = (id) => {
    const updatedPost = Post.filter((_, taskIndex) => taskIndex !== id);
    setPost(updatedPost);
  };

  return (
    <div>
           <div className="bg-[#172842] min-h-screen py-8"> 
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-lightBlue500"> 
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Post</h1> 
      <div>
        <input
          type="text"
          value={newPost}
          onChange={handleInputChange}
          placeholder="Add a new post"
          className="z-[10] text-black text-bold"
        />
       
        <button onClick={addPost} className="mx-[9px]">Add Post</button>
      </div>
      <div>
      {Post.map((task, id) => (
          <div key={id}>
            {task} 
            <button onClick={() => deletePost(id) } className="mx-[9px]" >Delete</button>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
