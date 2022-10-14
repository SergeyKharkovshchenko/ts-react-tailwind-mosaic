import {Icon} from '../components/Icon'
import {Loader} from '../components/Loader'
import {Modal} from '../components/Modal'
import {ErrorMessage} from '../components/ErrorMessage'
import { useEmails } from '../hooks/emails'
import { iconsData } from '../data/icons'
import {CreateIcon} from '../components/CreateIcon'
import { IIcon } from '../models'
import { useContext, useState } from 'react'
import { ModalContext } from '../Context/ModalContext'
import React from 'react'


export function IconsPage () {
    
    const date = new Date();
    const {loading, error, sendUserEmail} = useEmails ();
    const icons = iconsData ;
    const {modal, open, close} = useContext (ModalContext)
  
    const createHandler = (userEmail: string) => {
      close()
      sendUserEmail(userEmail)
    }

    const[state, setState] = useState('')

    const openModal = (icon: IIcon) => {
      open()
      setState(icon.title)
    }
    
    return (
     <div className='container mx-auto  pt-5 flex flex-row w-auto'>
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      {icons.map((icon: IIcon) => <Icon icon={icon} onClick={() => openModal(icon)} key={date.getTime()*Math.random()}/>)}
      {modal && <Modal title={state} onClose={close}>
      <CreateIcon onCreate = {createHandler} key={date.getTime()*Math.random()}/>
      </Modal>}
     </div>
    );
  
}


  