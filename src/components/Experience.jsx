import nc from '../images/northcoders.jpeg';
import am from '../images/amdocs.jpeg';
import techm from '../images/techm.png';
import TimeLine from './TimeLine';

const Experience = () => {

  const experience = [
    {
      company: 'NorthCoders',
      image: nc,
      duration: 'Nov 2022 - Mar 2023',
      designation: 'Junior Full Stack Developer',
      work: [
        'Worked in mini-projects as well as team projects using sync/async programming.',
        'Followed best coding practices including version control with git, TDD and pair programming.'
      ]
    },
    {
      company: 'Amdocs',
      image: am,
      duration: 'Jan 2022 - Apr 2022',
      designation: 'Software Developer',
      work: [
        'Collaborated in team-based, Agile environment to accomplish objectives by deadlines.',
        'Developed, modified and debugged software code in Oracle PL/SQL for enhancements as per user/client requirements related to invoicing.'
      ]
    },
    {
      company: 'Tech Mahindra',
      image: techm,
      duration: 'Jul 2008 - Jun 2013',
      designation: 'Software Engineer',
      work: [
        'Managed, tracked, and ensured timely resolutions for production application problems.',
        'Performed data retrieval process using UNIX shell scripting.'
      ]
    }
  ];

  return (
    <div className="experience">
        {
          experience.map((data, i) => {
            return <TimeLine key={i} data={data}/>
          })
        }
    </div>
  )
}

export default Experience;