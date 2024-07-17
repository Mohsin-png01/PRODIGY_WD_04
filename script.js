document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#element', {
        strings: [' Web Developer.', ' Frontend Developer.', ' Backend Developer.', ' Full Stack Developer.'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    // Scroll event to reveal sections
    window.addEventListener('scroll', function() {
        var firstSection = document.querySelector('.firstsection');
        var secondSection = document.querySelector('.secondsection');
        var thirdSection = document.querySelector('.thirdsection');
        var fourthSection = document.querySelector('.fourthsection');
        var fifthSection = document.querySelector('.fifthsection');
        var boxes = document.querySelectorAll('.box');
        var aboutContent = document.querySelector('.about-content');
        var skillsContent = document.querySelector('.skills-content');
        var projectsContent = document.querySelector('.projects-content');
        var contactContent = document.querySelector('.contact-content');
        var leftSection = document.querySelector('.leftsection');
        var rightSection = document.querySelector('.rightsection');

        if (window.scrollY + window.innerHeight > firstSection.offsetTop + 50) {
            firstSection.classList.add('active');
        }

        if (window.scrollY + window.innerHeight > secondSection.offsetTop + 50) {
            secondSection.classList.add('active');
            aboutContent.classList.add('active');
        }

        if (window.scrollY + window.innerHeight > thirdSection.offsetTop + 50) {
            thirdSection.classList.add('active');
            skillsContent.classList.add('active');
        }

        if (window.scrollY + window.innerHeight > fourthSection.offsetTop + 50) {
            fourthSection.classList.add('active');
            projectsContent.classList.add('active');
        }

        if (window.scrollY + window.innerHeight > fifthSection.offsetTop + 50) {
            fifthSection.classList.add('active');
            contactContent.classList.add('active');
        }

        boxes.forEach(function(box) {
            if (window.scrollY + window.innerHeight > box.offsetTop + 50) {
                box.classList.add('active');
            }
        });

        if (window.scrollY + window.innerHeight > leftSection.offsetTop + 50) {
            leftSection.classList.add('active');
            rightSection.classList.add('active');
        }
    });

    // Back to top button
    var backToTopButton = document.getElementById('backToTop');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
