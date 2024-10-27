import React from 'react'
import {useState} from 'react'

const Skills = () => {
   
    const[mySkill,setmySkill]=useState([
     
      
      {
        id:1,
        name:'HTML',
        description:'HTML (HyperText Markup Language) is the standard language for creating web pages. It structures content using tags, enabling the design and display of web elements.',
        src:'https://ucarecdn.com/7e3063b1-6d64-4d26-aa44-de2a3426c54c/-/preview/32x32/',
        srcback:'https://ucarecdn.com/700da184-40f7-4663-bdb8-ecd35f31105d/-/preview/300x227/'


      },
      {
        id:2,
        name:'CSS',
         description:'CSS (Cascading Style Sheets) is a language used to style and format HTML content. It controls the layout, colors, fonts, and overall design of web pages.Add design to web page.',
        src:'https://ucarecdn.com/b3b25d84-4248-4003-bfd7-ad0a972e0311/-/preview/32x32/',
       srcback:'https://ucarecdn.com/57ce0aff-17f6-4073-88b8-3b2300e43363/-/preview/300x225/'
      },
      {
        id:3,
       name:'JAVASCRIPT',
       description:'JavaScript is a versatile programming language used to create dynamic, interactive web content. It enables functions like animations, form validation, and real-time updates on web pages.',
        src:'https://ucarecdn.com/24564ef5-2792-44c3-90d8-8a948743d9fa/-/preview/32x32/',
        srcback:"https://ucarecdn.com/c8480af1-9a57-4d0a-819a-f0a4a9a9ed2f/-/preview/300x300/"

      },
      {
        id:4,
        name:'MYSQL',
        description:'MySQL is an open-source relational database management system (RDBMS) that stores, manages, and retrieves data using SQL. It widely used for web applications and data-driven projects.',
        src:'https://ucarecdn.com/ed6263af-04ad-4290-8c06-ff92d0aa9325/-/preview/32x32/',
        srcback:'https://ucarecdn.com/c51024c3-dfe2-4e33-94a7-103148d5acc4/-/preview/300x321/'





      },
      {

        id:5,
        name:'GITHUB',
        description:'GitHub is a web-based platform for version control and collaboration, allowing developers to host, review, and manage code repositories using Git for seamless teamwork and tracking.',
        src:'https://ucarecdn.com/1cea0290-f38a-4c68-825c-a0db4610d34b/-/preview/32x32/',
        srcback:'https://ucarecdn.com/71af54ce-3878-4063-9542-44bf3dfd5830/-/preview/300x300/'    
 
      },
      {
       
        id:6,
        name:'REACT+VITE',
        description:'React with Vite is a fast, modern JavaScript setup combining React component-based UI development with Vite lightning-fast build tool for optimized performance and development.',
        src:'https://ucarecdn.com/3ea03b46-035d-4cef-9a8c-f8140d5753e9/-/preview/32x32/',
        srcback:'https://ucarecdn.com/fce36706-46d2-4d62-9ee6-d5ff7ca4dcee/-/preview/300x227/'




      }




    ]);
     
   

  return (
    <>
    
    <section className='relative h-[1000px]  bg-[url(https://ucarecdn.com/697a5ecf-b406-4d1b-9deb-64090115b52d/-/preview/1000x666/)]'>
    <h2 className='font-mulish font-bold text-white text-5xl text-center leading-normal'><span className='hover:text-lightBlue'>Skills Blog</span></h2>
     <div className='grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-y-10 gap-x-4 relative z-[10] mt-[50px]'>
   {mySkill.map((tech) =>(
    <div key={tech.id} style={{backgroundImage:`url(${tech.srcback})`}} className='p-10 flex flex-col relative bg-white bg-[url({tech.srcback})] bg-cover w-full space-y-2 border bg-no-repeat rounded-sm
          hover:scale-105 transition-all duration-200 '>
            <img src={tech.src} alt="" class="w-10 h-10"></img>
      <h3 class="font-mulish text-bold text-3xl text-lightBlue">{tech.name}</h3> 
      <p class="font-mulish py-3 text-grayText font-bold leading-normal">{tech.description}
</p>
<div class="flex group cursor-pointer items-center">
<a href="" class="font-mulish font-bold text-lightBlue500 py-2 px-1 rounded group-hover:text-grayBlue
transition-all duration-none ">Know More<i class="fa-solid fa-chevron-right px-2"></i></a>


</div>

    </div>
   ))}

</div>
</section>
    </>

  );

};

export default Skills
