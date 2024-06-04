function Body() {
  return (
    <body>
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-4 mb-5">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title zoom">My education</h5>
                <p class="card-text">
                  My education includes a Masters in Geographical Information
                  Systems, at the University of Denver and Population Biology at
                  the University of Colorado. GIS mapping projects. A Full-Stack
                  JavaScript web development certificate.
                </p>
                <li class="list-inline-item zoom">
                  <a href="Resume2024.pdf" target="blank">
                    <img
                      class="img-fluid rounded mb-4 mb-lg-0"
                      src={process.env.PUBLIC_URL + "/resume.png"}
                      alt="resume.png"
                    />
                  </a>
                </li>

                <a
                  href="https://efurness.github.io/Ellen-sProfessionalPortfolio/GIS2.pdf"
                  class="btn btn-primary"
                >
                  GIS Project
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5">
            <div class="card">
              <img
                src={process.env.PUBLIC_URL + "/peaks.png"}
                class="card-img-top"
                alt="Indian peaks"
              />
              <div class="card-body">
                <h5 class="card-title zoom">Colorado</h5>
                <p class="card-text">
                  I love hiking with my English Retriever dog and enjoy cycling,
                  snowshoeing, and skiing.
                </p>
                <a href="https://www.cblandtrust.org/" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5" id="profession">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title zoom">Profession</h5>
                <p class="card-text">
                  Work includes U.S. Forest Service Burned Area Emergency
                  Rehabiliation, GIS associate mapping Turkey Creek watershed
                  with ArcGIS ArcInfo and ArcEdit, and a work partnership with
                  the National Park Service Air Resources Division.
                </p>
                <br />
                <br />
                <a
                  href="https://www.nps.gov/orgs/1971/index.htm"
                  class="btn btn-primary"
                >
                  NPS Air websites
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container px-4 px-lg-5" id="projects">
        <br />
        <br />
        <center>
          {" "}
          <h4>REACT and Web Projects</h4>
        </center>
      </div>
    </body>
  );
}
export default Body;
