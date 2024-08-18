import React, { useState, useEffect } from 'react';
import vg from '../assets/contact copy.avif';
import toast from 'react-hot-toast';
import { delay, motion } from 'framer-motion'; 
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../firebase';
const Contact = () => {
    const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
    const [disableBtn,setDisableBtn] = useState(false);

    const changeHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        console.log(inputs);
    }, [inputs]);

    const submitHandler = async(e) => {
        e.preventDefault(); 
        setDisableBtn(true);
        try{
            await addDoc(collection(db,"contacts"),{
                name:inputs.name,
                email:inputs.email,
                message:inputs.message,
            });
            toast.success("Message Sent Successfully ")
            setDisableBtn(false);
            setInputs({ name: "", email: "", message: "" });
        }catch(error){
            toast.error("Error");
            console.log(error);
            setDisableBtn(false);

        }
       
       
    };


    const animatons={
        form:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            },  
        },
        button:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            }, 
            transition:{
                delay:0.5,   
            }
            
        }
    }
    return (
        <div id='contact'>
            <section>
                <motion.form onSubmit={submitHandler} {...animatons.form}>
                    <h2>Contact Me.</h2>

                    <input 
                        type="text" 
                        name='name' 
                        value={inputs.name} 
                        onChange={changeHandler}  
                        placeholder='Your Name'  
                        required 
                    />
                    <input 
                        type="email" 
                        name='email' 
                        value={inputs.email}  
                        onChange={changeHandler}  
                        placeholder='Your Email'  
                        required 
                    />
                    <input 
                        type="text" 
                        name='message' 
                        value={inputs.message}  
                        onChange={changeHandler} 
                        placeholder='Your Message'  
                        required 
                    />

                    <motion.button className={disableBtn?"disabledBtn":""} disabled={disableBtn} {...animatons.button} type='submit'>Send</motion.button>
                </motion.form>
            </section>
            <aside>
                <img src={vg} alt="Graphics" />
            </aside>
        </div>
    );
};

export default Contact;
