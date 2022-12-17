import './ProjectList.css';

export default function Portfolio({projects}) {
  return (
    <div className='projectlist'>
      {projects.map((project, ind) => 
       <img src={project.img} key={ind} alt="" />
      )}
    </div>
  );
}