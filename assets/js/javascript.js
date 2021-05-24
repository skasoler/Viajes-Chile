// Este es mi Javascript// 

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNav'
  })