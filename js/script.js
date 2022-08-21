var icons = document.querySelectorAll('.section-1-icons i')

setInterval(()=>{

  var icon = document.querySelector('.section-1-icons .change')

  icon.classList.remove('change')
  icon.nextElementSibling.classList.add('change')

},1000)