(function ($) {
    'use strict';

    AOS.init({
        once: true
    });

    // Progress Bar
    $(window).on('load', function () {
        $('.progress-bar').each(function () {
            var width = $(this).data('percent');
            $(this).css({ 'transition': 'width 3s' });
            $(this).appear(function () {
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50
                });
            });
        });
    });

    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 8000
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });

    $('.product-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // Enquire buttons email subject
    document.addEventListener("DOMContentLoaded", function () {
        // Get the page title
        var pageTitle = document.title;
        // Encode the title for use in a URL
        var encodedTitle = encodeURIComponent(pageTitle);
        // Set the href attribute of all enquire buttons
        document.querySelectorAll('.enquire-btn').forEach(button => {
            button.href = "mailto:kenrick.koh@carcell.com?subject=" + encodedTitle;
        });
    });

    // Accordion functionality
    function toggleAccordions(card, displayStyle) {
        const panels = card.querySelectorAll('.panel');
        panels.forEach(panel => {
            panel.style.display = displayStyle;
        });
    }

    // Handle accordion toggle
    document.querySelectorAll('.accordion').forEach(button => {
        button.addEventListener('click', () => {
            // Toggle the active class on the button
            button.classList.toggle('active');

            // Toggle the panel visibility
            const panel = button.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });

    // Expand or collapse all panels within a card
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('.clickable-header').forEach(header => {
            header.addEventListener('click', function () {
                const card = header.closest('.scenario-card');
                const panels = card.querySelectorAll('.panel');

                if (panels.length > 0) {
                    const firstPanel = panels[0];
                    const shouldExpand = firstPanel.style.display === 'none' || firstPanel.style.display === '';

                    // Expand or collapse all panels
                    toggleAccordions(card, shouldExpand ? 'block' : 'none');
                }
            });
        });
    });

})(jQuery);
