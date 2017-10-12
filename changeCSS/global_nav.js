function css_globalNav() {
    // Header Section
    $('.brandingImgWrap > a > img').attr('src', chrome.extension.getURL('header_institution.png'));
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
    if (!tabCreated && $('#paneTabs').length > 0) {
        var newNavButton = $('#Courses').clone();
        $(newNavButton).attr('id', 'Notifications');
        $('#appTabList > tbody > tr').append(newNavButton);
        $('#Notifications > a > span').html('Notifications Dashboard');
        $('#Notifications > a').attr('href', '/webapps/portal/execute/tabs/tabAction?tabId=_10_1&tab_tab_group_id=_137_1')

        document.getElementById("paneTabs").remove();

        tabCreated = true;
    }
    // End of Header Section
}