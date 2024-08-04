// const myCarouselElement = document.querySelector('#myCarousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })

function showSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='flex'
}

function hideSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='none'
}