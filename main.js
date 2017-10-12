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
    if ($('#topTabs').length > 0) {
        css_globalNav();
    }

    if (url === "https://dacc.blackboard.com/" || url.includes("https://dacc.blackboard.com/webapps/login/")) {
        css_loginPage();
    } else if (url === "https://dacc.blackboard.com/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1" || url === "https://dacc.blackboard.com/webapps/portal/execute/tabs/tabAction?tabId=_1_1&tab_tab_group_id=_1_1") {
        css_portletPage();
    } else if (url === "https://dacc.blackboard.com/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_2_1") {
        css_courseInformation();
    } else if (url.includes("https://dacc.blackboard.com/webapps/blackboard/execute/displayLearningUnit?course_id=") ||
     url.includes("https://dacc.blackboard.com/webapps/assignment/uploadAssignment?") ||
      url.includes("https://dacc.blackboard.com/webapps/blackboard/execute/announcement?") ||
       url.includes("https://dacc.blackboard.com/webapps/blackboard/content/listContent.jsp?") ||
        url.includes("https://dacc.blackboard.com/webapps/blackboard/messaging/course/folderList.jsp?")) {
        css_miscPages(url);
    }
}
