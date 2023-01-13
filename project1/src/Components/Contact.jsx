import React from 'react'

function Contact() {
  return (
    <div className="contact">
        <div>
            <h1>Contact Us</h1>
            <form >
                <div>
                    <label>Name</label>
                    <input type="text" placeholder='Enter your name' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder='Enter your message'/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" placeholder='tell something' />
                </div>
                <button type='submit'>send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact