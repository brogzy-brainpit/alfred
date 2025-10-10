import Image from 'next/image';
import Background from '../../public/images/service05.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import RubberSection from './RubberSection';
import { Plus } from 'lucide-react';

export default function Section3() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
        ref={container} 
        className='relative flex items-center justify-center min-h-screen bg-slate-500 overflow-hidden'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='absolute  z-[9] top-0 w-full h-full bg-black bg-opacity-75'>

            </div>
        {/* <div className='relative z-10 p-20 mix-blend-difference  text-white w-full h-full flex flex-col justify-between'>
            <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.</p>
            <p className='text-[5vw] uppercase mix-blend-difference'>Background Parallax</p>
        </div> */}
<section className='bgred-600 w-full min-h-full grid grid-rows-2 relative z-10 px5 pt-20 pb-5 lg:py-20 bgblue-600 container mx-auto'>
           <div className='bgpink-500 mx-5  grid grid-cols-6 lg:grid-cols-12 gap-[1.25rem] lg:gap-[2.5rem]'>
        
           <div className="col-span-4 lg:order-last">
            <h2 className='font-custom text-5xl text-white capitalize'>our product</h2>
         </div>
          <div className="col-span-4 hidden lg:block">
            <h2 className='font-custom text-5xl text-white'>
                <span className='text-[#FF0033]'>Soldering products</span>
                <br/>
MS2 Dross Eliminators</h2>
         </div>
         <div className="col-span-4 z-[999]">
            <RubberSection defaultY={[120, 0]}>

<img src='https://www.pkaymetal.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F120277%2F1357x1104%2Ff76df880a3%2Fbarsolder-400-asset-2.png&w=384&q=75'/>
            </RubberSection>
         </div>
           </div>
            <div className='bgpink-900 mx-5 border-t pt-12   grid grid-cols-6 lg:grid-cols-12 gap-[1.25rem] lg:gap-[2.5rem]'>
        
           <div className="col-span-full lg:col-span-4 lg:order-last">
            <h2 className='font-body text-para text-5xl text-white capitalize'>
                Metal is treated inside high temperature furnaces using P. Kay's proprietary processing and recycling techniques.. When the recycling process is complete, these purified solders meet our customer provided specifications.
            </h2>
         </div>
          <div className=" col-span-full lg:col-span-4">
            <div className="font-body flex-1 lg:flex-none m2.5 flex items-center border border-brand-secondary bg-brand-secondary whitespace-nowrap">
 <a href='/' className=' text-white flex w-full justify-between items-center transition-all duration-300 ease-out'>
  <span className="p-4 hidden lg:block">learn more about us</span>
  <span className="inline-fle p-4 block lg:hidden">learn more</span>
  <span className="inline-flex p-4">
  <Plus className="w-5 h-5 p text-white" />
  </span>
 </a>
    </div>
         </div>
         <div className="col-span-4 z-[999]">
         </div>
           </div>
           
        
</section>
                <div className=' fixed top-[-10vh] left-0 h-[120vh] w-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
            <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
            </motion.div>
        </div>
        </div>
    )
}
