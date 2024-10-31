function WebApps(props) {
  return (
    <div className="container-fluid text-center pt-5 footer-padding">
      <div className="row">
        {props.projects.map((project) => (
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card card-bkg">
              <img alt={`Screenshot of ${project.title}`} className="img-hover" src={project.image} />
              <h2 className="gotu-regular project-title">{project.title}</h2>
              {/* <div className="card-body">
                <h2 className="gotu-regular olive-text">
                  {project.title}
                </h2>
                <h3 className="gabarito-regular">
                  <b>{project.subtitle}</b>
                </h3>
                <p className="gabarito-regular">{project.description}</p>
                <a href={project.link}><button className="col-lg-4 col-12 p-3 me-3 gabarito-regular">Live App</button></a>
                <a href={project.github}><button className="col-lg-4 col-12 p-3 mt-2 gabarito-regular">GitHub Repo</button></a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  
export default WebApps;