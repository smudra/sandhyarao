<?php

// Make the page validate
ini_set('session.use_trans_sid', '0');

// Create a random string, leaving out 'o' to avoid confusion with '0'
$char = strtoupper(substr(str_shuffle('abcdefghjkmnpqrstuvwxyz'), 0, 4));

// Concatenate the random string onto the random numbers
// The font 'Anorexia' doesn't have a character for '8', so the numbers will only go up to 7
// '0' is left out to avoid confusion with 'O'
$str = rand(1, 7) . rand(1, 7) . $char;

// Begin the session
session_start();

// Set the session contents
$_SESSION['captcha_id'] = $str;

?>

<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->  
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->  
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->  
<head>
    <title>Contact - Optimations</title>

    <!-- Meta -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Favicon -->
    <link rel="icon" type="image/ico" href="http://optimations.com/favicon.ico">

    <!-- CSS Global Compulsory -->
    <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- CSS Implementing Plugins -->
    <link rel="stylesheet" href="assets/plugins/line-icons/line-icons.css">
    <link rel="stylesheet" href="assets/plugins/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/plugins/flexslider/flexslider.css">     
    <link rel="stylesheet" href="assets/plugins/sky-forms/version-2.0.1/css/custom-sky-forms.css">

    <!-- CSS Page Style -->    
    <link rel="stylesheet" href="assets/css/pages/page_contact.css">

    <!-- CSS Theme -->    
    <link rel="stylesheet" href="assets/css/theme-colors/light.css">

    <!-- CSS Customization -->
    <link rel="stylesheet" href="assets/css/custom.css">

    <!--[if lt IE 9]>
        <link rel="stylesheet" href="assets/plugins/sky-forms/version-2.0.1/css/sky-forms-ie8.css">
    <![endif]-->
</head> 

<body>
<?php include_once("analyticstracking.php") ?> <!-- Google Analytics Page tracking -->
<div class="wrapper">
    <!--=== Header ===-->    
    <div class="header">
        <!-- Topbar -->
        <div class="topbar">
            <div class="container">
                <!-- Topbar Navigation -->
                
                <!-- End Topbar Navigation -->
            </div>
        </div>
        <!-- End Topbar -->
    
        <!-- Navbar -->
        <div class="navbar navbar-default mega-menu" role="navigation">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="fa fa-bars"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">
                        <img id="logo-header" src="assets/img/logo1-default.png" alt="Logo">
                    </a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-responsive-collapse">
                    <ul class="nav navbar-nav">
                        <!-- Home -->
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                Home
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="index.html">Home</a></li>
                            </ul>
                        </li>
                        <!-- End Home -->

                        <!-- Solutions -->                        
                        <li class="dropdown active">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                Solutions
                          </a>
                            <ul class="dropdown-menu">
                                <!-- About Solutions -->
                                <li>
                                    <a href="http://optimations.com/enterprise-social.html">Enterprise Social</a>
                                </li>
                                <li>
                                  <a href="http://optimations.com/data-analytics.html">Smart Data Analytics &amp; Visualization</a>
                                </li>
                                <li>
                                  <a href="http://optimations.com/digital-pre-compositing.html">Digital Pre-Compositing</a>
                                </li>
                                <li>
                                  <a href="http://optimations.com/dev-ops.html">DevOps</a>
                                </li>
                                <!-- End About Solutions -->
                            </ul>
                        </li>
                        <!-- End Solutions -->

                        <!-- Industries -->
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                Industries
                          </a>
                            <ul class="dropdown-menu">
                                <li>
                                	<a href="industries.html">Media, Entertainment &amp; Gaming</a>
                              </li>
                                <li>
                                	<a href="industries.html">Manufacturing &amp; Engineering</a>
                                </li>
                                <li>
                                	<a href="industries.html">Life Sciences &amp; Healthcare</a>
                                </li>
                                <li>
                                	<a href="industries.html">Technology &amp; Communications</a>
                                </li>
                                <li>
                                	<a href="industries.html">Banking &amp; Financial Services</a>
                                </li>
                                <li>
                                	<a href="industries.html">Retail &amp; Consumer Products</a>
                                </li>
                                <li>
                                	<a href="industries.html">Federal &amp; Government</a>
                                </li> 
                          </ul>
                        </li>
                        <!-- End Industries -->

                        <!-- Blog -->
                        <li class="dropdown">
                            <a href="https://www.linkedin.com/today/author/478501?trk=pulse-det-athr_posts" target="_blank" class="dropdown-toggle" data-toggle="dropdown">
                                Blog
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="https://www.linkedin.com/pulse/virtual-reality-digital-electric-transformative-ahead-natarajan?trk=mp-reader-card" target="_blank">Transformative Innovation Ahead</a></li>
                                <li><a href="https://www.linkedin.com/pulse/20141015233909-478501-you-me-they-the-digital-experience-universe?trk=mp-reader-card" target="_blank">The Digital Experience Universe</a></li>
                                <li><a href="https://www.linkedin.com/pulse/20140912231012-478501-whose-life-have-i-touched-today?trk=prof-post" target="_blank">Whose Life have I touched today?</a></li>
                                
                          </ul>
                        </li>
                        <!-- End Blog -->

                         <!-- Contacts -->
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                Contacts
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="page_contact_advanced.php">Contact Us</a></li>
                            </ul>
                        </li>                    
                        <!-- End Contacts -->

                    </ul>
                </div><!--/navbar-collapse-->
            </div>    
        </div>            
        <!-- End Navbar -->
    </div>
    <!--=== End Header ===-->    

    <!--=== Breadcrumbs ===-->
    <div class="breadcrumbs">
        <div class="container">
            <h1 class="pull-left">Our Contacts</h1>
            <ul class="pull-right breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li class="active">Contacts</li>
            </ul>
        </div>
    </div><!--/breadcrumbs-->
    <!--=== End Breadcrumbs ===-->

    <!--=== Content Part ===-->
    <div class="container content">
    	<div class="row margin-bottom-30">
    		<div class="col-md-9 mb-margin-bottom-30">
                <div class="headline"><h2>Contact Form</h2></div>
                <p>Please complete the form below to inquire how Optimations can help your business succeed.
