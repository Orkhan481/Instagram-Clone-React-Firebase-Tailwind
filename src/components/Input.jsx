import React, { useEffect, useRef, useState } from 'react'

const Input = ({label, type = 'text', ...props}) => {

    const [show, setShow] = useState(false)
    const [inputType, setType] = useState(type)
    const inputRef = useRef()

    useEffect(()=>{
  if(show){
    setType('text')
    inputRef.current.focus()
  }
  else if(type === 'password'){
    setType('password')
    inputRef.current.focus()
  }
    },[show])
  return (
    <label className="block relative">
              <input ref={inputRef} type={inputType} className="w-full h-[39px] pr-12 text-xs px-2 bg-zinc-50 border focus:border-gray-400 rounded-sm outline-none peer valid:pt-[10px] group" required {...props}/>
              <small className="text-xs text-gray-500 cursor-text pointer-events-none absolute top-[50%] left-[9px] -translate-y-[50%] transition-all peer-valid:top-[10px]">{label}</small>
              {type === "password" && props?.value && (
               <button 
               type='button'
               onClick={()=>setShow(show => !show)}
               className='h-full absolute top-0 right-0 flex items-center text-sm font-semibold pr-2'>
                {show ? "Hide" : "Show"}
                </button>
                )}
    </label>

  )
}

export default Input