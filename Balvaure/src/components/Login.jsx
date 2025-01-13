import React, { useRef, useState } from 'react'
import axios from 'axios'

function Login() {

    const [signin,setsignin] = useState(true);
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [error,seterror] = useState("");

    const signinhandle = () =>{
        setsignin(!signin)
    }

    const handlesubmitbutton =async (e) =>{
      e.preventDefault();
      try{
        if(!signin){
            const response = await axios.post('/api/v1/users/register',{
              username:name.current?.value,
              email:email.current?.value,
              password:password.current?.value,
            });
            console.log("signup success:", response.data);
            alert("signup successfully");
        }
        else{
        const response = await axios.post('api/v1/users/login',{
          email:email.current?.value,
          password:password.current?.value,
        });
        console.log("signin success:",response.data);
        alert("signin successfully!");
        }
      }
      catch(err){
        console.log('Error: ',err.response ? err.response.data : err.message);
        seterror("something went wrong");
        alert("something went wrong");
      }
    }

    

    
  return (
    <div className='min-h-screen flex items-center bg-gray-100 justify-center'>

        
            <div className='bg-gray-300 p-8 rounded-lg max-w-md w-full border border-gray-500  text-black'>

                <div className='text-black text-3xl font-semibold text-center mb-6'>{signin ? "Sign In" :"Signup" }</div>

                <form 
                   onSubmit={handlesubmitbutton}
                className='space-y-6'>
               {!signin && ( 
                <div>
                <label htmlFor='name' className='block' >Name-</label>
                <input 
                  ref={name}
                 placeholder='Enter Your Full Name' 
                 className='block px-3 mt-1 py-2 text-black  w-full  border border-gray-600 rounded-md' type="text" />
                </div>
            )}
                <div>
                <label htmlFor='email' className='block'>Email-  </label>
                <input
                name='email'
                ref={email}
                 placeholder='Enter your Email' 

                 className='block mt-1 px-3 py-2 text-black  w-full  border border-gray-600 rounded-md' 
                type="email" />
                </div>


                <div>
                <label htmlFor='password' className='block'>Password-</label>
                <input 
                  ref={password}
                placeholder='Enter your password'
                  className='block mt-1 py-2 px-3 text-black  w-full  border border-gray-600 rounded-md'
                type="password" />

                </div>


                <button
                type='submit'
                className='p-2 w-full rounded-lg px-4 flex text-center items-center text-xl justify-center bg-black text-white '>{signin ? 'Sign IN': " Signup"}</button>
                 
                 <p className='text-center text-red-500'>{error}</p>

                <p className='mt-6 text-center '>
                  {signin ? "Don't have an account?" :"Already have a account?"} 
                  {' '}
                    <button
                    type='button'
                      onClick={signinhandle }
                    className='font-medium'>
                        {signin? "Signup" : " Signin"}
                    </button>

                     </p>
                </form>
            
           

            </div>
    </div>
  )
}

export default Login