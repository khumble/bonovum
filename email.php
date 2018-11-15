<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bonovum Creative | Hatching Great Ideas</title>
    <link rel="shorcut icon" href="favicon.ico">
    <!-- Stylesheets-->
    <link type="text/css" href="./css/main.css" rel="stylesheet"> 
    <link type="text/css" href="./css/jquery.fancybox.min.css" rel="stylesheet">
</head>
<body>
    <header>            
        <h1 id="logo">Welcome to Bonovum Creative</h1>
    </header>
    <div class="container">
        <?php           
            $email;$message;$subject;$headers;$to;$captcha;
        
            if(isset($_POST['email'])){
              $email    =   filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
            }if(isset($_POST['message'])){
              $message  =   filter_var($_POST['message'], FILTER_SANITIZE_STRING);
            }if(isset($_POST['subject'])){
              $subject  =   filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
            }if(isset($_POST['g-recaptcha-response'])){
              $captcha=$_POST['g-recaptcha-response'];
            }
        $error_message  =   "<h2>01001111 01101111 01110000 01110011</h2><h3>Oh wait, are you not a robot? You should check the box that says so then :)</h3><a class=\"button\" href=\"./#contact\">Return to Contact Form</a>";
            /*if(!$captcha){
              echo $error_message;
              exit;
            }*/
            $secretKey = "6LcIQB4UAAAAALZ8Qz5HvuMMraGeJ_cyAVKOC66A";
            $ip = $_SERVER['REMOTE_ADDR'];
            $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
            $responseKeys = json_decode($response,true);
            if(intval($responseKeys["success"]) !== 1) {
              echo $error_message;
            } else {
                $headers =  'From: ' . $email . "\r\n" .
                            'Reply-To: ' . $email . "\r\n" .
                            'X-Mailer: PHP/' . phpversion();
                $to = 'hello@bonovum.com';
                mail($to, $subject, $message, $headers);  
                echo '<h2>Thanks for reaching out!</h2><h3>I will get back to you as soon as possible.</h3><a class="button" href="./">Return to Site</a>';
            }
        ?>
    </div>
    <footer>
        <small>&copy;<?php echo date("Y");?> Bonovum Creative / Kristin Humble. All rights reserved.</small>
    </footer>
    <!-- Scripts & Styles -->
        <script type="text/javascript" src="//code.jquery.com/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="./js/jquery.fancybox.min.js"></script>
        <script type="text/javascript" src="./js/smooth-scroll.min.js"></script>
        <script src='https://www.google.com/recaptcha/api.js'></script>
        <script type="text/javascript" src="./js/main.min.js"></script>
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
</body>
</html>