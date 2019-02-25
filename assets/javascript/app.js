$(document).ready(function () {


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
    var pretzelSide = $("#block-text");
    var brewSide = $("#block-text-01");
    var valleySide = $("#block-text-02");
    var alightSide = $("#block-text-03");
    var triviaSide = $("#block-text-04");
    var duckSide = $("#block-text-05");
    var xySide = $("#block-text-06");
    var comedySide = $("#block-text-07");
    var trainSide = $("#block-text-08");
    var gullsSide = $("#block-text-09");
    var form = $('form');
    var logo = $("#logo");
    var pretzelPage = $(".pretzel");
    var brewPage = $(".brew");
    var valleyPage = $(".valley");
    var alightPage = $(".alight");
    var triviaPage = $(".trivia");
    var duckPage = $(".duck");
    var xyPage = $(".xy");
    var comedyPage = $(".comedy");
    var trainPage = $(".train");
    var gullsPage = $(".gulls");


    $("#submit").on('click', function (event) {
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
            first: first,
            last: last,
            emailAddress: emailAddress,
            subjectLine: subjectLine,
            comment: comment,
        })
        return false;
    })

    database.ref().on("child_added", function (snap) {
        var save = snap.val();

        console.log(snap.key, snap.val());

        console.log(save.first);
        console.log(save.last);
        console.log(save.emailAddress);
        console.log(save.subjectLine);
        console.log(save.comment);
    })


    function viewPortfolio() {
        var homePageButton = $("#startButton");
        mainPage.hide();
        portfolio.hide();
        contact.hide();
        pretzelSide.hide();
        brewSide.hide();
        valleySide.hide();
        alightSide.hide();
        triviaSide.hide();
        duckSide.hide();
        xySide.hide();
        comedySide.hide();
        trainSide.hide();
        gullsSide.hide();
        form.hide();
        pretzelPage.hide();
        brewPage.hide();
        valleyPage.hide();
        alightPage.hide();
        triviaPage.hide();
        duckPage.hide();
        xyPage.hide();
        comedyPage.hide();
        trainPage.hide();
        gullsPage.hide();

        homePageButton.on('click', function () {
            homePage.empty();
            mainPage.show();
            $("#home").css('font-weight', 'bold');
        });
    }

    viewPortfolio();

    function clickLogo() {
        logo.on('click', function () {
            homePage.empty();
            mainText.show();
            portfolio.hide();
            contact.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            form.hide();
            pretzelPage.hide();
            brewPage.hide();
            valleyPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
            $("#home").css('font-weight', 'bold');
            $("#portfolio").css('font-weight', 'normal');
            $("#contact").css('font-weight', 'normal');


        })
    }

    clickLogo();

    function clickHome() {
        var homeButton = $("#home");

        homeButton.on('click', function () {
            homePage.empty();
            mainText.show();
            portfolio.hide();
            contact.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            form.hide();
            pretzelPage.hide();
            brewPage.hide();
            valleyPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
            $(".graphic").css('font-weight', 'normal');
            $("#home").css('font-weight', 'bold');
            $("#portfolio").css('font-weight', 'normal');
            $("#contact").css('font-weight', 'normal');
        });
    }

    clickHome();

    function clickPortfolio() {
        var portfolioButton = $("#portfolio");

        portfolioButton.on('click', function () {
            homePage.empty();
            mainText.hide();
            portfolio.show();
            contact.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            form.hide();
            pretzelPage.hide();
            brewPage.hide();
            valleyPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
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

    function clickContact() {
        var contactButton = $("#contact");

        contactButton.on('click', function () {
            homePage.empty();
            mainText.hide();
            portfolio.hide();
            contact.show();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            form.hide();
            pretzelPage.hide();
            brewPage.hide();
            valleyPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
            $(".graphic").css('font-weight', 'normal');
            $("#home").css('font-weight', 'normal');
            $("#contact").css('font-weight', 'bold');
            $("#portfolio").css('font-weight', 'normal');
        });
    }

    clickContact();

    function sendEmail() {
        var emailButton = $("#emailButton-01");

        emailButton.on('click', function () {
            homePage.empty();
            mainPage.show();
            form.show();
            contact.hide();
            pretzelPage.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            brewPage.hide();
            valleyPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
            $("#home").css('font-weight', 'normal');
        });
    }

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

    sendEmail();

    function pretzel() {
        var pretzelClicked = $(".project01");

        pretzelClicked.on('click', function () {
            portfolio.hide();
            pretzelPage.show();
            pretzelSide.show();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            brewPage.hide();
            valleyPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
        })
    }
    pretzel();

    function brew() {
        var brewClicked = $(".project02");

        brewClicked.on('click', function () {
            portfolio.hide();
            pretzelPage.hide();
            pretzelSide.hide();
            brewSide.show();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            brewPage.show();
            valleyPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
        })
    }
    brew();

    function valleyView() {
        var valleyClicked = $(".project03");

        valleyClicked.on('click', function () {
            portfolio.hide();
            pretzelPage.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.show();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            brewPage.hide();
            valleyPage.show();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
        })
    }
    valleyView();

    function alight() {
        var alightClicked = $(".project04");

        alightClicked.on('click', function () {
            portfolio.hide();
            pretzelPage.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.show();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            brewPage.hide();
            valleyPage.hide();
            alightPage.show();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
        })
    }
    alight();

    function trivia() {
        var triviaClicked = $(".project05");

        triviaClicked.on('click', function () {
            portfolio.hide();
            pretzelPage.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.show();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            brewPage.hide();
            alightPage.hide();
            triviaPage.show();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
        })
    }
    trivia();

    function duckDive() {
        var duckClicked = $(".project06");

        duckClicked.on('click', function () {
            portfolio.hide();
            pretzelPage.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.show();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            brewPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.show();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
        })
    }
    duckDive();

    function xy() {
        var xyClicked = $(".project07");

        xyClicked.on('click', function () {
            portfolio.hide();
            pretzelPage.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.show();
            comedySide.hide();
            trainSide.hide();
            gullsSide.hide();
            brewPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.show();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.hide();
        })
    }
    xy();

    function comedy() {
        var comedyClicked = $(".project08");

        comedyClicked.on('click', function () {
            portfolio.hide();
            pretzelPage.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.show();
            trainSide.hide();
            gullsSide.hide();
            brewPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.show();
            trainPage.hide();
            gullsPage.hide();
        })
    }
    comedy();

    function train() {
        var trainClicked = $(".project09");

        trainClicked.on('click', function () {
            portfolio.hide();
            pretzelPage.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.show();
            gullsSide.hide();
            brewPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.show();
            gullsPage.hide();
        })
    }
    train();

    function gulls() {
        var gullsClicked = $(".project10");

        gullsClicked.on('click', function () {
            portfolio.hide();
            pretzelPage.hide();
            pretzelSide.hide();
            brewSide.hide();
            valleySide.hide();
            alightSide.hide();
            triviaSide.hide();
            duckSide.hide();
            xySide.hide();
            comedySide.hide();
            trainSide.hide();
            gullsSide.show();
            brewPage.hide();
            alightPage.hide();
            triviaPage.hide();
            duckPage.hide();
            xyPage.hide();
            comedyPage.hide();
            trainPage.hide();
            gullsPage.show();
        })
    }
    gulls();

   
     // Modal Images for Portfolio Page //

    var modal = document.getElementById('myModalImg');

    var img01 = document.getElementById('logic-01');
    var img02 = document.getElementById('logic-02');
    var img03 = document.getElementById('brew-01');
    var img04 = document.getElementById('view-01');
    var img05 = document.getElementById('view-02');
    var img06 = document.getElementById('alight-01');
    var img07 = document.getElementById('alight-02');
    var img08 = document.getElementById('trivia-01');
    var img09 = document.getElementById('dive-01');
    var img10 = document.getElementById('dive-02');
    var img11 = document.getElementById('dive-03');
    var img12 = document.getElementById('xy-01');
    var img13 = document.getElementById('xy-02');
    var img14 = document.getElementById('comedy-01');
    var img15 = document.getElementById('train-01');
    var img16 = document.getElementById('gulls-01');
    var img17 = document.getElementById('gulls-02');


    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img01.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    img02.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    img03.onclick = function () {
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

      img13.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img14.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img15.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img16.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

      img17.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
})