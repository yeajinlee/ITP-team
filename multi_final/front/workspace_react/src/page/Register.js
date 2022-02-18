import React from 'react';
import { useForm } from "react-hook-form";


 
const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* 닉네임 */}
                <br />
                <div className='nickname'>
                <input  {...register(
                    "firstName",{
                        required: true,
                        maxLength: 20 
                        })} 
                        />
                </div>
                {/* 이메일 주소 */}
                <br />
                <div className='email'>
                <input {...register(
                    "lastName",{
                        pattern: /^[A-Za-z]+$/i 
                        })}
                        />
                </div>
                {/* 비밀번호 */}
                <br />
                <div className='password' >
                <input {...register("firstName",{
                    required: true,
                    maxLength: 20 
                    })} 
                    />
                </div>
                {/* 비밀번호 확인 */}
                <br />
                <div className='passwordCheck'>
                <input {...register("firstName",{ 
                    required: true,
                    maxLength: 20 
                    })} 
                    />
                </div>
      <input type="submit" />
    </form>
        </div>
    );
};

export default Register;