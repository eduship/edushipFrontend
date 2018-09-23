<template>
  <div class="footer">
  <footer>

  </br>

    <!-- Social Media Icons -->
    <!-- Facebook -->
    <a target="_blank" href="https://www.facebook.com/Edushipde-457384781339137/?ref=py_c"
       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
       data-original-title="Like us">
        <i class="fa fa-facebook-square"></i>
    </a>

    <!-- Twitter -->
      <a target="_blank" href="https://twitter.com/Eduship1"
         class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
         data-original-title="Follow us">
          <i class="fa fa-twitter"></i>
      </a>

    <!-- eMail -->
    <a target="_blank" href="mailto:info@eduship.de"
       class="btn btn-neutral btn-icon-only btn-dribbble btn-round btn-lg" data-toggle="tooltip"
       data-original-title="Write us">
        <i class="ni ni-email-83"></i>
    </a>

    <hr>

    <div class="row">

      <!-- linke Spalte -->
        <div class="col-sm">
            </br>
          <a class="link" href="/">Events druchsuchen</a>
            </br>
            </br>
          <a class="link" href="#/about">Über uns</a>
            </br>
            </br>
          <a class="link" href="#/support">Kontakt</a>
            </br>
            </br>
      </div>


          <!-- mittlere Spalte -->
          <div class="col-sm">
            </br>
          <a class="link" href="#/organiser">Veranstalter werden</a>
            </br>
            </br>

                <!-- Social Media Icons -->
                <!-- Facebook -->
                <!-- <a target="_blank" href="https://www.facebook.com/Edushipde-457384781339137/?ref=py_c"
                   class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                   data-original-title="Like us">
                    <i class="fa fa-facebook-square"></i>
                </a>

                <!- Twitter -->
                  <!-- <a target="_blank" href="https://twitter.com/Eduship1"
                     class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                     data-original-title="Follow us">
                      <i class="fa fa-twitter"></i>
                  </a> -->

                <!-- eMail -->
                <!-- <a target="_blank" href="mailto:info@eduship.de"
                   class="btn btn-neutral btn-icon-only btn-dribbble btn-round btn-lg" data-toggle="tooltip"
                   data-original-title="Write us">
                    <i class="ni ni-email-83"></i>
                </a> -->
          </div>

          <!-- rechte Spalte -->
          <div class="col-sm">
              </br>
            <a class="link" href="#/privacy">Datenschutz</a>
              </br>
              </br>
            <a class="link" href="#/legal">Impressum</a>
              </br>
              </br>
              <div class="copyright">
                Eduship &copy; 2018
              </div>
            </br>
          </div>
    </div>
    </footer>
</div>
</template>


<script>
  export default {};
</script>


<style>

  .footer{
    margin-left: 0%;
    margin-right: 0%;
  }

  footer{
    text-align: center;
    background-color: #565656;
  }

  .link{
    color: white;
    margin-bottom: 10%;
  }

  .link:hover{
    color: black;
  }

  .copyright{
    color: #212529;
  }

  hr{
     background-color: #adb5bd;
  }

</style>
