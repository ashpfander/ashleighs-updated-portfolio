function Project(props) {
  return (
    <div className="container-fluid text-center pt-5 footer-padding">
      <div className="row">
        {props.projects.map((project) => (
          <div className="col-6 mb-4">
            <div className="card">
              <img alt="Screenshot of application" className="card-img-top" src={project.image} />
              <div className="card-body">
                <h2 className="kalam-bold olive-text">
                  {project.title}
                </h2>
                <h3 className="gabarito-regular">
                  <b>{project.subtitle}</b>
                </h3>
                <p className="gabarito-regular">{project.description}</p>
                <a href={project.link} className=""><button className="p-3 me-3 gabarito-regular">Live App</button></a>
                <a href={project.github} className=""><button className="p-3 gabarito-regular">GitHub Repo</button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  
export default Project;