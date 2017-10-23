// jQuery for page scrolling feature - requires jQuery Easing plugin

var mapCol = [
  {
    'featureType': 'road',
    'stylers': [
      {
        'hue': '#5e00ff'
      },
      {
        'saturation': -79
      }
    ]
  },
  {
    'featureType': 'poi',
    'stylers': [
      {
        'saturation': -78
      },
      {
        'hue': '#6600ff'
      },
      {
        'lightness': -47
      },
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'stylers': [
      {
        'lightness': 22
      }
    ]
  },
  {
    'featureType': 'landscape',
    'stylers': [
      {
        'hue': '#6600ff'
      },
      {
        'saturation': -11
      }
    ]
  },
  {},
  {},
  {
    'featureType': 'water',
    'stylers': [
      {
        'saturation': -65
      },
      {
        'hue': '#1900ff'
      },
      {
        'lightness': 8
      }
    ]
  },
  {
    'featureType': 'road.local',
    'stylers': [
      {
        'weight': 1.3
      },
      {
        'lightness': 30
      }
    ]
  },
  {
    'featureType': 'transit',
    'stylers': [
      {
        'visibility': 'simplified'
      },
      {
        'hue': '#5e00ff'
      },
      {
        'saturation': -16
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'stylers': [
      {
        'saturation': -72
      }
    ]
  },
  {}
]

function initMap () {
  var latLng = {lat: 41.327, lng: 19.818590};

  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: latLng, 
    zoom: 12,
    styles: mapCol
  })

   var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: 'Enterloop'
  });
}

$(function () {
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this)
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo')
    event.preventDefault()
  })
})

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
  $('.navbar-toggle:visible').click()
})

$('div.modal').on('show.bs.modal', function () {
  var modal = this
  var hash = modal.id
  window.location.hash = hash
  window.onhashchange = function () {
    if (!location.hash) {
      $(modal).modal('hide')
    }
  }
})
