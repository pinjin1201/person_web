
'use strict'

const $menuText = $('.side-menu .item .text')
const $menuIcon = $('.side-menu .item .icon')
const screenWidth = $window.width()
const number = (screenWidth - 1700) / 2

$menuText.hide()
// move or out to side menu icon
$menuIcon.on('mouseover', function(event) {
  $(this).next().show()
})
$menuIcon.on('mouseout', function(event) {
  $(this).next().hide()
})

// calculate side menu position left
if (screenWidth >= 1700) {
  $sideMenu.css('left', `+=${number}`)
}