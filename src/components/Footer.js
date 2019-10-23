import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">

                <div className="row">

                    <div className="col-md-3 col-sm-6">
                      <h4>Featured Job</h4>
                      <ul>

                          <li>Manage Responses</li>
                          <li>Report a Problem</li>
                          <li>Mobile Site</li>
                          <li>Jobs by Skill</li>
                      </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      <h4>Latest Job</h4>
                      <ul>

                          <li>Access Database</li>
                          <li>Manage Responses</li>
                          <li>Report a Problem</li>
                          <li>Mobile Site</li>
                          <li>Jobs by Skill</li>
                      </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      <h4>Reach Us</h4>
                      <address>
                          <ul>
                          <li>Vibranium Valley:
                              42, Local Airport Road, Ikeja, Lagos</li>
                          <li>Email: Support@job.com</li>
                          <li>Call: 9788655566</li>
                          <li>Skype: <span id="footerName">VGG</span>job@skype</li>
                          <li>FAX: 123 456 85</li>
                          </ul>
                      </address>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      <h4> Newsletter</h4>
                      <form>
                          <input type="text" className="form-control input-lg" placeholder="Your Name" />
                          <input type="text" className="form-control input-lg" placeholder="Email..." />
                          <textarea className="form-control" placeholder="Message"></textarea>
                          <button type="submit" className="btn btn-success">Send</button>
                      </form>
                    </div>
                    
                </div>
                </div>


                <div className="container-fluid">
                <div className="row ">
                    <div className="copy-right col-12">
                        <p>&copy;Copyright
                        {/* <script>document.write(new Date().getFullYear());</script> | Design By KemTech */}
                        </p>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
