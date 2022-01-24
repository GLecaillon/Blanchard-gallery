window.addEventListener('DOMContentLoaded', function () {

  //---------------------site scroll------------------------------------------------
  $(document).ready(function () {
    var margin = 0;
    $("a").click(function () {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + margin + "px"
      }, {
        duration: 2000,
        easing: "swing"
      });
      return false;
    });
  });

  // ======================dropdown========================
  window.onclick = function (event) {
    if (!event.target.matches('.dropdown__button')) {
      var dropdowns = document.getElementsByClassName("dropdown__list-wrapper");
      var buttons = document.getElementsByClassName("dropdown__button");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        var activeButton = buttons[i];
        if (openDropdown.classList.contains('dropdown-is-active')) {
          openDropdown.classList.remove('dropdown-is-active');
        }
        if (activeButton.classList.contains('btn-is-active')) {
          activeButton.classList.remove('btn-is-active');
        }
      }
    }
  }

  window.onkeydown = function (esc) {
    if (esc.keyCode === 27) {
      document.querySelectorAll('.dropdown__list-wrapper').forEach(function (drop) {
        drop.classList.remove('dropdown-is-active');
      })

      document.querySelectorAll('.dropdown__button').forEach(function (btn) {
        btn.classList.remove('btn-is-active');
      })
    }
  }


  let buttons = document.querySelectorAll('.dropdown__button');
  let dropdowns = document.querySelectorAll('.dropdown__list-wrapper');

  for (let button of buttons) {
    button.addEventListener('click', elem);
  }

  function elem() {
    dropdowns.forEach(dropdown => {
      if (dropdown !== this.nextElementSibling) {
        dropdown.classList.remove('dropdown-is-active');
      }
    });

    buttons.forEach(button => {
      if (button !== this) {
        button.classList.remove('btn-is-active');
      }
    })

    this.nextElementSibling.classList.toggle('dropdown-is-active');
    this.classList.toggle('btn-is-active');
  }


  function disableScroll() {
    document.body.classList.add('disable-scroll');
  }

  function enableScroll() {
    document.body.classList.remove('disable-scroll');
  }

  if ($('.button').hasClass('btn-is-active')) {
    disableScroll();
  } else {
    enableScroll();
  }

  let burger = document.querySelector('#burger');
  let mainNav = document.querySelector('.upper-nav');

  let headerForm = document.querySelector('.header__form--1024');
  let searchButton = document.querySelector('#search');
  let buttonDisable = document.querySelector('.form__disable--768');
  let formSearch = document.querySelector('.form__search');

  burger.addEventListener('click', function () {
    this.classList.toggle('burger-is-active');
    mainNav.classList.toggle('upper-nav-is-active');
  });

  searchButton.addEventListener('click', function () {
    headerForm.classList.add('header__form--768');
    formSearch.classList.add('search-is-active');
    buttonDisable.classList.add('form__disable--768-is-active');
  });

  buttonDisable.addEventListener('click', function () {
    headerForm.classList.remove('header__form--768');
    formSearch.classList.remove('search-is-active');
    buttonDisable.classList.remove('form__disable--768-is-active');
  })

  // ------------------------------------hero swiper---------------------------------------------
  const mySwiper0 = new Swiper('.hero__swiper-container', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    resizeObserver: true,
    speed: 3000,
    autoplay: {
      delay: 7000,
    },
  });

  // -------------------gallery modal----------------------------------------------------------

  const modal = new GraphModal();

  // ----------------------gallery swiper------------------------------------------------------

  const mySwiper1 = new Swiper('.gallery__swiper-container', {
    // Optional parameters
    //  loop: true,
    resizeObserver: true,
    speed: 1500,
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
    slidesPerGroup: 3,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
      },
      // when window width is >= 601px
      601: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
      },
      // // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    },


    // If we need pagination
    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
    },

    // navigation arrows
    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
    },

  });

  // ==============select====================================

  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false
  });

  // ================tabs==================================

  let countryBtns = document.querySelectorAll('.country__button');

  countryBtns.forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      countryBtns.forEach(function (border) {
        border.classList.remove('country__button-is-active');
      });
      this.classList.add('country__button-is-active');

      const path = event.currentTarget.dataset.flagBtn;
      document.querySelectorAll('.country__tabs').forEach(function (countryTabs) {
        countryTabs.classList.remove('country__tabs-is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('country__tabs-is-active');



      document.querySelectorAll('.catalogue__artist-dossier').forEach(function (biography) {
        biography.classList.remove('catalogue__artist-dossier-is-active');
      });
      let elem = document.querySelector('.country__tabs-is-active');
      elem.lastElementChild.firstElementChild.classList.add('catalogue__artist-dossier-is-active');


      let artBtns = document.querySelectorAll('.artists__button').forEach(function (artBtn) {
        artBtn.classList.remove('artists__button-is-active');
      })
      let defaultButton = elem.querySelector('.artists__default-button');
      defaultButton.classList.add('artists__button-is-active');



      $('.accordion').accordion("refresh");
    });
  });
  //----------------------------------------------------------------------------------------------------------
  //-------------------------------------------accordion------------------------------------------------------
  $(function () {
    $(".accordion").accordion({
      // active: false,
      heightStyle: "content",
      collapsible: true,
    });
  });

  let artBtns = document.querySelectorAll('.artists__button');

  artBtns.forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      artBtns.forEach(function (border) {
        border.classList.remove('artists__button-is-active');
      });
      this.classList.add('artists__button-is-active');

      const path = event.currentTarget.dataset.artBtn;
      document.querySelectorAll('.catalogue__artist-dossier').forEach(function (catalogTabs) {
        catalogTabs.classList.remove('catalogue__artist-dossier-is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalogue__artist-dossier-is-active');
    });
  });

  if (document.documentElement.clientWidth <= 850) {
    artBtns.forEach(function (tabs) {
      tabs.addEventListener('click', () => {
        let activeCatalog = document.querySelector('.catalogue__artist-dossier-is-active');
        activeCatalog.scrollIntoView({
          block: "start",
          behavior: "smooth"
        });
      });
    });
  };

  // ==================events===================================

  let btn = document.querySelector('#event_btn');
  btn.addEventListener('click', function (event) {
    document.querySelectorAll('.event__card').forEach(function (elem) {
      elem.classList.add('events-is-active');
    });
    this.classList.add('no-active');
  });


  //----------------------------event SWIPER-----------------------------------
  const slider = document.querySelector('.events__swiper-container');
  let mySwiper2;

  function mobileSlider() {
    if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
      mySwiper2 = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        slideClass: 'event__card',
        pagination: {
          el: '.events__swiper-pagination',
          clickable: true,
        },
      });
      slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 600) {
      slider.dataset.mobile = 'false';
      if (slider.classList.contains('swiper-container-initialized')) {
        mySwiper2.destroy();
      }
    }
  }

  mobileSlider()
  window.addEventListener('resize', () => {
    mobileSlider();
  });

  //----------------------------------------------------------------------------------------------------------

  //----------------------------editions SWIPER-----------------------------------
  const swiper = document.querySelector('.editions__swiper-container');
  let mySwiper3;

  function notmobileSlider() {
    if (window.innerWidth > 600 && swiper.dataset.notmobile == 'false') {
      mySwiper3 = new Swiper('.editions__swiper-container', {
        // Optional parameters
        loop: true,
        grabCursor: true,
        speed: 1000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },

        breakpoints: {
          // when window width is >= 600px
          600: {
            slidesPerView: 2, // or 'auto'
            slidesPerColumn: 1,
            spaceBetween: 34,
            slidesPerGroup: 2,
          },
          // // when window width is >= 850px
          850: {
            slidesPerView: 2, // or 'auto'
            slidesPerColumn: 1,
            spaceBetween: 50,
            slidesPerGroup: 1,
          },
          // // when window width is >= 1400px
          1400: {
            slidesPerView: 3, // or 'auto'
            slidesPerColumn: 1,
            spaceBetween: 50,
            slidesPerGroup: 3,
          }
        },

        // If we need pagination
        pagination: {
          el: '.editions__swiper-pagination',
          type: 'fraction',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.editions__swiper-button-next',
          prevEl: '.editions__swiper-button-prev',
        },
      });
      swiper.dataset.notmobile = 'true';
    }

    if (window.innerWidth <= 600) {
      swiper.dataset.notmobile = 'false';
      if (swiper.classList.contains('swiper-container-initialized')) {
        mySwiper3.destroy();
      }
    }
  }

  notmobileSlider()
  window.addEventListener('resize', () => {
    notmobileSlider();
  });

  // ----------------------checkbox---------------------------------------------
  function checkBox() {
    let cathegoryBtn = document.querySelector('.cathegories__button');
    let cathegoryLabels = document.querySelectorAll('.cathegories__label');

    cathegoryLabels.forEach(function (label) {
      label.classList.add('cathegories__label-no-active');
    });

    cathegoryBtn.addEventListener('click', function () {
      this.classList.toggle('cathegories__button-is-active');
      cathegoryLabels.forEach(function (label) {
        label.classList.toggle('cathegories__label-no-active');
      });
    });

    let checkBoxs = document.querySelectorAll('.cathegories__checkbox');
    checkBoxs.forEach(function (checkMark) {
      checkMark.addEventListener('change', function () {
        if (checkMark.checked) {
          checkMark.parentNode.classList.add('cathegories__label-is-active');
        } else {
          checkMark.parentNode.classList.remove('cathegories__label-is-active');
        };
      });
    });
  };

  checkBox();

  // ========================================================================
  //---------------projects Swiper---------------
  const mySwiper4 = new Swiper('.projects__swiper-container', {
    // Optional parameters
    loop: true,
    speed: 600,
    // slidesPerView: 3, // or 'auto'
    // slidesPerColumn: 1,
    // spaceBetween: 50,
    // slidesPerGroup: 3,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1, // or 'auto'
        slidesPerColumn: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },
      // when window width is >= 600px
      600: {
        slidesPerView: 2, // or 'auto'
        slidesPerColumn: 1,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      // // when window width is >= 850px
      850: {
        slidesPerView: 2, // or 'auto'
        slidesPerColumn: 1,
        spaceBetween: 50,
        slidesPerGroup: 2,
      },
      // // when window width is >= 1025px
      1025: {
        slidesPerView: 3, // or 'auto'
        slidesPerColumn: 1,
        spaceBetween: 50,
        slidesPerGroup: 3,
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  });
  // -----------------tooltip----------------------

  tippy('#tippy1', {
    content: 'Пример современных тенденций - современная методология разработки',
  });

  tippy('#tippy2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  });

  tippy('#tippy3', {
    content: 'В стремлении повысить качество',
  });


  //----------------------validate------------------
  // var selector = document.querySelector("input[type='tel']");

  // var im = new Inputmask("+7 (999)-999-99-99");
  // im.mask(selector);


  // new JustValidate('.contacts__form', {

  //   rules: {
  //     name: {
  //       required: true,
  //       minLength: 2,
  //       maxLength: 10
  //     },
  //     tel: {
  //       required: true,
  //       function: (name, value) => {
  //         const phone = selector.inputmask.unmasquedvalue()
  //         return Number(phone) && phone.length === 10
  //       }
  //     },

  //   },

  //   messages: {

  //     name: {
  //       required: 'Как вас зовут?'
  //     },

  //     tel: {
  //       required: 'Укажите ваш телефон'
  //     },

  //   },
  //   colorWrong: '#FF5C00'

  // });


  let selector = document.querySelector("input[type='tel']");
  let myMask = new Inputmask("+7 (999)-999-99-99");
  myMask.mask(selector);

  let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: {
        name: {
          required: 'Как вас зовут?',
          minLength: 2,
          maxLength: 10,
        },

        tel: {
          required: 'Укажите ваш телефон',
          function: 'Некорректный номер телефона'
        },
      },
      colorWrong: '#FF5C00',

      submitHandler: function(form) {
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
              document.querySelector('.contacts__button').addEventListener('click', () => {
                new GraphModal().open('second');
              });
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        form.reset();
      }
    });
  };

  validateForms('.contacts__form', {
    name: {
      required: true,
      minLength: 4,
      maxLength: 25
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  }, '.thanks-popup', 'send goal');

// ============================contact layout change=====================================

  let screen600 = window.matchMedia('(max-width: 600px)');
  const address = document.querySelector('.contact__address');
  const yaMap = document.querySelector('.map');

  if (document.documentElement.clientWidth <= 600) {
    address.insertAdjacentElement("afterend", yaMap);
  }

  screen600.addEventListener('change', function (el) {
    if (el.matches) {
      address.insertAdjacentElement("afterend", yaMap);
    } else {
      window.location.reload();
    }
  });
  // -----------------------map-----------------
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.759, 37.60],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 15,
      controls: [],
    });

    myMap.controls.add('zoomControl', {
      size: 'small',
      float: 'none',
      position: {
        bottom: '350px',
        right: '10px'
      }
    });

    myMap.controls.add('geolocationControl', {
      float: 'none',
      position: {
        bottom: '315px',
        right: '10px'
      }
    });
    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.8, 37.8] // координаты точки
      }
    });
    var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/map_marker.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark);

  };

  // ---------------------------------------------------------------------------------------------------------------------
});
