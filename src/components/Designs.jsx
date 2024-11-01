function Designs(props) {
  const modalOpenDesigns = (design) => {
    const modalTitleD = document.getElementById('designModalLabel');
    const modalBodyImagesD = document.getElementById('designImages');
    const modalBodySubTitleD = document.getElementById('designSubtitle');
    const modalBodyDescriptionD = document.getElementById('designDescription');
  
    modalTitleD.textContent = design.title;
    modalBodySubTitleD.textContent = design.subtitle;
    modalBodyDescriptionD.textContent = design.description;

    modalBodyImagesD.innerHTML = '';

    // Only include image2 if the title matches Tonic Studios Logo Animation
    if (design.title === "Tonic Studios Logo Animation") {
      const imgElement = document.createElement('img');
      // Only include image2
      imgElement.src = design.image2;
      imgElement.alt = `Screenshot of ${design.title}`;
      imgElement.className = "img-fluid pb-3";
      modalBodyImagesD.appendChild(imgElement);
    } else {
      // Include all images for other designs
      const images = [design.image, design.image2, design.image3].filter(Boolean);
      images.forEach((imgSrc) => {
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = `Screenshot of ${design.title}`;
        imgElement.className = "img-fluid pb-3";
        modalBodyImagesD.appendChild(imgElement);
      });
    }
  };

  return (
    <div className="container-fluid text-center pt-5 footer-padding">
      <div className="row">
        {props.designs.map((design) => (
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card card-bkg" data-bs-toggle="modal" data-bs-target="#design-modal" onClick={() => modalOpenDesigns(design)}>
              <img
                alt={`Screenshot of ${design.title}`}
                className="img-hover"
                src={design.image}
              />
              <h2 className="gotu-regular project-title">{design.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal information */}
      <div className="modal" id="design-modal" tabIndex="-1" aria-labelledby="designModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title gotu-regular olive-text" id="designModalLabel"></h2>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div id="designImages"></div>
              <h3 id="designSubtitle" className="gabarito-regular bold"></h3>
              <p id="designDescription" className="gabarito-regular"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Designs;