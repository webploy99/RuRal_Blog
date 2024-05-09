
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
                var content = this.nextElementSibling.querySelector(
                  ".content"
                );
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

    // // showpage content when clicking on links with data-
    document.addEventListener('DOMContentLoaded', function () {
        var showButtons = document.querySelectorAll('.showPage');

        showButtons.forEach(function(button) {
            button.addEventListener('click', function () {
                var content = this.nextElementSibling.querySelector(
                  ".pageContent"
                );
                content.classList.remove('hidden');
            });
        });

        document.body.addEventListener('click', function (event) {
            if (event.target.classList.contains('hidePage')) {
                var content = event.target.closest('.pageContent');
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

    // function change font

    function isKhmer(text) {
      var khmerRegex = new RegExp("[\u1780-\u17FF]+");
      return khmerRegex.test(text);
    }

    function changeFont() {
      var textElements = document.querySelectorAll("span, p");
      textElements.forEach(function (textElement) {
        var text = textElement.innerText;
        if (isKhmer(text)) {
          // If Khmer characters detected, apply font B
          textElement.classList.add("khmer");
          textElement.classList.remove("english");
        } else {
          // If not Khmer, apply font A
          textElement.classList.add("english");
          textElement.classList.remove("khmer");
        }
      });
    }
    
    changeFont();