
import SlideUpText from '@/effects/SlideUpText'
import React, { useEffect, useRef } from 'react'
import ScaleUpContent from '@/effects/ScaleUpContent'
import FadeInText from '@/effects/FadeInText'
import CustomArrow from './CustomArrow'
import { motion, useInView} from 'framer-motion'
import RubberSection from './RubberSection'
import SnapCarousel from './embla/EmblaCarousel';
import StaggerText from '@/effects/StaggerText'
import { useHeaderColor } from '@/providers/ColorProvider'


function Section2() {
   const ref = useRef(null);
  // const inView = useInView(ref, { amount:0.7});
  // const inView = useInView(ref);
    const inView = useInView(ref, { amount:1});
  
  const { setActiveSection } = useHeaderColor();

  useEffect(() => {
    if (inView) setActiveSection("Section2");
  }, [inView]);
  const texts=[
    {text:'Individual Coaching',
      url:'#',img:'/images/service01.png',y:-50,initialY:-10
    }, {text:'Group Coaching',
      url:'#',img:'/images/service02.png',y:-80,initialY:0
    }, {text:'Corporate Group Coaching',
      url:'#',img:'/images/service03.png',y:-120,initialY:40
    }
  ]
  return (
    <div ref={ref} className='bgwhite py-[12vh] w-full min-h-[60vh]'>
      <div className='container mx-auto '>

   <RubberSection defaultStart={["start 0.89", "0.7 start"]} defaultY={[0, -100]} >
       <section className='flex justify-center my-4 w-full h-full  gap-4'>
      <StaggerText initialColor={'#FF0033'} color={'#FF0033'} once={false} className=' text-brand-secondary items-center justify-center  text-heading2 font-custom  text-center max-w-[80vw] gap-[5px] leading-none' text={'recent work'.split('')}/>
      </section>
     </RubberSection>
     <SnapCarousel/>

      <section className='hidden md:block mt-10 w-full h-full  gap-6'>
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2  w-full">
  {/* Left side - stacked items */}
  {texts.map(({text,url,img,y,initialY},index)=>{

     return (
   <RubberSection defaultStart={["start 0.89", "0.7 start"]} defaultY={[initialY, y]} >
        <div className="cursor-pointer overflow-hidden relative w-full py-10 px-2 h-[300px] rounded-xl items-start justify-end flex gap-4 flex-col">
  {/* Background image */}
  <motion.img
    whileHover={{ scale: 1.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    src={img}
    className="absolute inset-0 object-cover w-full h-full z-0"
  />

  {/* Overlay content */}
  <div className="relative z-10 flex flex-col gap-4">
    <SlideUpText
      duration={0.5}
      delay={0.04}
      className="text-white bebas text-para leading-para uppercase"
      text={text}
    />
    <CustomArrow href={url} />
  </div>
</div>
   </RubberSection>

    )
   
  })}
         
          
  </div>


      </section>
      
      </div>
    </div>
  )
}

export default Section2