import React from 'react'

const Footer=(props)=>{

    return(
<div>
      <footer className="sticky-bottom fixed-bottom">



          <div class="container text-center text-md-left">

            <div class="row">

              <div class="col-md-6 mx-auto">

                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Phillip Borgenict</h5>
                <p>Thank you for coming to my site!<br/>Please feel free to reach out to me through any of the provided links</p>

              </div>

              <hr class="clearfix w-100 d-md-none"/>

              <div class="col-md-3 mx-auto">



              </div>

              <hr class="clearfix w-100 d-md-none"/>



              <hr class="clearfix w-100 d-md-none"/>

              <div class="col-md-3 mx-auto">

                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Contact Me</h5>

                <ul class="list-unstyled list-inline text-center">

                  <li class="list-inline-item">
                    <a class="btn-floating btn-tw mx-1" href="https://twitter.com/philborgenicht">
                      <i class="fab fa-twitter"> </i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a class="btn-floating btn-li mx-1" href="https://linkedin.com/in/phillipborgenicht">
                      <i class="fab fa-linkedin-in"> </i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn-floating btn-dribbble mx-1" href="https://github.com/philborgenicht">
                      <i class="fab fa-github"> </i>
                    </a>
                  </li>
                </ul>

              </div>

            </div>

          </div>

          <hr/>



          <hr/>



          <div class="footer-copyright text-center py-3">© 2019 Copyright:
            <a href="#"> Phillip Borgenicht</a>
          </div>

      </footer>
</div>
    )

}

export default Footer
