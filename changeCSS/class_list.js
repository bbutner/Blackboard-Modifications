function css_courseInformation() {
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
}