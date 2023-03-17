<DOCTYPE html>
    <html>
      <head>
        <title>Load a Page With AJAX and No Refresh</title>
        <style>
          #nav ul {
            overflow: hidden;
            margin: 0;
            padding: 0;
            list-style-type: none;
          }
          #nav ul li {
            float: left;
          }
          #nav ul li a {
            display: inline-block;
            padding: 10px 15px;
          }
          #content {
            padding: 15px;
          }
        </style>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script>
          $(document).ready(function(){
            // Set trigger and container variables
            var trigger = $('#nav ul li a'),
                container = $('#content');
            
            // Fire on click
            trigger.on('click', function(){
              // Set $this for re-use. Set target from data attribute
              var $this = $(this),
                target = $this.data('fetch');       
              
              // Load target page into container
              container.load(target + '.php');
              
              // Stop normal link behavior
              return false;
            });
          });
        </script>
      </head>
      <body>
        <nav id="nav">
          <ul>
            <li><a href="#" data-target="home">Home</a></li>
            <li><a href="#" data-target="about">About</a></li>
          </ul>
        </nav>
        <div id="content">
          <?php include('fetch.php'); ?>
        </div>
      </body>
    </html>