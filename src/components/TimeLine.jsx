
const TimeLine = ({ data }) => {
  return (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag">{data.designation}</span>
            <img className='work-image' src={data.image} alt={data.company} height={50}/>
            <p className="title">{data.designation}</p>
            {
                data.work.map((work) => {
                    return <p>► {work}</p>
                })
            }
            <time className="circle">{data.duration}</time>
        </div>
    </div>
  )
}

export default TimeLine;