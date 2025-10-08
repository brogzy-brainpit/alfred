




























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
import { Cross, Plus } from 'lucide-react'


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
    <div ref={ref} className='relative bg-brand-secondaryy text-white '>
<section className=' px-5 pt-20 pb-5 lg:py-20 bgblue-600 container mx-auto'>

<div className='bg-pink500 grid grid-cols-6 lg:grid-cols-12 gap-[1.25rem] lg:gap-[2.5rem] '>
  <div className='col-span-full lg:sticky lg:top-5   lg:mb-8 lg:col-span-4 bg-red-400'>
    <h2 className="uppercase mb-8 font-custom text-neutral-900 text-5xl leading-[1] lg:leading-[1.1] lg:text-5xl mt-5 flex items-baseline flex-wrap">
 Metal <br/>
Recycling 01
</h2>
    </div> 

    <div className='col-span-full  lg:col-start-5 lg:col-span-8 lg:mb-8 bg-purple-600'>
    <div className=' grid grid-cols-8 gap-4 bg-purple200 '>
    <div className='col-span-full lg:col-span-4'>
    <h2 className="font-body text-neutral-200 text-para leading-[1] lg:leading-[1.1] mt-5 mb-6 flex items-baseline flex-wrap">
 No matter where you are located, P. Kay Metal can handle all of your solder recycling needs.
</h2>

    </div>
     <div className='col-span-full lg:col-span-4 col-start-4'>
    <h2 className="font-custom text-neutral-200 text-4xl leading-[1] lg:leading-[1.1] lg:text-5xl mb-6 flex items-baseline flex-wrap">
 Trust your waste to the largest producer of tin & lead solders in the western United States.
</h2>

    </div>


    </div>

      </div>



     <div className=' bg-red400'>
      <div className='lg:sticky lg:top-1/2  '>

    <div className="col-span-full lg:col-span-4 font-body flex-1 lg:flex-none m-2.5 flex items-center border border-brand-secondary bg-brand-secondary whitespace-nowrap">
 <a href='/' className=' text-white flex w-full justify-between items-center transition-all duration-300 ease-out'>
  <span className="p-4 hidden lg:block">learn more about us</span>
  <span className="inline-fle p-4 block lg:hidden">learn more</span>
  <span className="inline-flex p-4">
  <Plus className="w-5 h-5 p text-white" />
  </span>
 </a>
    </div>
      </div>
    </div> 

     <div className='col-span-full border-t border-neutral-200  lg:col-start-5 grid grid-cols-8 gap-4 bg-purple-600 mb-64'>
    <div className='col-span-full lg:col-span-4'>
    <h2 className="font-custom text-neutral-200 text-5xl leading-[1] lg:leading-[1.1] mt-5 mb-6 flex items-baseline flex-wrap">
 State of Idaho Department of Environmental Quality ID#
</h2>

    </div>
     <div className='col-span-full lg:col-span-4 col-start-4'>
    <h2 className=" break-all font-custom text-neutral-200 text-5xl leading-[1] lg:leading-[0.9] lg:text-[12rem] mt-5 mb-6 flex items-baseline flex-wrap">
 IDR000205476
</h2>

    </div>


    </div>

  </div>



</section>

 </div>
  )
}

export default Section2