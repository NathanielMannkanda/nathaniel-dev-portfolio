import { useState } from 'react'
import emailjs from '@emailjs/browser'

import './ReachMe.css'

export const ReachMe = () => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const sendEmail = async (e) => {
    e.preventDefault()

    if (!message.trim()) return

    setLoading(true)
    setStatus(null)

    try {
      await emailjs.send(
        'service_jmidaet',
        'template_qvnoz8h',
        {
          email,
          message,
        },
        '3OwFHv6oeBkDD7e31'
      )

      
      
      setStatus({
        type: 'sucess',
        text: 'Message sent successfully!'
      })


      setEmail('')
      setMessage('')
    } catch (error) {
      console.error(error)

      setStatus({
      type: 'error',
      text: 'Failed to send message. Please try again.'
    })
    }

    setTimeout(() => {
      setStatus({text: " "})
    }, 3000);
    
    setLoading(false)
  }

  return (
    <div className='flex flex-col flex-1 border-3 rounded-md w-full h-auto p-2.5 min-w-100 max-w-175 mt-5'>
      <h1 className='text-md border-b pb-2'>
        You've made it this far, let's talk.
      </h1>

      <h2 className='text-sm text-gray-400 mb-2 mt-2'>
        Send me a message
      </h2>

      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Your email'
        className='w-full border-2 rounded-md p-2 mb-3'
      />

      <form onSubmit={sendEmail}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Tell me about your project, job opportunity, or just say hello...'
          className='w-full h-28 border-2 rounded-md p-2'
        />

        <button
          type='submit'
          disabled={loading}
          className='mt-3 px-4 py-2 rounded-md border hover:bg-white hover:text-black transition cursor-pointer'
        >
          {loading ? 'Sending...' : 'Send Message'}

        </button>

        {status && (
          <div
            className={`mt-3 text-sm ${status.type === 'success'
                ? 'text-gray-500'
                : 'text-gray-500'
              }`}
          >
            {status.text}
          </div>
        )}
      </form>
    </div>
  )
}