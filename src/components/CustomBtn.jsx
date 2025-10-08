import Link from 'next/link'
import React, { Children } from 'react'

function CustomBtn({children,href='#',className=' capitalize '}) {
  return (
    <Link href={href} className={`${className} bg-[#45775F] text-white font-body text-sm rounded-full p-[8px] px-[18px] min-w-[120px]`}>
        {children}
    </Link>
  )
}

export default CustomBtn