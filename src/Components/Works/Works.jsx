import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data'
import WorkItems from './WorkItems'

const Works = () => {
    const [item, setItem] = useState({
        name: "all"
    })
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(()=>{
        if(item.name === "all") {
            setProjects(projectsData);
        }

        else{
            const newProjects = projectsData.filter((projects) => {
                return projects.category.toLowerCase() === item.name;
            })
            setProjects(newProjects);
        }
    },[item]);

    const handleClick = (e,index) => {
        setItem({name : e.target.textContent.toLowerCase()})
        setActive(index)
    }
  return (
    <>
      <div className='work__filters'>
        {
            projectsNav.map((item, index) => {
                return(
                   <>
                    <span onClick={(e) => {
                        handleClick(e, index);
                    }} 
                    // className="work__item"
                    className={`${active === index ? "active-work" : ""}  work__item`}
                    key={index}
                    >
                    {item.name}</span>
                   </>
                )
            })
        }
      </div>

      <div className='work__container container grid'>
        {
            projects.map((item) =>{
                return(
                    <>
                        <WorkItems 
                        key={item.id}
                        item={item}/>
                    </>
                )
            })
        }
      </div>
    </>
  )
}

export default Works