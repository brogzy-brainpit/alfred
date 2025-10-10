import SlideUpText from '@/effects/SlideUpText'
import React, { useEffect, useRef } from 'react'
// import CustomBtn from './CustomBtn'
// import { ArrowRight, ArrowRightCircle, Globe, Phone, Plane, PlaneIcon, SquareArrowUpRight } from 'lucide-react'
import plane from '../../public/images/plane01.jpg'
import img1 from '../../public/images/service01.png'
import Image from 'next/image'
import ScaleUpContent from '@/effects/ScaleUpContent'
import FadeInText from '@/effects/FadeInText'
import { useTransform,useScroll,motion, useInView } from 'framer-motion'
import { useHeaderColor } from '@/providers/ColorProvider'

// const MotionImage = motion(Image);
function Landing() {
     const sectionRef = useRef(null);
    const SectionInView = useInView(sectionRef, { amount: 0.5 });
    const { setActiveSection } = useHeaderColor();
  
    useEffect(() => {
      if (SectionInView) setActiveSection("landing");
    }, [SectionInView]);

    // const imgRef=useRef(null)
       const textRef3= useRef(null)
        const inView= useInView(textRef3,{once:false,})
    const slideUp = {
  initial: { y: '100%',},
  enter: (index) => ({
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 9,
      delay: 0.09 * index,
    },
  }),
  exit: (index) => ({
    y: '100%',
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 9,
      duration: 0.4,
      delay: 0.09 * index,
    },
  }),
};

    
      // const { scrollYProgress } = useScroll({
      //   target: imgRef,
      //   offset: ["0.5 end", "start 0.3"],
      // })
      // const scale = useTransform(scrollYProgress, [0, 1], ["1.3", "1"])
     const text= ["a", "l", "f" ,"r", "a" ,"d"]
  return (
<div ref={sectionRef} className="border-none single-vimeo-background relative w-full h-screen overflow-hidden single-vimeo-background">
  <iframe
    className="z-[2] absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[100vh] -translate-x-1/2 -translate-y-1/2"
    src="https://player.vimeo.com/video/1038524436?api=1&background=1&autoplay=1&loop=1&muted=1"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
  {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-x z-[5]  min-w-full min-h-full w-[177.77vh] h-[100vh] object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
  <Image width={600} height={700}  className='z-[1] absolute top-0 left-0 h-screen w-screen object-cover' src={'https://alfred.nl/media/pages/home/d2cd6089b6-1712565197/g44a4376-1920x1080-crop-q72.jpg'}/>

  {/* Overlay */}
  <div className=" z-[2] absolute inset-0 bg-black/20"></div>

  {/* Foreground content */}
  <div className=" mix-blend-differenc overflow-hidden w-full flex justify-center bgred-500 absolute bottom-[-10%] lg:bottom-[-32%] left-1/2 right-1/2 z-10 translate-x-[-50%]  min-w-full text-white ">
 <motion.h1
  initial="initial"
  animate="enter"
  exit="exit"
  className="text-center relative font-bold font-custom text-[60vw] lg:text-[50vw] leading-[0.9] tracking-[1] text-white flex gap-0"
>
  {text.map((p, index) => (
      <motion.span
        custom={index}
        variants={slideUp}
        className="inline-flex"
      >
        {p}
      </motion.span>
  ))}
</motion.h1>



  </div>
</div>



  )
}

export default Landing