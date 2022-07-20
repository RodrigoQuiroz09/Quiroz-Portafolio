/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {MdMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const ContactOption = ({contactOptions,icon}) => {

    const GetIcon=()=>{
        return(
            icon === 0 ? <MdMailOutline className='contact__option-icon'/> : 
            icon === 1 ? <RiMessengerLine className='contact__option-icon'/> :
            icon === 2 ? <BsWhatsapp className='contact__option-icon'/> :
            null
        )
    }

  return (
    <article className='contact__option'>
        <GetIcon/>
      <h4>{contactOptions.type}</h4>
      <h5>{contactOptions.info}</h5>
      <a href={contactOptions.ref} target="_blank">Send a Message</a>
    </article>
  )
}

export default ContactOption