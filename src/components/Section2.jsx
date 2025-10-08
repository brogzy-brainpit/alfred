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
import Image from 'next/image'
import SlideUpElement from '@/effects/SlideUpElement'
import EmblaCarousel from './embla/EmblaCarousel'


function Section2() {
   const ref = useRef(null);
  // const inView = useInView(ref, { amount:0.7});
  // const inView = useInView(ref);
    const inView = useInView(ref, { amount:1});
  
  const { setActiveSection } = useHeaderColor();

  useEffect(() => {
    if (inView) setActiveSection("Section2");
  }, [inView]);
const slides =[
    {text:'Individual Coaching',reverse:false,
      url:'#',img:'/images/service01.png',y:-70,desc:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus officiis "
    }, {text:'Group Coaching',reverse:true,
      url:'#',img:'/images/service02.png',y:-120,desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    }, {text:'Corporate Group Coaching',reverse:false,
      url:'#',img:'/images/service03.png',y:-170,desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, hic harum. Laboriosam"
    }
  ]
  return (
    <div ref={ref} className='relative bg-brand-secondary text-white '>
<section className=' px5 pt-20 pb-5 lg:py-20 bgblue-600 container mx-auto'>

<div className=' grid grid-cols-6 lg:grid-cols-12 gap-[1.25rem] lg:gap-[2.5rem] '>
  <div className='px-5 bg-pink500 col-span-full lg:sticky lg:top-5   lg:mb-64 lg:col-span-4 bgred-400'>
    <h2 className="uppercase mb-8 font-custom text-neutral-200 text-5xl leading-[1] lg:leading-[1.1] lg:text-5xl mt-5 flex items-baseline flex-wrap">
 Metal <br/>
Recycling 01
</h2>
    </div> 

    <div className='col-span-full  lg:col-start-5 lg:col-span-8 lg:mb-64 bgpurple-600'>
    <div className='px-5 grid grid-cols-8 gap-4 bg-purple200 '>
    <div className=' col-span-full lg:col-span-4'>
    <h2 className="font-body text-neutral-200 text-para leading-[1] lg:leading-[1.1] mt-5 mb-6 flex items-baseline flex-wrap">
 No matter where you are located, P. Kay Metal can handle all of your solder recycling needs.
</h2>

    </div>
     <div className='col-span-full lg:col-span-4 col-start-4'>
         <h2 className="font-custom text-neutral-200 text-4xl leading-[1] lg:leading-[1.1] lg:text-5xl mb-6 flex items-baseline flex-wrap">
    <SlideUpElement margin='-230px' gap='6px' >
    {'Trust your waste to the largest producer of tin & lead solders in the western United States.'.split(' ').map((word)=>{
      return (
    <span className=''>{word}</span>
      )
    })}
  </SlideUpElement>

</h2>

    </div>


    </div>
      </div>

 <div className='px-5 lg:col-span-4 col-span-full lg:row-start-2 lg:col-start-1 bgred-400'>
      <div className='lg:sticky lg:top-1/2'>
      <ScaleUpContent once={true}>
    <div className="col-span-full lg:col-span-4 font-body flex-1 lg:flex-none m2.5 flex items-center border border-[#000000] bg-[#000000] whitespace-nowrap">
 <a href='/' className=' text-white flex w-full justify-between items-center transition-all duration-300 ease-out'>
  <span className="p-4 hidden lg:block">learn more about us</span>
  <span className="inline-fle p-4 block lg:hidden">learn more</span>
  <span className="inline-flex p-4">
  <Plus className="w-5 h-5 p text-white" />
  </span>
 </a>
    </div>

      </ScaleUpContent>
      </div>

    </div>
      

     <div className='col-span-full border-t border-neutral-200  lg:col-start-5 grid grid-cols-8
      gap-4 bg-purple600 mb-64'>


    <div className='px-5 col-span-full lg:col-span-4'>
    <h2 className="font-custom text-neutral-200 text-5xl leading-[1] lg:leading-[1.1] mt-5 mb-6 flex items-baseline flex-wrap">
 State of Idaho Department of Environmental Quality ID#
</h2>

    </div>
     <div className='px-5 col-span-full lg:col-span-4 col-start-4'>
    <h2 className=" break-all font-custom text-neutral-200 text-[8rem] leading-[1] lg:leading-[0.9] lg:text-[12rem] mt-5 mb-6 flex items-baseline flex-wrap">
 {/* IDR000205476 */}
 <FadeInText className = 'gap-[0px]' text={'I D R 0 0 0 2 0 5 4 7 6'}/>  
</h2>

    </div>
     <div className='bg-blue600 col-span-full'>
<EmblaCarousel>
  {slides.map(({img,text,url,y,desc},index) => (
              <div className="embla__slide" key={index}>
                <div className="rounded-md h-full overflow-hidden">
                  <div className="embla__parallax__layer relative w-full h-full flex justify-center">
               
                <ImgSection img={img} title={text} desc={desc}/>
                  </div>
                </div>
              </div>
            ))}
</EmblaCarousel>

    </div>
    <div className=' lg:block hidden bg-blue600 col-span-full'>

 {slides.map(({img,text,url,y,desc,reverse},index) => (
              
                <ImgSection reverse={reverse} img={img} title={text} desc={desc}/>
                
            ))}
{/* <ImgSection img={'/images/service01.png'} title='environmentally friendly'/>
<ImgSection reverse img={'/images/service02.png'} title='processing & testing'/>
<ImgSection img={'/images/service03.png'} title='treating & recycling'/> */}
    </div>



    </div>

  </div>



</section>

 </div>
  )
}

function ImgSection({reverse,img,desc,title}){
const variants={
  initial:{
    scaleY:1,y:20,opacity:0
  },
  enter:{scaleY:1,y:0,opacity:1},
  exit:{scaleY:1,y:20,opacity:0}
}
const imgInview = useRef(null)
const inview = useInView(imgInview,{once:true})
  return (
    <div className='bg-green700'>
      <div className={`${ reverse?'lg:flex-row-reverse':''} lg:flex-row flex-col flex w-full justify-between bg-slate400`}>
       <div   className='relative lg:w-[50%] w-full overflow-hidden '>
        <motion.img transition={{duration:0.8,delay:0.1,ease:"easeInOut"}} animate={inview?'enter':''} ref={imgInview} variants={variants} initial='initial'exit='exit' className=' lg:h-[500px] h-[300px] w-full object-cover' src={img} alt='img'/>  
       </div>
     <div className=' my-4 lg:my-0 relative lg:w-[50%] flex justify-between  flex-col lg:px-4 lg:pb-4 bg-red600'>
      <h2 className={` ${reverse?'lg:text-right pt-2':'text-left'} capitalize font-custom text-neutral-200 text-5xl leading-[1] lg:leading-[1.1] lg:text-5xl`}>
      randomized <br/> headline
        </h2>
      <p className='font-body text-para leading-tight '>
       {desc}
        </p>
     </div>
      </div>
    </div>
  )
}
export default Section2