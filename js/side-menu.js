
'use strict'

const $menuHome = $('.side-menu .home-side')
const $menuAbout = $('.side-menu .about-side')
const $menuSkill = $('.side-menu .skill-side')
const $menuWork = $('.side-menu .work-side')
const $menuSide = $('.side-menu .side-side')
const $menuData = $('.side-menu .data-side')
const $menuAllItem = $('.side-menu .item')
const $menuText = $('.side-menu .item .text')
const $menuIcon = $('.side-menu .item .icon')
const screenWidth = $window.width()
const $home = $('.home')
const $side = $('.side')
const $data = $('.data')

$menuText.hide()
$menuIcon.css('background', 'none')
show($menuHome)

// remove icon background
function removeIconBackground(item) {
  item.css('background', 'none')
}
// add icon background
function addIconBackground(item) {
  item.css('background', '#000')
}
// calculate block offset top
function calculateBlockTop(item) {
  return Math.floor(item.offset().top)
}
// show menu
function show(item) {
  item.find('.text').show()
  addIconBackground(item.find('a'))
}
// hide menu
function hide(item) {
  item.find('.text').hide()
  removeIconBackground(item.find('a'))
}
const homeTop = 0
const aboutTop = calculateBlockTop($aboutImage) -150
const skillTop = calculateBlockTop($skill) -100    
const workTop = calculateBlockTop($work) -150  
const sideTop = calculateBlockTop($side)  -180      
const dataTop = calculateBlockTop($data) -500

$window.on('scroll', function(event) {
  const windowTop = Number($(window).scrollTop())

  // hide all icon and text
  function hideIconAndText() {
    $menuText.hide()
    $menuIcon.css('background', 'none')
  }
  if (windowTop < aboutTop) {
    hideIconAndText()
    show($menuHome)
    // about
  } else if (windowTop >= aboutTop && windowTop < skillTop) {
    hideIconAndText()
    show($menuAbout)
    // skill
  } else if (windowTop >= skillTop && windowTop < workTop) {
    hideIconAndText()
    show($menuSkill)
    // work
  } else if (windowTop >= workTop && windowTop < sideTop) {
    hideIconAndText()
    show($menuWork)
    // side
  } else if (windowTop >= sideTop && windowTop < dataTop) {
    hideIconAndText()
    show($menuSide)
    // data
  } else if (windowTop >= dataTop) {
    hideIconAndText()
    show($menuData)
  }
})
// show menu by mouseover
$menuIcon.on('mouseover', function() {
  const $this = $(this)
  $this.next().show()
  addIconBackground($this)
})
// hide menu by mouseout
$menuIcon.on('mouseout', function() {
  const $this = $(this)
  if ($this.attr('id')) {
    $this.removeAttr('id')
    return
  }
  $this.next().hide()
  removeIconBackground($this)
})
// click menu
$menuAllItem.on('click', function(event) {
  const $this = $(this)
  $this.find('a').attr('id', 'click')
  show($this)
})

// calculate side menu position left
const number = (screenWidth - 1700) / 2
if (screenWidth >= 1700) {
  $sideMenu.css('left', `+=${number}`)
}