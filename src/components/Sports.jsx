import React from 'react'
import {useState} from 'react'

const Sports = () => {
 
   
    const[mySkill,setmySkill]=useState([
     
      
      {
        id:1,
        name:'CRICKET',
        description:'Cricket is a popular bat-and-ball sport played between two teams, known for its strategic gameplay, varying formats, passionate fan base, and rich international and domestic history.',
        src:'https://ucarecdn.com/021f644b-475f-4672-b90a-90269aacd17e/-/preview/275x183/'
        


      },
      {
        id:2,
        name:'FOOTBALL',
         description:'Football, the world most popular sport, is a fast-paced game played between two teams, known for its global appeal, passionate fans, and thrilling goals and competitions.',
        src:'https://ucarecdn.com/0bc9308b-fb70-40ee-af81-1527ac317b14/-/preview/862x575/',
       
      },
      {
        id:3,
       name:'HOCKEY',
       description:'Hockey, a dynamic team sport played on ice or field, involves fast-paced action, strategic play, and skilled stick handling, popular globally for its intensity and excitement.',
        src:'https://ucarecdn.com/39d292c5-946e-4ff8-b418-58a46bbcd6dd/-/preview/300x168/',
        

      },
      {
        id:4,
        name:'JAVELIN THROW',
        description:'Javelin throw is a track and field event where athletes launch a spear-like javelin for maximum distance, showcasing strength, technique, and explosive speed.',
        src:'https://ucarecdn.com/0df4890a-c69e-4b53-8eec-a8cda67451c0/-/preview/300x168/',
        





      },
      {

        id:5,
        name:'VOLLEYBALL',
        description:'Volleyball is a dynamic team sport where two teams score points by hitting a ball over a net, emphasizing teamwork, strategy, and athleticism.',
        src:'https://ucarecdn.com/ae1c0314-b6fe-4521-b280-240d06a57a02/-/preview/300x168/',
          
 
      },
      {
       
        id:6,
        name:'BASKETBALL',
        description:'Basketball is a fast-paced team sport played on a court, where players score by shooting a ball through the opponent hoop, emphasizing agility and strategy.',
        src:'https://ucarecdn.com/78bb5cac-41e3-457f-ad3f-4fa99a9bd86d/-/preview/300x168/',
        


      }




    ]);
     
   

  return (
    <>
    
    <section className='relative h-[1300px]  bg-[url(https://ucarecdn.com/f33cb3c5-510e-483c-b216-def9b998024d/-/preview/1000x360/)] bg-cover'>
    <h2 className='font-mulish font-bold text-white text-5xl text-center leading-normal'><span className='hover:text-lightBlue'>Sports Blog</span></h2>
     <div className='grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-y-10 gap-x-4 relative z-[10] mt-[50px]'>
   {mySkill.map((tech) =>(
    <div key={tech.id}  className='p-10 flex flex-col relative bg-white bg-[url({tech.srcback})] bg-cover w-full space-y-2 border bg-no-repeat rounded-sm
          hover:scale-105 transition-all duration-200 '>
            <img src={tech.src} alt="" class="w-[452px] h-[200px] rounded-sm"></img>
      <h3 class="font-mulish font-bold text-3xl text-black self-center">{tech.name}</h3> 
      <p class="font-mulish py-3 text-grayText leading-normal">{tech.description}
</p>
<div class="flex group cursor-pointer self-center">
<a href="" class="font-mulish font-bold text-white py-2 px-2 rounded group-hover:text-grayBlue 
transition-all duration-none bg-[#902370]">Explore</a>


</div>

    </div>
   ))}

</div>
</section>
    </>

  );

};


export default Sports
