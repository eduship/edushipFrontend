<template>
  <div class="footer">
  <!-- <div class="container ct-example-row"> -->
  <footer>
    <div class="row">
        <div class="col-sm">
          <a class="link" href="#">Events druchsuchen</a>
            </br>
          <a class="link" href="#">Über uns</a>
            </br>
          <a class="link" href="#">Kontakt</a>
            </br>

      </div>
          <div class="col-sm">
            <div class="flex-box">
          <a class="link" href="#">Veranstalter werden</a>

            <div class="col-lg-6 text-lg-center btn-wrapper">
              <!-- Twitter -->
                <a target="_blank" href="https://twitter.com/Eduship1"
                   class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                   data-original-title="Follow us">
                    <i class="fa fa-twitter"></i>
                </a>

                <!-- Facebook -->
                <a target="_blank" href="https://www.facebook.com/Edushipde-457384781339137/?ref=py_c"
                   class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                   data-original-title="Like us">
                    <i class="fa fa-facebook-square"></i>
                </a>

                <!-- eMail -->
                <a target="_blank" href="mailto:info@eduship.de"
                   class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                   data-original-title="Write us">
                    <i class="ni ni-email-83"></i>
                </a>
              </div>
            </div>
            </div>

          <div class="col-sm">
          <a class="link" href="#">Datenschutz</a>
            </br>
          <a class="link" href="#">Impressum</a>
        </br>
          Eduship &copy; 2018
        </div>
        </div>
    </footer>
  <!-- </div> -->
</div>
</template>
<script>
  export default {};
</script>
<style>

  .footer{
    margin:0%;
  }

  footer{
    text-align: center;
    background-color: black;
  }

  .link{
    color: white;
    margin-bottom: 5em;
  }

  .link:hover{
    color: grey;
  }

  .flex-container{
    display: flex;
    flex-direction: row;
  }
</style>
