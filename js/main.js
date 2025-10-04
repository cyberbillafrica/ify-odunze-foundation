
    
   document.addEventListener('DOMContentLoaded', function() {
  const donationFormContainer = document.getElementById('donationFormContainer');
  const form = document.getElementById('donationForm');
  const amountButtons = document.querySelectorAll('.amount-button');
  const customAmountBtn = document.getElementById('customAmountBtn');
  const customAmountContainer = document.getElementById('customAmountContainer');
  const customAmountInput = document.getElementById('customAmount');
  const accountDetails = document.getElementById('accountDetails');
  const paidButton = document.getElementById('paidButton');
  const uploadSection = document.getElementById('uploadSection');
  const whatsappBtn = document.getElementById('whatsappBtn');

  let selectedAmount = null;
  let finalAmount = null;
  let donorName = "";
  let donorEmail = "";

  // Handle preset amounts
  amountButtons.forEach(button => {
    button.addEventListener('click', function() {
      amountButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      selectedAmount = this.dataset.amount;
      customAmountContainer.style.display = 'none';
      customAmountInput.required = false;
    });
  });

  // Handle custom amount
  customAmountBtn.addEventListener('click', function() {
    amountButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    customAmountContainer.style.display = 'block';
    customAmountInput.required = true;
    selectedAmount = 'custom';
  });

  // Handle donation form submit
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Save donor details **before hiding form**
    donorName = document.getElementById('name').value.trim() || "Anonymous Donor";
    donorEmail = document.getElementById('email').value.trim();

    if (selectedAmount === 'custom') {
      finalAmount = customAmountInput.value.trim();
      if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
        alert('Please enter a valid custom donation amount.');
        return;
      }
    } else {
      finalAmount = selectedAmount;
    }

    donationFormContainer.style.display = 'none';
    accountDetails.style.display = 'block';
  });

  // After payment
  paidButton.addEventListener('click', function() {
    accountDetails.style.display = 'none';
    uploadSection.style.display = 'block';

    // WhatsApp message with stored donorName + amount
    const message = `Hello, I just made a donation.\n\nName: ${donorName}\nAmount: ₦${Number(finalAmount).toLocaleString()}\n\nI will now send my proof of payment.`;

    // Replace with your Foundation WhatsApp number (include country code, no +)
    const whatsappNumber = "2348022987177";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    whatsappBtn.setAttribute('href', whatsappLink);
  });
});



(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('fixed-top').css('padding', '0');
        } else {
            $('.nav-bar').removeClass('fixed-top').css('padding', '0px 90px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Donation progress
    $('.donation-item .donation-progress').waypoint(function () {
        $('.donation-item .progress .progress-bar').each(function () {
            $(this).css("height", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'rotateOutUpRight',
        animateIn: 'rotateInDownLeft',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : false,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

