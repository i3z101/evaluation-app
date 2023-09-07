import { GetServerSideProps } from 'next'
import { EventHandler, useEffect, useState } from 'react'

export default function Home() {  

  // const generatePDF = async() => {
  //   const data = await fetch("/api/hello", {
  //     method: "POST",
  //     body: JSON.stringify(formValue),
  //     headers: {
  //       "accepted": "application/json",
  //       "content-type": "application/json"
  //     }
  //   })
  //   const response = await data.json()
  //   setFileName(response.fileName)
  // }

  return (
    <main>
     
    </main>
  )
}


export const getServerSideProps: GetServerSideProps = async (req)=> {
  return {
    redirect: {
      destination: "/create-terms-of-engagement",
      statusCode: 302
    }
  }
}