</p><br>
                <form action="assets/php/contacts-process.php" method="post" id="sky-form3" class="sky-form sky-changes-3">
                    <fieldset>                  
                        <div class="row">
                            <section class="col col-6">
                                <label class="label">Name</label>
                                <label class="input">
                                    <i class="icon-append fa fa-user"></i>
                                    <input type="text" name="name" id="name">
                                </label>
                            </section>
                            <section class="col col-6">
                                <label class="label">E-mail</label>
                                <label class="input">
                                    <i class="icon-append fa fa-envelope-o"></i>
                                    <input type="email" name="email" id="email">
                                </label>
                            </section>
                        </div>
                        
                        <section>
                            <label class="label">Subject</label>
                            <label class="input">
                                <i class="icon-append fa fa-tag"></i>
                                <input type="text" name="subject" id="subject">
                            </label>
                        </section>
                        
                        <section>
                            <label class="label">Message</label>
                            <label class="textarea">
                                <i class="icon-append fa fa-comment"></i>
                                <textarea rows="4" name="message" id="message"></textarea>
                            </label>
                        </section>
                        
                        <section>
                            <label class="label">Enter characters below:</label>
                            <label class="input input-captcha">
                                <img src="assets/plugins/sky-forms/version-2.0.1/captcha/image.php?<?php echo time(); ?>" width="100" height="32" alt="Captcha image" />
                                <input type="text" maxlength="6" name="captcha" id="captcha">
                            </label>
                        </section>
                        
                        <section>
                            <label class="checkbox"><input type="checkbox" name="copy"><i></i>Send a copy to my e-mail address</label>
                        </section>
                    </fieldset>
                    
                    <footer>
                        <button type="submit" class="btn-u">Send message</button>
                    </footer>
                    
                    <div class="message">
                        <i class="rounded-x fa fa-check"></i>
                        <p>Your message was successfully sent!</p>
                    </div>
                </form>
            </div><!--/col-md-9-->
            
    		<div class="col-md-3">
            	<!-- Contacts -->
                <div class="headline"><h2>Why Contact?</h2></div>
                <ul class="list-unstyled who margin-bottom-30">
                    <li>Consult Optimations for products and solutions to accelerate your business momentum.</li>
                </ul>

            	<!-- Why we are? -->
                <div class="headline"><h2>What we do?</h2></div>
                <p>Optimations portfolio of solutions offer a ready avenue for your business to license IP and deliver ‘plug and play’ smart data, visualization and enterprise social solutions to accelerate your business momentum, without the large engineering, R&amp;D investments.</p>
            </div><!--/col-md-3-->
        </div><!--/row-->
    </div><!--/container-->     
    <!--=== End Content Part ===-->
    

    <!--=== Footer Version 1 ===-->
    <div class="footer-v1">
        <div class="footer">
            <div class="container">
                <div class="row">
                    <!-- About -->
                    <div class="col-md-3 md-margin-bottom-40">
                        <a href="index.html"><img id="logo-footer" class="footer-logo" src="assets/img/logo3-default.png" alt=""></a>
                        <p>Optimations current business solutions portfolio includes Digital Pre-Compositing, Information Delivery, Analytics, Managed Data Discovery (Big/Smart Data Science) for the Internet of Things, Enterprise Social and Social Learning.</p>    
                    </div><!--/col-md-3-->
                    <!-- End About -->

                    <!-- Latest -->
                    <div class="col-md-3 md-margin-bottom-40">
                        <div class="posts">
                            <div class="headline"><h2>Latest Posts</h2></div>
                            <ul class="list-unstyled latest-list">
                                <li>
                                    <a href="https://www.linkedin.com/pulse/virtual-reality-digital-electric-transformative-ahead-natarajan?trk=mp-reader-card" target="_blank">Transformative Innovation Ahead</a>
                                    <small>Dec 27, 2014</small>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/pulse/20141015233909-478501-you-me-they-the-digital-experience-universe?trk=mp-reader-card" target="_blank">The Digital Experience Universe</a>
                                    <small>Oct 15, 2014</small>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/pulse/20140912231012-478501-whose-life-have-i-touched-today?trk=prof-post" target="_blank">Whose life have I touched</a>
                                    <small>Sep 12, 2014</small>
                                </li>
                            </ul>
                        </div>
                    </div><!--/col-md-3-->  
                    <!-- End Latest --> 
                    
                    <!-- Link List -->
                    <div class="col-md-3 md-margin-bottom-40">
                        <div class="headline"><h2>Useful Links</h2></div>
                        <ul class="list-unstyled link-list">
                            <li><a href="enterprise-social.html">Enterprise Social</a></li>
                            <li><a href="data-analytics.html">Smart-Data Analytics</a></li>
                            <li><a href="digital-pre-compositing.html">Digital Pre-Compositing</a></li>
                            <li><a href="page_contact_advanced.php">Contact us</a></li>
                        </ul>
                    </div><!--/col-md-3-->
                    <!-- End Link List -->                    

                    <!-- Address -->
                    <div class="col-md-3 map-img md-margin-bottom-40">
                        <div class="headline"><h2>Contact Us</h2></div>                         
                        <address class="md-margin-bottom-40">
                            If you have any questions <br />
                            please <a href="page_contact_advanced.php">contact our<br />
                            office.</a> Someone will<br />
                            get back to you shortly.
                        </address>
                    </div><!--/col-md-3-->
                    <!-- End Address -->
                </div>
            </div> 
        </div><!--/footer-->

        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">                     
                        <p>
                            2015 &copy; All Rights Reserved.
                           <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
                        </p>
                    </div>

                    <!-- Social Links -->
                    <div class="col-md-6">
                        <ul class="footer-socials list-inline">
                            <li>
                                <a href="http://skype.com" target="_blank" class="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype">
                                    <i class="fa fa-skype"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/harinatarajan" target="_blank" class="tooltips" data-toggle="tooltip" data-placement="top" title="" data-original-title="Linkedin">
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- End Social Links -->
                </div>
            </div> 
        </div><!--/copyright-->
    </div>     
    <!--=== End Footer Version 1 ===-->
