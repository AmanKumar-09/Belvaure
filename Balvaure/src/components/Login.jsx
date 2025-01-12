import React, { useState } from 'react'

function Login() {

    const [signin,setsignin] = useState(true);

    const signinhandle = () =>{
        setsignin(!signin)
    }

    
  return (
    <div className='min-h-screen flex items-center bg-gray-100 justify-center'>

        
            <div className='bg-gray-300 p-8 rounded-lg max-w-md w-full border border-gray-500  text-black'>

                <div className='text-black text-3xl font-semibold text-center mb-6'>{signin ? "Sign In" :"Signup" }</div>

                <form onClick={(e) =>{
                    e.preventDefault();
                }} className='space-y-6'>
               {!signin && ( 
                <div>
                <label htmlFor='name' className='block' >Name-</label>
                <input placeholder='Enter Your Full Name' className='block px-3 mt-1 py-2 text-black  w-full  border border-gray-600 rounded-md' type="text" />
                </div>
            )}
                <div>
                <label htmlFor='email' className='block'>Email-  </label>
                <input placeholder='Enter your Email' 
                 className='block mt-1 px-3 py-2 text-black  w-full  border border-gray-600 rounded-md' 
                type="email" />
                </div>


                <div>
                <label htmlFor='password' className='block'>Password-</label>
                <input placeholder='Enter your password'
                  className='block mt-1 py-2 px-3 text-black  w-full  border border-gray-600 rounded-md'
                type="password" />

                </div>


                <button className='p-2 w-full rounded-lg px-4 flex text-center items-center text-xl justify-center bg-black text-white '>{signin ? 'Sign IN': " Signup"}</button>
                
                <p className='mt-6 text-center '>{signin ? "Don't have an account?" :"Already have a account?"} {' '}
                    <button
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