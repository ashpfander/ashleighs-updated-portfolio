function WebApps(props) {
  const modalOpen = (project) => {
    const modalTitle = document.getElementById('projectModalLabel');
    const modalBody = document.querySelector('.modal-body p');
  
    modalTitle.textContent = project.title;
    modalBody.textContent = 'To be updated';
  };

  return (
    <div className="container-fluid text-center pt-5 footer-padding">
      <div className="row">
        {props.projects.map((project) => (
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card card-bkg" data-bs-toggle="modal" data-bs-target="#project-modal" onClick={() => modalOpen(project)}>
              <img
                alt={`Screenshot of ${project.title}`}
                className="img-hover"
                src={project.image}
              />
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

      {/* Modal information */}
      <div className="modal" id="project-modal" tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="projectModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default WebApps;