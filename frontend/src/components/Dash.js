import React from 'react';
import { Link } from 'react-router-dom';
function Dash() {
  return (
    <section className="dashboard">
      <div className="container2">
        <div className="container3">
          <div className="filter-bar justify-content-around align-items-center mb-4">
            <button className="btn btn-dark">
              <img src="/logo/filter.png" className="mr-2" />Filter
            </button>
            <button className="btn btn-dark">All</button>
            <button className="btn btn-dark">Concept Art</button>
            <button className="btn btn-dark">Abstract</button>
            <button className="btn btn-dark">Design Visual</button>
            <button className="btn btn-dark">Vector</button>
            <button className="btn btn-dark">Fantasy</button>
            <button className="btn btn-dark">3D Design</button>
            <button className="btn btn-dark">Surrealisme</button>
            <button className="btn btn-dark">UI/UX Design</button>
          </div>

          <div className="gallery">

            <Link to="/View"><div className="imagedash"><img src="/images/imgaedash1.png" alt="Image 1" /></div></Link>
            <Link to="/View"><div className="imagedash"><img src="/images/imagedash2.png" alt="Image 2" /></div></Link>
            <Link to="/View"><div className="imagedash"><img src="/images/imagedash3.png" alt="Image 3" /></div></Link>
            <Link to="/View"><div className="imagedash"><img src="/images/imagedash4.png" alt="Image 4" /></div></Link>
            <Link to="/View"><div className="imagedash"><img src="/images/imagedash5.png" alt="Image 5" /></div></Link>
            <Link to="/View"><div className="imagedash"><img src="/images/imagedash6.png" alt="Image 6" /></div></Link>
            <Link to="/View"><div className="imagedash"><img src="/images/imagedash7.png" alt="Image 7" /></div></Link>
            <Link to="/View"><div className="imagedash"><img src="/images/imagedash8.png" alt="Image 8" /></div></Link>
            <Link to="/View"><div className="imagedash"><img src="/images/imagedash9.png" alt="Image 9" /></div></Link>
          </div>

          <div className="container2">
            <div className="section">
              <h2>
                Welcome to <span className="highlight">Concept Art</span>
                <a href="#" className="btn btn-primary button-dash">View All</a>
              </h2>

              <div className="row section-gallery">
                <div className="col-md-4 imagedash">
                  <Link to="/View"><img src="/images/gambar1.png" alt="Concept 1" className="img-fluid" /></Link>
                </div>
                <div className="col-md-4 imagedash">
                  <Link to="/View"><img src="/images/gambar2.png" alt="Concept 2" className="img-fluid" /></Link>
                </div>
                <div className="col-md-4 imagedash">
                  <Link to="/View"><img src="/images/gambar3.png" alt="Concept 3" className="img-fluid" /></Link>
                </div>
              </div>
            </div>

            <div className="section">
              <h2>
                Welcome to <span className="highlight">SuperheroTrend</span>
                <a href="#" className="btn btn-primary button-dash">View All</a>
              </h2>

              <div className="row section-gallery">
                <div className="col-md-4 imagedash">
                  <Link to="/View"><img src="/images/mbar1.png" alt="Superhero 1" className="img-fluid" /></Link>
                </div>
                <div className="col-md-4 imagedash">
                  <Link to="/View"><img src="/images/mbar2.png" alt="Superhero 2" className="img-fluid" /></Link>
                </div>
                <div className="col-md-4 imagedash">
                  <Link to="/View"><img src="/images/mbar3.png" alt="Superhero 3" className="img-fluid" /></Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>


  )
}

export default Dash;
