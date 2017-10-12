function css_miscPages(url) {
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

    $('.copyright').remove();

    $('#content > .localViewToggle > .clearfix').css('background-color', 'rgb(247, 247, 247)');
}