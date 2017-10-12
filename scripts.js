var anchors = document.getElementsByTagName('a');
var tabCreated = false;

for (var x = 0; x < anchors.length; x++) {
    if (anchors[x].href.indexOf("bbcswebdav") != -1) {
        $(anchors[x]).css({
            'color':'blue',
            'font-weight':'bold',
            'text-decoration':'underline'
        });
    }
}

// Code was running before everything was loaded, this is to run changeCSS on a delay to make sure it modifies everything.
// Run changeCSS once before runCode to create a more seamless transition into the new theme.

changeCSS(window.location.href);

var counter = 0;
var counter2 = 0;
var runCode = setInterval(function() {
    changeCSS(window.location.href);

    if (counter < 10) {
        counter++;
    } else {
        clearInterval(runCode);
    }
}, 300);

console.log(window.location.href);

//TODO Better organization
//TODO Fix HTTPS > HTTP warning
//TODO Add credits

function changeCSS(url) {
    console.log("CSS CHANGED");

    if (url === "https://dacc.blackboard.com/" || url.includes("https://dacc.blackboard.com/webapps/login/")) {
        console.log("HOMEPAGE");
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
            'box-shadow': 'none'
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
    } else if (url === "https://dacc.blackboard.com/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1" || url === "https://dacc.blackboard.com/webapps/portal/execute/tabs/tabAction?tabId=_1_1&tab_tab_group_id=_1_1") {
        console.log("PORTLET PAGE");
        $(document).find("a").css('color', '#009688');
        $('.topTabs').css({
            'background': 'none',
            'background-color': '#F7F7F7',
            'box-shadow': 'none'
        });
        $('#quick_links_lightbox_link').css('display', 'none');
        $('#globalNavPageContentArea').css({
            'background': 'none',
            'background-color': '#E8E8E8'
        });
        $('#content, .containerPortal, .contentBox').css({
            'border': 'none',
            'box-shadow': 'none',
            '-webkit-box-shadow': 'none',
            'background-color': '#E8E8E8'
        });
        $('.hideoff').css('border-bottom', '14px solid #E8E8E8');
        // $('#appTabList').css('max-height', '20px');
        // $('#appTabList > tbody > tr > td').css({
        //     'background-color': '#F7F7F7'
        // });
        $('#appTabList > tbody > tr > td > a > span').css({
            'color': '#009688',
            'text-shadow': 'none'
        });
        $('.portlet').css({
            'border-radius': '0',
            'border': 'none',
            'box-shadow': 'none',
            'background-color': '#F7F7F7'
        });
        $('.coursefakeclass > li > a').css({
            'color': '#009688'
        });
        $('.portletList').css({
            'color': '#009688'
        });
        $('.moduleTitle').css({
            'text-shadow': 'none',
            'color': '#232323'
        });
        $('#global-nav-link, .global-nav-bar, .nav-link').css({
            'background-color': '#E8E8E8',
            'color': '#232323',
            'margin-left': '0px'
        });
        $('#badgeTotalCount').css({
            'background-color': '#009688'
        });
        $('.actionMenuButton').css({
            'border-radius': '0',
            'border': 'none',
            'outline': 'none',
            'background-color': '#F7F7F7',
            'color': '#232323'
        });
        $('.portletList-img > li > a, .portletList > li > a, .headerText').css({
            'color': '#009688'
        });
        console.log("Ignore next warning");
        $('.brandingImgWrap > a > img').attr('src', chrome.extension.getURL("header_institution.png"));
        $('.bannerImage').css({
            'margin-left': 'auto',
            'margin-right': 'auto',
            'left': '0',
            'right': '0',
            'top': 'auto'
        });
        $('.portlet > h2').css({
            'border-bottom': '2px solid #009688'
        });
        $('.collapsible').css({
            'border-top': 'none',
            'overflow': 'hidden'
        });
        $('#searchData > div > img:first').css('width', '100%');
        $('#globalNavPageNavArea').css('box-shadow', '2px 2px 10px black');
        //170x41
        $('.course > span').css({
            'color': 'white',
            'background-color': '#db152c',
            'border': 'none',
            'border-radius': '0',
            'padding': '1px 3px 1px 3px',
            'float': 'right'
        });
        $('.course > span').text(function() {
            return $(this).text().replace(" - ", "");
        });
        $('.portletList > li:not(:first), portletList-img > li:not(:first)').css({
            'border-top': '1px solid #E8E8E8'
        });
        $('#global-nav-tools, #global-nav-flyout').css({
            'background-color': '#E8E8E8'
        });
        $('.itemGroups > li').css('border-bottom', '1px solid #E8E8E8');
        $('.portletInfoFooter').css('display', 'none');
        $('.itemHead, .itemHeadOpen, .noItems').css('background-color', '#F7F7F7');
        $('.actionMenuButton').css('display', 'none');
        $('.itemHead, .eudModule-inner, .courseListing > li').css('border', 'none');
        $('.dateSelector').css('border-bottom', '1px solid #E8E8E8');
        $('.blockGroups > li:not(:last), .courseListing > li:not(:last)').css('border-bottom', '1px solid #E8E8E8');
        $('.courseListing > li').css({
            'margin-bottom': '0',
            'padding-bottom': '7px'
        });
        $('input[type="text"]').css({
            'background-color': '#E8E8E8',
            'border': 'none',
            'color': '#232323',
            'outline': 'none',
            'padding': '5px',
            'margin': '5px 0px 5px 0px'
        });
        $('img[src="/webapps/bbgs-internships_integration-bb_bb60/images/1_my_institution_4_header-with-text.png"]').attr('src', 'http://bbutner.me/kickstart_redone.png');
        // $("img[src='/images/ci/icons/cm_arrow.gif']").remove();
        $('.cmimg').css({
            'background-image': 'none'
        });
        $('.ek-modal-content').css({
            'background-color': '#F7F7F7',
            'border-radius': '0'
        });
        $('.ek-modal-header').css({
            'background-color': '#E8E8E8',
            'border': 'none',
            'border-radius': '0',
            'border-bottom': '2px solid #009688'
        });
        $('.ek-modal-btn-primary').css({
            'background': 'none',
            'background-color': '#009688',
            'color': 'white',
            'border-radius': '0',
            'border': 'none',
            'text-shadow': 'none'
        });
        $('.ek-modal-btn-default').css({
            'background': 'none',
            'background-color': '#E8E8E8',
            'color': '#232323',
            'border-radius': '0',
            'border': 'none',
            'text-shadow': 'none'
        });
        $("input[type='image']").attr('src', 'http://bbutner.me/input_search.png');
        $('#datePicker_bbDateTimePicker, a[href="javascript:updateDate()"]').css({
            'border': 'none',
            'border-radius': '0',
            'background': 'none',
            'background-color': '#E8E8E8'
        });
        $('.portletBlock').css('border-top', 'none');
    } else if (url === "https://dacc.blackboard.com/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_2_1") {
        $('.brandingImgWrap > a > img').attr('src', 'http://bbutner.me/header_institution_dark.png');
        $('.bannerImage').css({
            'margin-left': 'auto',
            'margin-right': 'auto',
            'left': '0',
            'right': '0',
            'top': 'auto'
        });
        $('.topTabs').css({
            'background': 'none',
            'background-color': '#F7F7F7',
            'box-shadow': 'none'
        });
        $('#globalNavPageContentArea').css({
            'background': 'none',
            'background-color': '#E8E8E8'
        });
        $('#appTabList > tbody > tr > td > a > span').css({
            'color': '#009688',
            'text-shadow': 'none'
        });
        $('.hideoff').css('border-bottom', '14px solid #E8E8E8');
        $('#column0, #column2').css('display', 'none')
        $('#content, .containerPortal, .contentBox').css({
            'border': 'none',
            'box-shadow': 'none',
            '-webkit-box-shadow': 'none',
            'background-color': '#E8E8E8'
        });
        $('.containerPortal').css({
            'display': 'flex',
            'justify-content': 'center'
        });
        $('.portlet').css({
            'border': 'none',
            'border-radius': '0',
            'background-color': '#F7F7F7'
        });
        $('.portlet > h2').css({
            'border-bottom': '2px solid #009688'
        });
        $('.collapsible').css({
            'border-top': 'none',
            'overflow': 'hidden'
        });
        $('.portletList-img > li > a, .portletList > li > a, .headerText').css({
            'color': '#009688'
        });
        $('#quick_links_lightbox_link').css('display', 'none');
        $('#global-nav-link, .global-nav-bar, .nav-link').css({
            'background-color': '#E8E8E8',
            'color': '#232323',
            'margin-left': '0px'
        });
        $('#badgeTotalCount').css({
            'background-color': '#009688'
        });
        $('.portlet > .portletList-img > li:not(:first)').css({
            'border-top': '1px solid #E8E8E8'
        });
        //courseInformation
        $('.courseInformation > .name').text(function() {
            return $(this).text().replace(";", "");
        });
    } else if (url.includes("https://dacc.blackboard.com/webapps/blackboard/execute/displayLearningUnit?course_id=") ||
     url.includes("https://dacc.blackboard.com/webapps/assignment/uploadAssignment?") ||
      url.includes("https://dacc.blackboard.com/webapps/blackboard/execute/announcement?") ||
       url.includes("https://dacc.blackboard.com/webapps/blackboard/content/listContent.jsp?") ||
        url.includes("https://dacc.blackboard.com/webapps/blackboard/messaging/course/folderList.jsp?")) {
        // Header Section
        $('.brandingImgWrap > a > img').attr('src', 'http://bbutner.me/header_institution_dark.png');
        $('.bannerImage').css({
            'margin-left': 'auto',
            'margin-right': 'auto',
            'left': '0',
            'right': '0',
            'top': 'auto'
        });
        $('.topTabs').css({
            'background': 'none',
            'background-color': '#F7F7F7',
            'box-shadow': 'none'
        });
        $('#globalNavPageContentArea').css({
            'background': 'none',
            'background-color': '#E8E8E8'
        });
        $('#appTabList > tbody > tr > td > a > span').css({
            'color': '#009688',
            'text-shadow': 'none'
        });
        $('.hideoff').css('border-bottom', '14px solid #E8E8E8');
        $('#quick_links_lightbox_link').css('display', 'none');
        $('#global-nav-link, .global-nav-bar, .nav-link').css({
            'background-color': '#E8E8E8',
            'color': '#232323',
            'margin-left': '0px'
        });
        $('#badgeTotalCount').css({
            'background-color': '#009688'
        });
        $('#breadcrumbs').css({
            'margin': '0px',
            'border-radius': '0',
            'border': 'none',
            'background-color': '#E8E8E8',
        });
        $('.coursePath').css('display', 'none');
        $('.path > ol > li').css('color', '#009688');
        $('.path > ol > li > a').css('color', '#009688');

        // Deletes new display bar and adds the "Notifications Dashboard" button to the main nav bar because why is there a second nav bar...?
        if (!tabCreated) {
            var newNavButton = $('#Courses').clone();
            $(newNavButton).attr('id', 'Notifications');
            $('#appTabList > tbody > tr').append(newNavButton);
            $('#Notifications > a > span').html('Notifications Dashboard');
            $('#Notifications > a').attr('href', '/webapps/portal/execute/tabs/tabAction?tabId=_10_1&tab_tab_group_id=_137_1')

            document.getElementById("paneTabs").remove();

            tabCreated = true;
        }
        // End of Header Section

        $('#menuWrap').css({
            'border-radius': '0',
            'border': 'none',
            'box-shadow': 'none',
            '-webkit-box-shadow': 'none',
        });
        $('.navPaletteContent').css('background-color', '#F7F7F7');
        $('.actionBarMicro').css({
            'background': 'none',
            'background-color': '#009688',
            'box-shadow': 'none',
            '-webkit-box-shadow': 'none'
        });
        $('#refreshMenuLink > a, #courseMapButton > a, #courseMapButton').css({
            'box-shadow': 'none',
            '-webkit-box-shadow': 'none',
            'background': 'none',
            'background-color': '#009688',
            'border': 'none'
        });
        $('.navPaletteTitle > h3 > a').css('color', '#009688');
        $('#courseMenuPalette_contents > li > a > span').css('color', '#232323');
        $('.locationPane').css('margin-top', '0px');

        //TODO Figure out a better way to deal with the menuPuller, people might actually use that.
        $('#courseMenu_combo, #menuPuller').css('display', 'none');

        $('#tocSideButtons > a').css({
            'border': 'none',
            'border-radius': 'none'
        });

        $('#tocCart').css({
            'border': 'none',
            'border-radius': '0',
            'height': 'auto',
            'background-color': '#F7F7F7'
        });

        $('#content').css({
            'box-shadow': 'none',
            'padding': 'none',
            'border': 'none',
            'border-radius': '0',
            'height': '485px'
        });

        // TODO Change the dropdown images
        // 18x18

        // TODO Change the connection images
        $("img[src='/images/ci/icons/nlstree/lineints.gif'], img[src='/images/ci/icons/nlstree/lineang.gif']").css('display', 'none');
        $('.tocFolder').css({
            'color': '#009688'
        });
        $('.itemActive').css({
            'border': 'none',
            'border-radius': '0',
            'background-color': 'transparent'
        });
        $('.tree > li:not(:first)').css('border-top', '1px solid #E8E8E8');
        $('#pageTitleDiv').css({
            'background': 'none',
            'background-color': '#F7F7F7',
            'border': 'none',
            'border-radius': '0',
            '-webkit-box-shadow': 'none',
            'border-bottom': '2px solid #009688'
        });
        $('#containerdiv').css({
            'color': '#232323',
            'background-color': '#F7F7F7'
        });
        $('a > .label').css({
            'background-color': '#009688',
            'color': '#F7F7F7',
            'padding': '5px'
        });
        $('.u_reverseAlign > a').css({
            'background': 'none',
            'background-color': '#E8E8E8',
            'border': 'none',
            'border-radius': '0'
        });
        $('input[type="submit"]').css({
            'background': 'none',
            'background-color': '#009688',
            'border': 'none',
            'border-radius': '0',
            'color': '#F7F7F7',
            'text-shadow': 'none',
            'text-decoration': 'none'
        });
        $('input[type="button"], #submissionLink, .pagelink, #listContainer_openpaging').css({
            'background': 'none',
            'background-color': '#E8E8E8',
            'border': 'none',
            'border-radius': '0',
            'color': '#232323',
            'text-shadow': 'none',
            'text-decoration': 'none'
        });
        $('div > h3 > span').css({
            'color': '#009688',
            'border': 'none'
        });
        $('#dataCollectionContainer > div').css('border-top', '1px solid #E8E8E8');
        $('#content_listContainer:not(:first)').css('border-top', '1px solid #E8E8E8');
        $('#actionbar').css({
            'background': 'none',
            'box-shadow': 'none',
            'border': 'none',
            'background-color': '#E8E8E8'
        });
        $('.mainButton').css({
            'box-shadow': 'none',
            'border': 'none'
        });

        if (url.includes("folderList")) {
            $('#pageTitleDiv').css('border-bottom', 'none');
        }

        $('.mainButton > a').css({
            'background': 'none',
            'background-color': '#009688',
            'color': '#F7F7F7',
            'box-shadow': 'none',
            'border': 'none',
            'text-shadow': 'none'
        });
    } else if (url === "https://dacc.blackboard.com/webapps/bbgs-internships_integration-bb_bb60/app/ssoUserTool?tab_tab_group_id=_92_1") {
        // Header Section
        $('.brandingImgWrap > a > img').attr('src', 'http://bbutner.me/header_institution_dark.png');
        $('.bannerImage').css({
            'margin-left': 'auto',
            'margin-right': 'auto',
            'left': '0',
            'right': '0',
            'top': 'auto'
        });
        $('.topTabs').css({
            'background': 'none',
            'background-color': '#F7F7F7',
            'box-shadow': 'none'
        });
        $('#globalNavPageContentArea').css({
            'background': 'none',
            'background-color': '#E8E8E8'
        });
        $('#appTabList > tbody > tr > td > a > span').css({
            'color': '#009688',
            'text-shadow': 'none'
        });
        $('.hideoff').css('border-bottom', '14px solid #E8E8E8');
        $('#quick_links_lightbox_link').css('display', 'none');
        $('#global-nav-link, .global-nav-bar, .nav-link').css({
            'background-color': '#E8E8E8',
            'color': '#232323',
            'margin-left': '0px'
        });
        $('#badgeTotalCount').css({
            'background-color': '#009688'
        });
        $('#breadcrumbs').css({
            'margin': '0px',
            'border-radius': '0',
            'border': 'none',
            'background-color': '#E8E8E8',
        });
        $('.coursePath').css('display', 'none');
        $('.path > ol > li').css('color', '#009688');
        $('.path > ol > li > a').css('color', '#009688');

        // Deletes new display bar and adds the "Notifications Dashboard" button to the main nav bar because why is there a second nav bar...?
        if (!tabCreated) {
            var newNavButton = $('#Courses').clone();
            $(newNavButton).attr('id', 'Notifications');
            $('#appTabList > tbody > tr').append(newNavButton);
            $('#Notifications > a > span').html('Notifications Dashboard');
            $('#Notifications > a').attr('href', '/webapps/portal/execute/tabs/tabAction?tabId=_10_1&tab_tab_group_id=_137_1')

            document.getElementById("paneTabs").remove();

            tabCreated = true;
        }
        // End of Header Section
        $('#content').css({
            'border': 'none',
            'background-color': '#F8F8F8',
            'border-radius': '0',
            'box-shadow': 'none'
        });
        $('input[type="text"]').css({
            'border': 'none',
            'background-color': '#E8E8E8',
            'color': '#232323',
            'padding': '4px',
            'outline': 'none',
            'margin-top': '3px'
        });
        $('input[type="image"]').attr('src', 'http://www.bbutner.me/input_submit.png');
        $('a').css('color', '#009688');
    }
}
