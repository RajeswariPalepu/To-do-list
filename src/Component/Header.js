import React from 'react'
function Header() {
  return (
    <div className="p-5 text-center bg-image"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/06/28/94/06289464b221ac09a5a4535918e70dae.jpg')",
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: "#ccb4c8"
      }}>
      <nav class="navbar navbar-expand-sm navbar-light bg-light mt-0">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="mynavbar">
            <div className="p-5 text-center bg-image"
            >
              <nav class="navbar navbar-expand-sm navbar-light bg-light mt-0">
                <div class="container-fluid">
                  <div class="collapse navbar-collapse" id="mynavbar">
                    <a class="navbar-brand" href="#">
                      <img src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSQ9S1zwCGnkAAlJvq4VZ0OCM6kwikpMs6UnyZ6Hp2q1I8NaaOTlFassTJK7OaCqbLhFPRwhA7rjRmWR4Y" alt="avatar"
                        className="profile img-fluid" style={{ width: "50px" }} />
                    </a>
                  </div>
                </div>
              </nav>
              <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5" style={{
    position: "relative",
    left: "762px"
}}>
                  <div className="row">
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mb-4">
                        <div className="card-body text-center">
                          <h5 className="my-3">nancy ajram</h5>
                          <p className="text-muted mb-1">Full Stack Developer</p>
                          <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                          <div className="d-flex justify-content-center mb-2">
                            <button type="button" className="btn btn-primary">VIEW PROFILE</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Header