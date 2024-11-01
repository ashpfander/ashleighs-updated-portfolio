function WebApps(props) {
  const modalOpenWebApps = (project) => {
    const modalTitleWA = document.getElementById('projectModalLabel');
    const modalBodyImageWA = document.getElementById('webAppImg');
    const modalBodySubTitleWA = document.getElementById('webAppSubtitle');
    const modalBodyDescriptionWA = document.getElementById('webAppDescription');
    const liveAppButton = document.getElementById('liveAppButton');
    const githubButton = document.getElementById('githubButton');
  
    modalTitleWA.textContent = project.title;
    modalBodyImageWA.src = project.image;
    modalBodySubTitleWA.textContent = project.subtitle;
    modalBodyDescriptionWA.textContent = project.description;
    liveAppButton.href = project.link;
    githubButton.href = project.github;
  };

  return (
    <div className="container-fluid text-center pt-5 footer-padding">
      <div className="row">
        {props.projects.map((project) => (
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card card-bkg" data-bs-toggle="modal" data-bs-target="#project-modal" onClick={() => modalOpenWebApps(project)}>
              <img
                alt={`Screenshot of ${project.title}`}
                className="img-hover"
                src={project.image}
              />
              <h2 className="gotu-regular project-title">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal information */}
      <div className="modal" id="project-modal" tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title gotu-regular olive-text" id="projectModalLabel"></h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img alt="Screenshot of application" id="webAppImg" className="img-fluid pb-3" />
              <h3 id="webAppSubtitle" className="gabarito-regular bold"></h3>
              <p id="webAppDescription" className="gabarito-regular"></p>
            </div>
            <div className="modal-footer justify-content-center">
              <a id="liveAppButton" target="_blank"><button className="col-12 p-3 me-3 gabarito-regular">Live App</button></a>
              <a id="githubButton" target="_blank"><button className="col-12 p-3 gabarito-regular">GitHub Repo</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default WebApps;