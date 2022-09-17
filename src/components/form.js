import React from 'react'
import useInput from './customhook/useInput'
function form() {
    const [firstName, bindFirstName, resetname] = useInput('')
    const [email,bindEmail,resetEmail]=useInput('')
    const [contactNo, bindContact, resetContact]=useInput('')
    const [message, bindMessage, resetMessage]= useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} You Entered Email is: ${email} Your Provided Contact :${contactNo} Yur Valuable Message: ${message}`)
        resetname()
        resetEmail()
        resetContact()
        resetMessage()
        // firstName()
    }
    return (
        <div class='form-contianer cover'>
            <form id='form' class='form flex-form' onSubmit={submitHandler} >
                <h1>
                    Enter your Details in the section
                </h1>
                <div class='flex-form'>
                    <label htmlFor="">Enter your Full Name</label>
                    <input required {...bindFirstName} type="text" placeholder='Enter Your Name' />
                </div>
                <div class='flex-form'>
                    <label htmlFor="">Enter your Email</label>
                    <input required  {...bindEmail} type="Email" placeholder='Enter Your Your' />
                </div>
                <div class='flex-form'>
                    <label htmlFor="">Enter your Contect No</label>
                    <input required {...bindContact} type="numeric" placeholder='Enter Your Contact' />
                </div>
                {

                    // <div class='flex-form form-check'>
                    // <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                    // First radio
                    // <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                    // second radio
                    // <label class="form-check-label" for="gridRadios1">
                    
                    
                    // </label>
                    // </div>
                }
                <div class='flex-form'>
                    <label htmlFor="">Enter Message</label>
                    <input required {...bindMessage} type="Message-100" placeholder='Write Somthing' />
                </div>
                <button class='submit-btn'>Submit</button>
            </form>
        </div>
    )
}

export default form