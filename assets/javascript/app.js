$(document).ready(function(){ 


    var config = {
        apiKey: "AIzaSyDQEhx6b8Rk_K6M7FwOlg7YXf7d2zi6s5c",
        authDomain: "portfolio-b21ec.firebaseapp.com",
        databaseURL: "https://portfolio-b21ec.firebaseio.com",
        projectId: "portfolio-b21ec",
        storageBucket: "portfolio-b21ec.appspot.com",
        messagingSenderId: "946041206431"
      };
      firebase.initializeApp(config);

    var database = firebase.database();

    var homePage = $(".home-page");
    var mainPage = $(".main-page");
    var mainText = $(".about-me");
    var portfolio = $(".portfolio");
    var contact = $(".contact");
    var leftSide = $(".left-side");
    var form = $('form');
    var logo = $("#logo");

    $("#submit").on('click', function(event){
        event.preventDefault();

        var first = $("#firstName").val().trim();
        var last = $("#lastName").val().trim();
        var emailAddress = $("#email").val().trim();
        var subjectLine = $("#subject").val().trim();
        var comment = $("#message").val().trim();
        form.hide();
        mainText.show();
        $("#home").css('font-weight', 'bold');
        $("#contact").css('font-weight', 'normal');

        console.log(first, last, emailAddress, subjectLine, comment);

        $("#firstName").val('');
        $("#lastName").val('');
        $("#emailName").val('');
        $("#subject").val('');
        $("#message").val('');

        database.ref().push({
            first:first,
            last:last,
            emailAddress:emailAddress,
            subjectLine:subjectLine,
            comment:comment,
        })
        return false;
    })

    database.ref().on("child_added", function(snap){
        var save = snap.val();

        console.log(snap.key, snap.val());
    
        console.log(save.first);
        console.log(save.last);
        console.log(save.emailAddress);
        console.log(save.subjectLine);
        console.log(save.comment);
    })
    

    function viewPortfolio(){
        var homePageButton = $("#startButton");
        mainPage.hide();
        portfolio.hide();
        contact.hide();
        leftSide.hide();
        form.hide();

        homePageButton.on('click', function (){
            homePage.empty();
            mainPage.show();
            $("#home").css('font-weight', 'bold');
        });
    }

    viewPortfolio();

    function clickLogo(){
        logo.on('click', function(){
            homePage.empty();
            mainText.show();
            portfolio.hide();
            contact.hide();
            leftSide.hide();
            form.hide();
            $("#home").css('font-weight', 'bold');
            $("#portfolio").css('font-weight', 'normal');
            $("#contact").css('font-weight', 'normal');


        })
    }

    clickLogo();

    function clickHome(){
        var homeButton = $("#home");

        homeButton.on('click', function (){
            homePage.empty();
            mainText.show();
            portfolio.hide();
            contact.hide();
            leftSide.hide();  
            form.hide();
            $(".graphic").css('font-weight', 'normal');
            $("#home").css('font-weight', 'bold');
            $("#portfolio").css('font-weight', 'normal');
            $("#contact").css('font-weight', 'normal');
        });
    }

    clickHome();

    function clickPortfolio(){
        var portfolioButton = $("#portfolio");

        portfolioButton.on('click', function (){
            homePage.empty();
            mainText.hide();
            portfolio.show();
            contact.hide();
            leftSide.show();
            form.hide();
            $(".graphic").css('font-weight', 'normal');
            $("#home").css('font-weight', 'normal');
            $("#portfolio").css('font-weight', 'bold');
            $("#contact").css('font-weight', 'normal');
            $(".web").css('font-weight', 'normal');
            $(".brand").css('font-weight', 'normal');
            $(".layout").css('font-weight', 'normal');
            $(".free").css('font-weight', 'normal');
        });
    }

    clickPortfolio();

    function clickContact(){
        var contactButton = $("#contact");

        contactButton.on('click', function (){
            homePage.empty();
            mainText.hide();
            portfolio.hide();
            contact.show();
            leftSide.hide();
            form.hide();
            $(".graphic").css('font-weight', 'normal');
            $("#home").css('font-weight', 'normal');
            $("#contact").css('font-weight', 'bold');
            $("#portfolio").css('font-weight', 'normal');
        });
    }

    clickContact();

    function sendEmail(){
        var emailButton = $("#emailButton");

        emailButton.on('click', function (){
            homePage.empty();
            mainPage.show();
            form.show();
            contact.hide();
            $("#home").css('font-weight', 'normal');
        });
    }

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })

    sendEmail();

    // function submitEmail(){
    //     var submit = $("#submit");

    
    // }

    // submitEmail();


    // Modal Images for Portfolio Page //

    var modal = document.getElementById('myModalImg');

    var img01 = document.getElementById('logic-01');
    var img02 = document.getElementById('logic-02');
    var img03 = document.getElementById('dive-01');
    var img04 = document.getElementById('view-01');
    var img05 = document.getElementById('view-02');
    var img06 = document.getElementById('gulls-01');
    var img07 = document.getElementById('xy-01');
    var img08 = document.getElementById('sdba-01');
    var img09 = document.getElementById('brew');
    var img10 = document.getElementById('zaldana');
    var img11 = document.getElementById('alight-01');
    var img12 = document.getElementById('alight-02');
    

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img01.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    img02.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

    img03.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img04.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img05.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img06.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img07.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img08.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img09.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img10.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img11.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img12.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
})