function css_loginPage() {
    // Change the look of the Username/Password input fields
    $('#user_id, #password').css({
        'border': 'none',
        'background-color': '#E8E8E8',
        'border-radius': '0',
        'color': '#232323',
        'outline': 'none',
        'box-shadow': 'none'
    });
    // Change the background of the page
    $('.login-page').css({
        'background': 'none',
        'background-color': '#F7F7F7',
        'color': 'white'
    });
    // Change the look of the announcement list items
    $('#loginAnnouncements > ul > li').css({
        'background-color': '#E8E8E8',
        'color': '#232323'
    });
    $('strong').css('color', '#009688');
    // Change the look of the Login button + fix the alignment to match the input fields
    $('#entry-login').css({
        'background': 'none',
        'border': 'none',
        'border-radius': '0',
        'background-color': '#009688',
        'margin-top': '9px',
        'margin-left': '-9px',
        'cursor': 'pointer',
        'text-decoration': 'none',
        'text-shadow': 'none',
        'box-shadow': 'none',
        'color': 'white'
    });
    // Align the labels with the input fields
    $('#loginFormList > li > label').css({
        'margin-left': '-9px'
    });
    // Change the look of the buttons on the top right of the page
    $('.font-size .contrast').css({
        'border': 'none'
    });
    // Remove Capitalization from Username/Password labels
    $('#loginFormList > li > label').css('text-transform', 'none');
    $('#loginFormList > li > label').attr('autocapitalize', 'off');
    // Remove useless buttons
    $('h2:first-of-type, .font-size, .contrast').css({
        'display': 'none'
    });
    $('#loginAnnouncements > ul').attr('id', 'boxShadowList');
    $('#loginAnnountements').css('text-align', 'center');
    $(document).find("a").css('color', '#009688');

    if (counter2 == 0) {
        /*
            Lets do this the completely incorrect and idiotic way, shall we?
        */
        $('#boxShadowList, #boxShadowList > li').css('display', 'none');

        var annHeaders = [];
        var annContent = [];
        var annDate = [];

        $('#boxShadowList > li').each(function (i, val) {
            annHeaders.push($(this).find("strong:first").clone());
            annContent.push($(this).find("p").clone());
            annDate.push($(this).find("em").clone());
            $(this).remove();
        });

        // I'm ashamed of this
        for (var x = 0; x < annHeaders.length; x++) {
            var currentDiv = document.createElement("div");
            $(currentDiv).addClass('newAnnBox');

            $(currentDiv).append(annHeaders[x]);
            $(currentDiv).append(annContent[x]);
            $(currentDiv).append(annDate[x]);

            $(currentDiv).find("strong:first").html($(currentDiv).find("strong:first").html() + "<br><br>");
            // $(currentDiv).find("p").html($(currentDiv).find("p").html().replace("<br>", ""));
            $(currentDiv).find("p:last").find("br").remove();

            $(currentDiv).find("em").html("<br>" + $(currentDiv).find("em").html());
            $(currentDiv).find("em").css({
                'text-align': 'right',
                'font-style': 'none',
                'color': '#232323'
            });

            document.getElementById('loginAnnouncements').appendChild(currentDiv);
            // Oh god why...
        }

        $('#boxShadowList').css('display', 'block');
        counter2++;
    }
}