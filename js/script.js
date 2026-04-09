$(window).ready(function() {

    var vw = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0);
    var vh = Math.max(window.innerHeight || 0, document.documentElement.clientHeight || 0);

    !isIOS || isBrowser ? $('.book-wrapper').addClass('fullvh') : null;

    isIOS ? $('body').addClass('ios') : null;
    isAndroid ? $('body').addClass('android') : null;
    isFirefox ? $('body').addClass('mozilla') : null;

    // Add Class mobile
    isMobile && (vw < 500 || vh < 500) ? $('body').addClass('mobile') : null;

    isMobileAndOrientationLandscape = $('body').hasClass('mobile') && (window.orientation === 90 || window.orientation === -90)

    isMobileAndOrientationLandscape ?  $('#landscape').css({ 
                                        'line-height': vh + 'px',
                                        'width': vw + 'px',
                                        'display': 'block'
                                    }) : null;

    $('#more_info_container, .pageflipContainer').css({
        'width': !isMobile ? '600px' : '100%',
        'height': !isMobile || isAndroid ? vh + 'px' : '100%',
        'margin': '0 auto',
        'overflow': 'hidden'
    });

    // Fix for android
    if (isAndroid)
        $('.container').css({
            height: vh + 'px'
        });

    // Fix for iOS
    if (isIOS)
        $('.section.prof_exp').css({
            height: vh / 2 + 'px'
        });


    var pageOptions = {
        duration: 1000,
        width: !isMobile ? '600px' : '100%',
        height: !isMobile || isAndroid ? vh + 'px' : '100%',
        acceleration: true,
        display: 'single',
        autoCenter: true,
        cornerSize: 0,
        gradients: true,
        turnCorners: "bl,tr",
        elevation: 100,
        when: {
            start: function(e, pageOptions, corner) {

                $('.pageflip').addClass('block');

                if (!$('#more_info').hasClass('vis_off'))
                    e.preventDefault();
            },
            turned: function(e, page) {

                // Remove class - fixing the rendering issues
                if ($('#main').hasClass('vis_off')) {

                    document.body.addEventListener('mousemove', function(e) {
                        $('.pageflip').removeClass('block');
                    });

                    $('.top_skills .description').html(templates.skills());

                    $('.tools .description').html(templates.tools())

                    $(window).bind('keydown', function(e) {

                        if (e.target && e.target.tagName.toLowerCase() != 'input')
                            if (e.keyCode == 37)
                                $('.pages').turn('previous');
                            else if (e.keyCode == 39)
                            $('.pages').turn('next');

                    });

                    $('.pageflip').on('click', function(e) {

                        if ($(e.target).hasClass('right'))
                            $('.pages').turn('next');
                        else
                            $('.pages').turn('previous');
                    });

                    $('.chevron_left').on('click', function(e) {

                        $('.pages').turn('previous');

                    });

                    $('.chevron_right').on('click', function(e) {

                        $('.pages').turn('next');

                    });

                    // Do not change on resize
                    // $(window).on('resize', function() {
                    //     this.location.href = this.location.href;
                    // });

                    setTimeout(function() {

                        $('#main').removeClass('vis_off')

                    }, 0);

                }

                // Listener function to add all listeners
                function setListeners(page) {

                    switch (page) {
                        case 1:
                            $('#more_details')
                                .off()
                                .on('click', function() {
                                    $('.pages').turn("next");
                                });
                            break;
                        case 2:
                        case 3:
                            $('.more')
                                .off()
                                .on('click', function(e) {
                                    var target = $(e.target).attr('data-type');
                                    var html = '<div id="moreinfo_inner"><div class="close"><span>&#10005;</span></div>';

                                    switch (target) {
                                        case 'skills':
                                            html += '<div class="header"><span>Skills</span></div><div class="items">';

                                            Object.keys(tSkills).forEach(function(key) {
                                                html += "<div class='item'>" +
                                                    "<div class='item_img' style='background-image:url(\"" + tSkills[key].url + "\")');></div>" +
                                                    "<div class='item_name'>" + tSkills[key].name + "</div>" +
                                                    "</div>";
                                            });

                                            break;

                                        case 'tools':
                                            html += '<div class="header"><span>Tools</span></div><div class="items">';

                                            Object.keys(dTools).forEach(function(key) {
                                                html += "<div class='item'>" +
                                                    "<div class='item_img' style='background-image:url(\"" + dTools[key].url + "\")');></div>" +
                                                    "<div class='item_name'>" + dTools[key].name + "</div>" +
                                                    "</div>";
                                            });

                                            break;
                                    }

                                    html += "</div></div>"

                                    $('#more_info_container').html(html)

                                    setTimeout(function() {

                                        $('.close')
                                            .off()
                                            .on('click', function(e) {

                                                $('#more_info').addClass('vis_off')
                                                $('#more_info_container').html('');

                                            });

                                        $('#more_info').removeClass('vis_off')


                                    }, 0);
                                });
                            break;
                        case 8:
                            $('.description_links')
                                .off()
                                .on('click', function(e) {

                                    var id = $(e.target.parentNode).attr('id');

                                    var url = '';

                                    switch (id) {
                                        case 'fb':
                                            url = 'https://www.facebook.com/sarakanam.satish';
                                            break;
                                        case 'yt':
                                            url = 'https://www.youtube.com/channel/UCMcVMXyEDBniKuBc9mPjM4g?sub_confirmation=1';
                                            break;
                                        case 'gm':
                                            url = 'mailto:satish@sarakanam.com?subject=from%20satishsarakanam.com';
                                            break;
                                        case 'li':
                                            url = 'https://www.linkedin.com/in/satishsarakanam';
                                            break;
                                        case 'resume':
                                            url = './satishsarakanam.pdf';
                                            break;
                                    }

                                    window.open(url);

                                });
                            break;
                    }

                }

                $('.pages').removeClass(function(index, className) {
                    return (className.match(/(^|\s)page_id_\S+/g) || []).join(' ');
                }).addClass('page_id_' + page);

                $('body').removeClass(function(index, className) {
                    return (className.match(/(^|\s)page_num_\S+/g) || []).join(' ');
                }).addClass('page_num_' + page);

                // set listeners
                setTimeout(function() {
                    setListeners(page);
                }, 0);

            }
        }
    }

    $('.pages').turn(pageOptions);

    //Start My Game here,
    function main() {

        function init() {

            var instance = new Typewriter('#typing', {
                strings: ['Lead Frontend Developer', 'Lead React Developer', 'Lead Web UI Developer', 'Lead Web Application Developer'],
                autoStart: true,
                loop: true,
                pauseFor: 1000
            });

        }

        init();

    }

    main();

});