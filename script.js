
    // Add active class to the current button (highlight it)
    var header = document.getElementById("myActive");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
    
    // show/hide content when clicking on links with data-
    document.addEventListener('DOMContentLoaded', function () {
        var showButtons = document.querySelectorAll('.showButton');

        showButtons.forEach(function(button) {
            button.addEventListener('click', function () {
                var content = this.nextElementSibling.querySelector('.content');
                content.classList.remove('hidden');
            });
        });

        document.body.addEventListener('click', function (event) {
            if (event.target.classList.contains('hideButton')) {
                var content = event.target.closest('.content');
                content.classList.add('hidden');
            }
        });
    });


// change page when click
    const first = document.querySelector.bind(document),
        second = document.querySelectorAll.bind(document);

    const ruralContent = second(".rural-item"),
        boxContent = second(".box-item ");

    ruralContent.forEach((rural, index) => {
        const newBox = boxContent[index];
        rural.onclick = function() {
            first(".rural-item.active").classList.remove("active")
            first(".box-item.active").classList.remove("active")

            rural.classList.add ("active")
            newBox.classList.add("active");
            console.log(rural)
        }
    })

    // owlCarousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        responsiveClass: true,
        items: 1,
        margin: 10,
        // nav: true,
        // dots: true,
    //   responsive: {
    //     20: {
    //       items: 1.1,
    //       nav: false,
    //     },
    //   },
    });