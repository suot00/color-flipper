const colors=["red","pink","green","yellow"];
const btn=document.querySelector('.btn');
const color =document.querySelector('.color');
const mainBackground =document.querySelector('.main');

function getRandomColor(){
    return Math.floor(Math.random()*colors.length)
}

btn.addEventListener('click', function(){
    const randomColor=getRandomColor();
    
    mainBackground.style.backgroundColor=colors[randomColor];
    // btn.style.backgroundColor =colors[randomColor];
    color.innerHTML =colors[randomColor];
    
})

// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     mainBackground.style.backgroundColor ="#" + randomColor;
//     btn.style.backgroundColor ="#" + randomColor;
//     color.innerHTML = "#" + randomColor;
    
//   }
  
//   btn.addEventListener("click", setBg);
//   setBg();