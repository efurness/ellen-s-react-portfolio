import "./footer.css";

function Footer() {
  return (
    <div id="GIS Projects">
      {/* <iframe src="https://efurness.github.io/spokes-people/" width="60%" height="400px" frameborder="0" allowfullscreen allow="geolocation" title="Spokes Boulder App"></iframe> */}
      <div>
        <br />
        <h4>GIS Projects</h4>
        <br />

        <center>
          <h5>
            <a href="https://arcg.is/159z0X0">
              Satellite (VIIRS) Thermal Hotspots and Fire Activity
            </a>
          </h5>

          <iframe
            src="https://arcg.is/159z0X0"
            width="60%"
            height="400px"
            frameborder="0"
            allowfullscreen
            allow="geolocation"
            title="Experience Builder"
          ></iframe>
        </center>
        <br />

        <br />

        <center>
          <h5>
            <a href="https://experience.arcgis.com/experience/94d871b4838548d9a8bc44f44addd801">
              ArcGIS Experience Builder
            </a>
          </h5>

          <iframe
            src="https://experience.arcgis.com/experience/94d871b4838548d9a8bc44f44addd801"
            width="60%"
            height="400px"
            frameborder="0"
            allowfullscreen
            allow="geolocation"
            title="Experience Builder"
          ></iframe>
        </center>
        <h6>courtesy WEBGIS 5th edition exercise, Pinde Fu</h6>
      </div>

      <div class="row gx-4 gx-lg-5 align-items-center my-5">
        {/* <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src={process.env.PUBLIC_URL + '/portfolioNew.png'}
                    alt="portfolio_photo" /></div> */}
        <div class="col-lg-5"></div>
      </div>
      <div class="container-sm">
        <div class="card text-white bg-secondary my-5 py-4 text-center">
          <div class="card-body">
            <p class="text-white m-0">
              <p class="lead mb-0">
                The non-profit Conservation Treaty Support Fund,
                <a href="https://www.prweb.com/releases/2007/02/prweb502845.htm">
                  {" "}
                  CTFS
                </a>{" "}
                supported the{" "}
                <a href="https://cites.org/eng">
                  Convention of the International Trade in Endangered Species of
                  Wild Fauna and Flora{" "}
                </a>{" "}
                with partners
                <a href="https://worldwildlife.org">
                  {" "}
                  World Wildlife Fund
                </a> and <a href="https://traffic.org"> TRAFFIC</a> in this
                pursuit, contributing to protecting species like elephants,
                rhinos and snow leopards: all vulnerable species because of
                poaching and illegal trade.
              </p>
            </p>
            <div id="links"></div>
          </div>
        </div>
        <br />
        <ul>
          <br />
          <li class="list-inline-item zoom">
            <a href="Resume2025.pdf" target="blank">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={process.env.PUBLIC_URL + "/resume.png"}
                alt="resume"
              />
            </a>
          </li>
          <li class="list-inline-item zoom">
            <a href="https://stackoverflow.com/users/19552848/e-douglas?tab=profile">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={process.env.PUBLIC_URL + "/stack.png"}
                alt="stack_photo"
              />
            </a>
          </li>
          <li class="list-inline-item zoom">
            <a href="https://www.linkedin.com/in/e-d-8b9415241/">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={process.env.PUBLIC_URL + "/link.png"}
                alt="linkedIn"
              />
            </a>
          </li>
          <li class="list-inline-item zoom">
            <a href="https://efurness.github.io/Ellen-sProfessionalPortfolio/photo.html">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={process.env.PUBLIC_URL + "/camera.png"}
                alt="photos"
              />
            </a>
          </li>
          <li class="list-inline-item zoom">
            <a href="https://storymaps.arcgis.com/stories/32404e9d37564136bb64c1cfc354d9a2">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={process.env.PUBLIC_URL + "/storymap.png"}
                alt="story map"
              />
            </a>
          </li>
          <li class="list-inline-item zoom">
            <a href="https://efurness.github.io/portfolio-ellen-next-js">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={process.env.PUBLIC_URL + "/vercel4.png"}
                alt="next portfolio"
              />
            </a>
          </li>
        </ul>
        <h6>&copy; Monty-Asp 2024</h6> <br />
        <div class="container-sm">
          <div class="card text-center">
            <div class="card-header">
              <h3> Testimonials</h3>

              <div class="card-body">
                <div class="spinner-grow text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <h3 class="card-title">Cynthia K. Godoy, 'NCIDQ_Principal'</h3>
                <p class="card-text">
                  {" "}
                  I am delighted to wholeheartedly recommend my friend from Web
                  Development bootcamp for her pursuit of a career in GIS. Her
                  persistance is truly commendable as she consistently strives
                  for excellence in every endeavor. What sets her apart is an
                  unsatiable desire to keep learning, a trait that extends
                  beyond the norm. Since our school days concluded she digs
                  deeper into the world of programming, devouring at least seven
                  books on the subject. Her commitment to continuous growth is
                  not just impressive but also inspiring. I am confident that
                  her passion and dedication will make her an invaluable asset
                  to any GIS team.
                </p>
                <a
                  href="https://cynthia@ck-interiors.com"
                  class="btn btn-primary"
                >
                  Cynthia can be reached
                </a>
                <h3 class="card-title">
                  Mrs. Shelley Levine, 'Cranial Sacral Therapist | Trauma
                  Recovery Specialist | Life Coach'
                </h3>
                <p class="card-text">
                  {" "}
                  As a close friend and professional confidant, I have
                  experienced Ellen as a very bright, productive ambitious
                  person, who diligently works always up to a new challenge.
                  Ellen not only learns new technologies in depth with great
                  speed, she also raises the bar as her standards are high and
                  never cease to reflect her superlative talent! My field as a
                  Holistic practitioner, I meet a wide variety of people. Ellen
                  is most impressive and would undoubtedly be a great asset for
                  the fortunate company that hires Ellen.🌟
                </p>
                <h3 class="card-title">Patricia F, 'Designer'</h3>

                <p class="card-text">
                  {" "}
                  Ellen is quite knowledgable about GIS and Web Development
                  having created many apps using React Leaflet, REACT, NEXTjs,
                  and MapView. A common thread is her outstanding map
                  development as seen in GIS StoryMap and Experience Builder. To
                  combine GIS, Biology, and Web makes her very appealing
                  candidate for an organization 🌟
                </p>
              </div>
              <div class="card-footer text-body-secondary">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
