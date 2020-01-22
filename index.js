console.log("JavaScript Connected")

const funDip = document.getElementById('fun-dip')

console.log(funDip)

funDip.addEventListener('click', e => {
   console.log(funDip.style.backgroundColor)
   if(funDip.style.backgroundColor === 'rgb(186, 218, 85)'){
      funDip.style.backgroundColor = 'aqua'
   } else{

   funDip.style.backgroundColor = '#bada55'
   funDip.style.height = '500px'
   funDip.style.width = '500px'
   }
})

funDip.addEventListener('mouseenter', e => {
   funDip.style.backgroundColor = 'purple'

})


funDip.addEventListener('mouseleave', e => {
   funDip.style.backgroundColor = 'aqua'
})

