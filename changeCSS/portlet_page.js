function css_portletPage() {
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
}