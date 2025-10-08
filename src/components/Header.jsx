
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion, useSpring, useVelocity, useScroll, useTransform } from "framer-motion";
import HoverText from "@/effects/HoverText";
import FlipTextEffect from "@/effects/FlipTextEffect";
import SlideUpText from "@/effects/SlideUpText";
import Magnetic from "@/common/Magnetic";
import StaggerTextHover from "@/effects/StaggerTextHover";
import { useHeaderColor } from "@/providers/ColorProvider";
import ScaleUpContent from "@/effects/ScaleUpContent";

function Header({activeColor,activebg,menutextt}) {
  const ref = useRef(null);
  const scaleMenuIcon= useRef(null)
   
const scaleMenu= {
    initial: { scale: 0 },
    enter: {
      scale:1,
      transition: { duration: 0.6,delay:1, ease: "easeInOut" },

    },
     exit: {
      scale: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  // ✅ use framer-motion's useScroll, not drei
  const { scrollY } = useScroll();
  const speedRotate = useVelocity(scrollY);
  const scrollMarker = useSpring(speedRotate, {
    stiffness: 120,
    damping: 15,
    mass: 0.3,
  });
  // scale down the crazy values
  const rotation = useTransform(scrollMarker, v => v * 0.09);
// const rotation = useTransform(scrollMarker, [0, 1], [0, 360]);
  const [burgerMenu, setBurgerMenu] = useState(false);

  const Links = [
    { title: "our work", url: "about" },
    { title: "culture", url: "contact" },
    { title: "methods", url: "about" },
  ];

  return (
    <div className="fixed top-[3%] w-full z-50">
      <header
        ref={ref}
        className="container px-5 mx-auto flex justify-center items-center"
        style={{ height: "var(--header-height)" }}
      >
        <div className="mix-blend-difference shadowlg backdropblur-lg  roundedfull w-full flex items-center justify-between py-2 px-2">
          <Link href={"/"} className="overflow-visible  text-center font-custom text-2xl">

            {/* <h2 className={"relative circular font-bold text-white text-4xl leading-[1] flex items-end"}>alfred <span className="absolute bottom-1 -right-[10px] ml-[4px] w-[8px] h-[8px] rounded-full bg-white"></span></h2> */}
       <StaggerTextHover activeColor={activeColor } className="relative circular font-bold text-brand-secondary text-4xl leading-[1] tracking-tighter " text={["a", "l", "f" ,"r", "a" ,"d",'*']}/>
      
 </Link>

          <ul className= " hidden md:flex flex-row gap-6 mx-auto">
            {Links.map(({ title, url }) => (
              <Magnetic>
              <Link scroll={false}
                key={title}
                className="font-bold circular text-white text-para capitalize"
                href={`/${url}`}
              >
            {title}
              </Link>

              </Magnetic>
            ))}
          </ul>

           <Magnetic>
      <motion.div variants={scaleMenu} initial='initial' animate='enter' exit={'exit'} ref={scaleMenuIcon} onClick={(e)=>{setBurgerMenu(true)}} className=" w-[80px] h-[80px] relative cursor-pointer flex items-center justify-center ">     
  <motion.div
     style={{ rotate:rotation}}
      whileHover={{
    rotate: 360,
    transition: {
      repeat: Infinity, // loop forever
      repeatType: "loop", // keeps looping forward
      ease: "linear", // smooth
      duration: 4, // adjust speed
    },
  }}
    className="absolute inset-0 flex items-center justify-center z-0"
  >
    <svg
      className="w-full h-full"
      viewBox="0 0 222 219"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
        <motion.path
        d="M9.92529 157.184L19.2237 136.443L0 124.059L15.332 107.148L0.944644 89.5061L20.8126 78.0891L12.6547 56.9125L35.1085 52.0997L34.0028 29.4685L56.8484 31.7476L62.8776 9.86312L83.8905 18.9881L96.4625 0L113.575 15.086L131.484 0.858976L143.011 20.4471L164.49 12.358L169.318 34.5058L192.259 33.3663L189.908 55.9198L212.079 61.8161L202.785 82.5653L222 94.9449L206.672 111.852L221.06 129.498L201.196 140.907L209.345 162.092L186.891 166.896L188.01 189.536L165.147 187.257L159.118 209.146L138.118 200.016L125.538 219L108.429 203.914L90.5291 218.145L78.9888 198.553L57.5188 206.646L52.6867 184.503L29.7454 185.642L32.0874 163.089L9.92529 157.184Z"
        fill="#ffffff"
      
      animate={{
    fill: activebg,
    // filter: `drop-shadow(0px 0px 12px ${activebg})`
  }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
    </svg>
  </motion.div>

  <motion.h2  animate={{ color: menutextt }}
      transition={{ duration: 0.6, ease: "easeInOut" }} className="pointer-events-none relative z-10 text-brand-secondary text-[16px] font-body font-bold text-center">
    MENU
  </motion.h2>
         
</motion.div>


          </Magnetic>
        </div>
        <MobileMenu Links={Links} burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>

      </header>
    </div>
  );
}



export const menuSlide={
    initial:{
       x: '100%',
        
    }, 
    enter:{
        x:'0%',
     transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]},

    },
     exit:{
        x:'100%',
        transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]},

    },
}
const MobileMenu=({burgerMenu, setBurgerMenu,Links})=>{
    const textAnim={
        initial:{
           opacity: 0,
            
        }, 
        enter:{
            opacity:1,
         transition:{duration:0.5, delay:0.5, ease:[0.76, 0, 0.24, 1]},
    
        },
         exit:{
            opacity:0,
            // transition:{duration:1.5, ease:[0.76, 0, 0.24, 1]},
    
        },
    }
    return <motion.div variants={menuSlide} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" className='z-0 m[10vh] fixed items-center justify-center w-[100%] top-0 left-0 h-screen bg-black'> 

<div className='relative bg-brand-secondary  h-full w-full'>
<Magnetic>
  <div className=' md:flex cursor-pointer absolute top-10 font-body right-10 font-bold text-[20px] shadow-lg bebas text-red-600 bg-white p-4 rounded-full w-[40px] h-[40px] items-center justify-center' onClick={(e)=>{setBurgerMenu(false)}} >
  
x
 
</div>
</Magnetic>

<div className=' bg-slate600  flex justify-center items-center flex-col  h-full'>
{Links.map(({url,title},index)=>{
  return (

  <Link href={url}>
   {/* <motion.h1  variants={textAnim} animate={burgerMenu?"enter":"exit"} initial="initial" exit="exit" onClick={(e)=>{setBurgerMenu(false)}} className=' font-custom text-heading2 font-bold uppercase heading-hover'>About</motion.h1>  */}
 <SlideUpText delay={0.1*index} once={false} text={title} className=' font-custo circular text-white  text-footer font-bold uppercase heading-footer'/>
  </Link>
  )
})}
    

</div>
</div>

    </motion.div>
}
export default Header
