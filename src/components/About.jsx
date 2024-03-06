import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            A highly motivated and detail-oriented frontend developer with a passion for creating 
            intuitive and visually appealing user interfaces. With 2+ years of experience in web 
            development, I specialize in building responsive and scalable applications using modern 
            frontend technologies such as HTML, CSS, JavaScript, and frameworks like React and Vue.js.
            </p>

            <br/>

            <p className='text-xl'>
            I thrive in fast-paced environments and excel in collaborative teams, 
            where I can contribute my expertise in frontend development to deliver 
            high-quality solutions that meet both user needs and business goals. 
            My goal is to continue expanding my skills and staying abreast of emerging
             technologies to tackle new challenges and drive innovation in the field of web development.
            </p>
        </div>
    </div>
  )
}

export default About