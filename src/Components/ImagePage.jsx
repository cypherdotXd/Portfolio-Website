import { useState } from "react"
import React from 'react'

export default function ImagePage() {
  
	const [hovering, setHoverState] = useState(false);

	const toggleHoverState = () => {
		setHoverState(!hovering);
		console.log('hover');
	};
  
  return (
    <div className={`relative m-4 rounded-3xl h-[20rem] border-2 overflow-hidden`} onMouseEnter={toggleHoverState} onMouseLeave={toggleHoverState}>
      <img src="https://image.winudf.com/v2/image1/Y29tLmRvbHBoaW5nYW1lcy5jcml0aWNhbC5haXJzdHJpa2UuY29tYmF0LnBsYW5lX3NjcmVlbl8wXzE2MzE4Njk1NTZfMDU2/screen-0.webp?fakeurl=1&type=.webp" 
      alt="Image" className={`object-cover relative top-0 h-full w-full transition-transform ${hovering ? 'scale-110' : 'scale-100' }`}/>
      <h1 className='p-6 text-2xl font-bold hover:opacity-50 opacity-0 absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-[#000000] to-slate-50 text-[#ffffff]'>Game 1</h1>
    </div>
  )
}
