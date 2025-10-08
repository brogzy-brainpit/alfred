import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView} from 'framer-motion'
import RubberSection from './RubberSection'
import StaggerText from '@/effects/StaggerText'
import { useHeaderColor } from '@/providers/ColorProvider'
import SlideUpText from '@/effects/SlideUpText'
import { ArrowRightToLine, ArrowUpWideNarrow, Play } from 'lucide-react'
import ScaleUpContent from '@/effects/ScaleUpContent'
import SlideUpElement from '@/effects/SlideUpElement'


function Section1() {
  //  const ref = useRef(null);
  // const inView = useInView(ref, { amount:0.4});
  // const inView = useInView(ref, { amount:0.9});
  // const inView = useInView(ref);const ref = useRef(null);
//  const ref = useRef(null);
 const ref = useRef(null);
  const { setActiveSection } = useHeaderColor();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Create an IntersectionObserver with fine-grained thresholds
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        if (ratio >= 0.9) {
          // Scrolling down — mostly visible
          setActiveSection("Section1");
          setIsInView(true);
        } else if (ratio >= 0.1 && !isInView) {
          // Scrolling up — just 10% visible from bottom
          setActiveSection("Section1");
          setIsInView(true);
        } else if (ratio === 0) {
          // Fully out of view
          setActiveSection("default");
          setIsInView(false);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // [0, 0.1, 0.2, ... 1.0]
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [setActiveSection, isInView]);
  
 
  return (
 <div ref={ref} className='relative bg-[#f5cdd5] '>
<section className='grid grid-rows-2 min-h-[70vh] lg:min-h-screen px-5 pt-20 pb-5 lg:py-20 bgblue-600 container mx-auto'>


<div className='bg-pink500 grid grid-cols-6 lg:grid-cols-12 gap-2 '>
  <div className='col-span-full  lg:col-start-6'>
    <motion.div className='origin-left h-[1px] lg:h-[2px] bg-neutral-900 w-full'  initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{ once: false }} transition={{duration:1,ease:'easeOut',delay:0.5}}>

    </motion.div>
    <h2 className="font-custom text-neutral-900 text-2xl leading-[1] lg:leading-[1.1] lg:text-5xl mt-5 mb-6 flex items-baseline flex-wrap">
  <SlideUpElement gap='6px' once={false} >
    <span className="inline-block w-[0.7em] h-[0.7em] mr-2 align-baseline translate-y-[0.05em]">
      <img
        src="/images/rotate.png"
        className="w-[0.7em] h-[0.7em]"
        style={{ animation: "spin 3s linear infinite" }}
        alt="rotate icon"
      />
    </span>
    {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita sed quos corporis possimus iste, nisi quas ducimus unde ipsum.'.split(' ').map((word)=>{
      return (
    <span className=''>{word}</span>

      )
    })}
  </SlideUpElement>
</h2>


    </div>
  </div>



<div className='bg-purple600 grid grid-cols-6 lg:grid-cols-12 gap-2    borde'>
<div className='col-span-full lg:col-span-8'>

<div className='flex flex-wrap  bg-slate800'>
   {/* button 001 */}
  <SlideUpElement delay={0.2} margin='-130px' gap='4px' once={false} >
     <div className="font-body flex-1 lg:flex-none m-2.5 flex items-center border border-brand-secondary bg-brand-secondary whitespace-nowrap">
 <a href='/' className=' text-white flex w-full justify-between items-center transition-all duration-300 ease-out'>
  <span className="p-4 hidden lg:block">learn more about us</span>
  <span className="inline-fle p-4 block lg:hidden">learn more</span>
  <span className="inline-flex p-4">
  <ArrowRightToLine className="w-5 h-5 p text-white" />
  </span>
 </a>
    </div>
     {/* button 002 */}
<div className="font-body m-2.5 flex items-center border border-neutral-900 bg-transparent whitespace-nowrap">
 <a href='/' className='text-neutral-900 flex w-full justify-between items-center transition-all duration-300 ease-out'>
  <span className="inline-fle p-4 lg:block hidden">play video</span>
  <span className="inline-flex p-4">
  <Play className="w-5 h-5 text-neutral-900" />
  </span>
 </a>
</div>
</SlideUpElement>

</div>
</div>


  <h2 className='col-span-full lg:col-span-4 sm:col-start6 self-end bg-slate600 flex justify-end '>
  <SlideUpText duration={0.40} delay={0.1} once={false} className={'font-body text-neutral-900 text-para'} text={'Copyright© 2021-2031'}/>
  </h2>
  </div>

</section>

 </div>

  )
}

export default Section1


