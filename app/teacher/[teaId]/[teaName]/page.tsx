import React from 'react'

interface PageParams {
    params: {
        teaId: string;
        teaName: string;
    }
}

export default async function Student({params}: PageParams) {

    // เอาข้อมูลทราส่งมาเก็บในตัวแปรเพื่อในใช้ Compenent
    const {teaId, teaName} = await params;

  return (
    <>
        <h1 className="text-center font-bold mt-10">Welcome To SAU</h1>
        <h3>
            ID : {teaId}
            <br />
            Name : {teaName}
        </h3>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque doloribus pariatur obcaecati labore aperiam vitae, adipisci dolore modi quo sequi nam amet debitis quidem optio, facere, sunt dolorum sit illo?</p>
    </>
  )
}
