
'use strict'

// Mobile Menu
const $mobileMenu = $('.mobile-menu')
// Mobile Menu Clicked
const $mobileMenuClick = $('.mobile-menu-clicked')
// Web Menu
const $webMenu = $('.web-menu .menu') 
// Side Menu
const $sideMenu = $('.side-menu')
// Side items block
const $side = $('.side .items')
// Home image
const $homeImages = $('.home .image')
// About image 
const $aboutImage = $('.about .image01')
// Skill
const $skill = $('.skill')
const $skillItem = $('.skill .item')
const $window = $(window)
// Work
const $work = $('.work')
// Fixed data
const fixedData = $('.fixed-data')

// Menu data
const menu = {
  m1: 'Home',
  m2: 'About',
  m3: 'Skill',
  m4: 'Work',
  m5: 'Side',
  m6: 'Data'
}
// Side data
const side = {
  s1: {
    d1: 'code', 
    d2: '寫程式', 
    d3: '學習程式語言是我很大的興趣，我在其中找到了生活的意義，也開啟了一系列的夢想與理想。',
    d4: '我的最終目標是能獨自接案。'
  },
  s2: {
    d1: 'sport',
    d2: '運動',
    d3: '熱愛運動的我，幾乎每天都會跑步，偶爾打打羽球。',
    d4: '參加過桌球、圍棋社團。'
  },
  s3: {
    d1: 'read',
    d2: '閱讀',
    d3: '閱讀能讓我與這個世界互相連結。',
    d4: '每天晚上都會享受閱讀的時光。'
  },
  s4: {
    d1: 'music',
    d2: '音樂',
    d3: '音樂時常能振奮人的精神，給予我們更多能量，添加人生色彩。',
    d4: '有多餘的時間會嘗試鋼琴、創作音樂的領域。'
  }
}
// Work item content
const workItemJs = [
  'Color game',
  'Wedding web',
  'Note Todo'
]
const workItemApi = [
  'Life test',
  'Movie List'
]

// render mobile menu clicked and web menu HTML
function renderMenu(items) {
  let content = ''
  for (let item in items) {
    content += `
      <div class="item">
        <a href="#${items[item].toLowerCase()}">
          ${items[item]}
        </a>
      </div>
    `
  }
  $mobileMenuClick.html(content)
  $webMenu.html(content)
}
// render side menu HTML
function renderSideMenu(items) {
  let content = ''
  for (let item in items) {
    content += `
      <div class="item">
        <a href="#${items[item].toLowerCase()}" class="icon"></a>
        <div class="text">${items[item].toUpperCase()}</div>
      </div>
    `
  }
  $sideMenu.html(content)
}
// render side items HTML
function renderSideItems(items) {
  let content = ''
  for (let item in items) {
    content += `
      <div class="item">
        <div class="image ${items[item].d1}"></div>
        <div class="text">
          <div class="title">${items[item].d2}</div>
          <div class="description">
            ${items[item].d3}<br/>
            ${items[item].d4}
          </div>
        </div>
      </div>
    `
  }
  $side.html(content)
}
renderMenu(menu)
renderSideMenu(menu)
renderSideItems(side)

// click mobile menu lines
$mobileMenu.on('click', '.lines', function(event) {
  $mobileMenu.hide()
  $mobileMenuClick.show()
})

// click mobile menu item
$mobileMenuClick.on('click', '.item', function(event) {
  $mobileMenuClick.hide()
  $mobileMenu.show()
})

// play home image 
function playHomeImage() {
  const imageLength = $homeImages.length
  let originalIndex = 0

  $homeImages.eq(originalIndex).fadeIn()

  function playImage() {
    const nextIndex = (originalIndex + 1) % imageLength
    $homeImages.eq(originalIndex).fadeOut()
    $homeImages.eq(nextIndex).fadeIn()
    originalIndex = nextIndex
  }
  setInterval(playImage, 3000)
}
playHomeImage()

// change ABOUT image
$aboutImage.on('mouseover', function(event) {
  $(this).css('background-image', 'url(image/about02.jpg)')
})
$aboutImage.on('mouseout', function (event) {
  $(this).css('background-image', 'url(image/about01.jpg)')
})

// change SKILL style
$window.on('scroll', function(event) {
  if ($skill.length === 0) return
  const skill = Math.floor(Number($skill.offset().top)) - 75
  const window = $(this).scrollTop()
  
  if (window >= skill) {
    setInterval(changeSkillStyle, 4000)
    $window.off('scroll')
  }
  function changeSkillStyle() {
    $skillItem.animate({
      'width': '+=10',
      'height': '+=10'
    }, 2500, function () {
      $(this).css({
        'width': '-=10',
        'height': '-=10'
      })

    })
  }
  changeSkillStyle()
})

// change WORK content
$work.on('mouseover', '.item', function(event) {
  const $this = $(this)
  let content = ''

  // add class
  function addClass(item) {
    item.addClass('animate-style')
  }
  // show HTML
  function showOverContent(item, text) {
    item.html(text)
  }
  // js
  if (event.target.matches('#work-js')) {
    $this.css('background', 'yellow')
    workItemJs.forEach(item => {
      content += `
        • ${item}<br/>
      `
    })
    addClass($this)
    showOverContent($this, content)
    // api
  } else if (event.target.matches('#work-api') || $this.find('span')) {
    workItemApi.forEach(item => {
      content += `
        • ${item}<br/>
      `
    })
    addClass($this)
    showOverContent($this, content)
  }
})
$work.on('mouseout', '.item', function (event) {
  const $this = $(this)
  let content = ''

  // remove class
  function removeClass(item) {
    item.removeClass('animate-style')
  }
  // show HTML
  function showOutContent(item, text) {
    item.html(text)
  }
  // js
  if (event.target.matches('#work-js')) {
    $this.css('background', 'url(image/work01.png) no-repeat')
    removeClass($this)
    showOutContent($this, content)
    // api
  } else if (event.target.matches('#work-api')) {
    content = `
      <span class="api-up">API</span>
      <span class="api-down">串接</span>
    `
    removeClass($this)
    showOutContent($this, content)
  }
})