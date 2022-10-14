import axios, {AxiosError} from 'axios';
import React, {useEffect, useState} from 'react';


export function useEmails (){

    const [userEmail, setuserEmail] = useState ('');
    const [loading, setLoading] = useState (false)
    const [error, setError] = useState ('')

    function sendUserEmail (userEmail: string) {
      setuserEmail(userEmail)
    }
  
  function sendEmailAddress () {
    
  try{
    setError('')
    setLoading (true)  
    Email.send({
              SecureToken: "8d8ec6a1-ace9-4718-a935-0308c89f375e",
              To: 'kharkovchenko@mail.ru',
              From: "kharkovchenko@gmail.com",
              Subject: "Информация от Cube-mosaic-TS-React",
              Body: userEmail
          })
          // .then(function () {
          //     alert("Email successfully sent")
          // });
    // const response = await axios.get<>('...');
    // setIcons(response.data)
    setLoading (false)
  } catch (e: unknown) {
    const error = e as AxiosError
    setLoading (false)
    setError (error.message)
  }
  }
  
  useEffect (() => {
    sendEmailAddress();
  }, [])
  
return {userEmail, error, loading, sendUserEmail}

}