</div><!--/wrapepr-->

<!-- JS Global Compulsory -->           
<script type="text/javascript" src="assets/plugins/jquery/jquery.min.js"></script>
<script type="text/javascript" src="assets/plugins/jquery/jquery-migrate.min.js"></script>
<script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script> 
<!-- JS Implementing Plugins -->           
<script type="text/javascript" src="assets/plugins/back-to-top.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
<script type="text/javascript" src="assets/plugins/gmap/gmap.js"></script>
<script type="text/javascript" src="assets/plugins/flexslider/jquery.flexslider-min.js"></script>
<!-- Login Form -->
<script src="assets/plugins/sky-forms/version-2.0.1/js/jquery.form.min.js"></script>
<!-- Validation Form -->
<script src="assets/plugins/sky-forms/version-2.0.1/js/jquery.validate.min.js"></script>
<!-- JS Customization -->
<script type="text/javascript" src="assets/js/custom.js"></script>
<!-- JS Page Level -->           
<script type="text/javascript" src="assets/js/app.js"></script>
<script type="text/javascript" src="assets/js/pages/page_contacts.js"></script>
<script type="text/javascript" src="assets/js/pages/page_contact_advanced.js"></script>
<script type="text/javascript">
    jQuery(document).ready(function() {
        App.init();
        App.initSliders();            
        ContactPage.initMap();
        PageContactForm.initPageContactForm();      
 });
</script>
<!--[if lt IE 9]>
    <script src="assets/plugins/respond.js"></script>
    <script src="assets/plugins/html5shiv.js"></script>
    <script src="assets/js/plugins/placeholder-IE-fixes.js"></script>
    <script src="assets/plugins/sky-forms/version-2.0.1/js/sky-forms-ie8.js"></script>
<![endif]-->
<!--[if lt IE 10]>
    <script src="assets/plugins/sky-forms/version-2.0.1/js/jquery.placeholder.min.js"></script>
<![endif]-->

</body>
</html> 