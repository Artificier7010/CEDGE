import React, { useState } from 'react';
import './dummyfrm.scss';

const Dummyfrm = () => {

    const [formData,setFormData]=useState({
        uname:"",
        email:"",
        pass:"",
        desc:""
    })

    const setData=(e)=>{
        const {name,value}=e.target;

        setFormData((preval)=>{
            return{
                ...preval,
                [name]:value
            }

        })

    }

    const addData= async (e)=>{
        e.preventDefault();

        const {uname,email,pass,desc}=formData;

        const res=await fetch("http://localhost:8000/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                uname,email,pass,desc
            })
        });

        const data=await res.json();
        console.log(data);

        if(res.status===400 || !data){
            alert("Error")
        }else{
            alert("Data Added");
        }

    }


  return (
    <div className='dummyform'>
        <form>
            <div className="row">
                <label htmlFor="">Username</label>
                <input type="text" onChange={setData} value={formData.uname} name='uname'/>
            </div>
            <div className="row">
                <label htmlFor="">Email</label>
                <input type="email" onChange={setData} value={formData.email} name='email'/>
            </div>
            <div className="row">
                <label htmlFor="">Password</label>
                <input type="password" onChange={setData} value={formData.pass} name='pass'/>
            </div>
            <div className="row">
                <label htmlFor="">Post Description</label>
                <textarea name="desc" onChange={setData} value={formData.desc} id="" cols="30" rows="10"></textarea>
            </div>
            <div className="row">
                <button onClick={addData}  className='big-btns-theme1'>Lets Go</button>
            </div>
        </form>
    </div>
  )
}

export default Dummyfrm