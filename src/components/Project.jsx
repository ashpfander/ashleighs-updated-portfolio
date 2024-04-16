function Project(props) {
    return (
      <div className="">
        {props.projects.map((project) => (
              <div className="">
                <img alt="Screenshot of application" className="" src={project.image} />
                <div className="">
                <h2 className="">
                    {project.title}
                  </h2>
                  <h3 className="">
                    {project.subtitle}
                  </h3>
                  <p className="">{project.description}</p>
                  <a href={project.link} className="">Live Link</a>
                  <a href={project.github} className="">GitHub Repo</a>
                </div>
              </div>
          ))}
      </div>
    );
  }
  
  export default Project;