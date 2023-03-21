import avatar from '../images/avatar.png';

const About = () => {

  return (
    <div>
        <img className="about-image" src={avatar} alt="avatar" height={500} width={500}/>
        <br></br>
        <p className='about-para'>
        Diligent Software Developer, joined award winning Northcoders bootcamp to pursue role of Full
Stack Developer as designing apps let use my creative and problem-solving skills.
        </p> 
        <p className='about-para'>
          Throughout this
time, I have been able to learn best tech industry practices and gain knowledge of backend and
frontend.
        </p>
    </div>
  )
}

export default About;