import { useEffect, useRef, useState } from "react";
import {FaFacebookSquare} from 'react-icons/fa'
import Input from "./components/Input";

function App() {
  
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const enable = username  && password


  const ref = useRef();
  useEffect(() => {
		let images = ref.current.querySelectorAll('img'),
			total = images.length,
			current = 0
		const imageSlider = () => {
			if (current > 0) {
				images[current - 1].classList.add('opacity-0')
			} else {
				images[total - 1].classList.add('opacity-0')
			}
			images[current].classList.remove('opacity-0')
			if (current === total - 1) {
				current = 0
			} else {
				current += 1
			}
		}
		imageSlider()
		let interval = setInterval(imageSlider, 3000)
		return () => {
			clearInterval(interval)
		}
	}, [ref])

  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center gap-x-8">
      <div className="w-[380px] h-[581px] bg-login-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px] relative hidden md:block">
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[16px]" ref={ref}>
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
            alt=""
          />
        </div>
      </div>
 <div className="grid gap-y-2">
      <div className="w-[350px] border p-[40px] pt-[40px] pb-5 border bg-white">
       
        <a href="#" className="flex justify-center mb-8">
          <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"/>
        </a>
        <form className="grid gap-y-1.5">

          <Input type="text" value={username}  onChange={e=> setUsername(e.target.value)} label="Phone number, username or email" />
          <Input type="password" value={password}  onChange={e=> setPassword(e.target.value)} label="Password" />
           

            <button className="w-full h-[30px] bg-brand text-white font-semibold text-sm rounded mt-1.5 disabled:bg-opacity-50" type="submit" disabled={!enable}>Log In</button>
            
            <div className="w-full flex items-center opacity-70 mt-3">
              <span className="w-full h-[1px] bg-gray-500"></span>
              <smmall className="text-sm font-semibold mx-2">OR</smmall>
              <span className="w-full h-[1px] bg-gray-500"></span>
            </div>

            <a className=" w-full flex gap-x-2 items-center justify-center mt-3 text-facebook">
              <FaFacebookSquare size={20} style={{color:"brand"}}/>
              <span className="text-sm font-medium">Login with Facebook</span>
              
            </a>

              <span className="text-facebook text-xs opacity-70 flex justify-center mt-2">Did you forget your password?</span>
        </form>
        
        
      </div>
      <div className="w-[350px] flex justify-center items-center gap-x-1 bg-white border p-6">
        <h5 className="text-sm">Don't have an account? </h5>
        <a className="text-brand text-sm font-medium" href="#">Register</a>
      </div>

      <span className="flex justify-center mt-2 opacity-75 text-sm">Download the application.</span>

      <div className="flex justify-center gap-x-2 mt-1.5">
        <img className="h-[40px] w-[134.28px]" src="https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png"/>
        <img className="h-[40px] w-[110.76px]" src="https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png"/>
      </div>
      </div>

    </div>
  );
}

export default App;
