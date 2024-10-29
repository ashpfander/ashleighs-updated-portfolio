function Designs(props) {
  return (
    <div className="container-fluid text-center pt-5 footer-padding">
      <div className="row">
        {props.designs.map((design) => (
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card">
              <img alt="Screenshot of application" className="card-img-top" src={design.image} />
              <div className="card-body">
                <h2 className="gotu-regular olive-text">
                  {design.title}
                </h2>
                <h3 className="gabarito-regular">
                  <b>{design.subtitle}</b>
                </h3>
                <p className="gabarito-regular">{design.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  
export default Designs;