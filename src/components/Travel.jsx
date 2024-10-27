import React from 'react'
import {useState} from 'react'
const Travel = () => {
  
  const[mySkill,setmySkill]=useState([
     
      
    {
      id:1,
      name:'VARANASI',
      description:'Varanasi, a sacred city in India, is renowned for its ancient temples, ghats along the Ganges River, spiritual significance, and vibrant cultural heritage.',
      // src:'./images/html-5.png',
      src:'https://ucarecdn.com/5f455533-312f-4d4e-a877-70c342740363/-/preview/540x360/'


    },
    {
      id:2,
      name:'MUNNAR',
       description:'Munnar, a picturesque hill station in Kerala, India, is known for its lush tea plantations, misty landscapes, cool climate, and rich biodiversity, attracting nature lovers.',
      // src:'',
     src:'https://ucarecdn.com/269347fc-2310-4092-bc55-1c78e4717a46/-/preview/612x490/'
    },
    {
      id:3,
     name:'RISHIKESH',
     description:'Rishikesh, nestled in the Himalayas, is a spiritual hub in India, famous for yoga, meditation, adventure sports, and the sacred Ganges River flowing through it.',
      // src:'',
      src:"https://ucarecdn.com/f0a911d0-03a6-4f2b-b258-311d0da5f165/-/preview/275x183/"

    },
    {
      id:4,
      name:'SRINAGAR',
      description:'Srinagar, the summer capital of Jammu and Kashmir, is renowned for its stunning Dal Lake, houseboats, Mughal gardens, and breathtaking views of the Himalayas.',
      // src:'',
      src:'https://ucarecdn.com/4befa0c5-eff6-4316-98e0-2184ccf6f23c/-/preview/540x312/'





    },
    {

      id:5,
      name:'KANYAKUMARI',
      description:'Kanyakumari, the southernmost tip of India, is famous for its confluence of three seas, vibrant sunrise and sunset views,  iconic Vivekananda Rock Memorial.',
      src:'https://ucarecdn.com/7f15ef63-bf24-4c3c-a4f5-7aa79fb4e96f/-/preview/675x390/',
      srcback:''    

    },
    {
     
      id:6,
      name:'GOA',
      description:'Goa, a popular coastal destination in India, is known for its beautiful beaches, vibrant nightlife, Portuguese heritage, water sports, and laid-back, tropical vibe.',
      src:'https://ucarecdn.com/1c06e062-bf42-44e7-bb8c-b23554b90486/-/preview/675x390/',
      srcback:''


    }




  ]);
   
 

return (
  <>
  
  <section className='relative h-[1200px]  bg-[url(https://ucarecdn.com/1b91a899-3b5e-4b52-b563-1be9aef5d1e5/-/preview/1000x666/)] bg-repeat-y bg-cover'>
  <h2 className='font-mulish font-bold text-white text-5xl text-center leading-normal'><span className='hover:text-lightBlue'>Travel Blog</span></h2>
   <div className='grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-y-10 gap-x-4 relative z-[10] mt-[50px]'>
 {mySkill.map((tech) =>(
  
   <div key={tech.id}  className='p-10 flex flex-col relative bg-white bg-[url({tech.srcback})] bg-cover w-full space-y-2 border bg-no-repeat rounded-sm
    hover:scale-105 transition-all duration-200 '> 
          <img src={tech.src} alt="" class="w-[452px] h-[200px] mt-[-10px] rounded-md "></img>
    <h3 class="font-mulish font-bold text-3xl text-black">{tech.name}</h3> 
     <p class="font-mulish py-3 text-grayText leading-normal">{tech.description}
</p> 
<div class="flex group cursor-pointer items-center self-end">
<a href="" class="font-mulish font-bold text-white py-2 px-1 pl-4 pr-4 rounded group-hover:text-grayBlue
transition-all duration-none bg-pink-500  self-end">Let's travel</a>


</div>


  </div> 
 ))}

</div>
</section>
  </>

);
}

export default Travel
