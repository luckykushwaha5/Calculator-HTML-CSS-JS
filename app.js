let buttons = document.querySelectorAll(".btn");
let input = document.querySelector(".disp");
let str = "";

buttons.forEach((box)=>{
    box.addEventListener("click",(eve)=> {
        let flag = eve.target.innerHTML;
        if(eve.target.innerHTML === "AC"){
            str = "";
            input.value = str;
        }
        else if(eve.target.innerHTML === "="){
            str = eval(str);
            input.value = str;
        }

        else if(eve.target.innerHTML === "x"){
            str = str + '*';
            input.value = str;
        }
        else if(eve.target.innerHTML === "÷"){
            str = str + '/';
            input.value = str;
        }
        else{
            str = str + eve.target.innerHTML;
            input.value = str;
        }
    })
})

buttons.forEach(box => {
    box.addEventListener('mouseenter', () => {
      // Change the box's background color
      box.style.backgroundColor = 'black';
      box.style.color = 'white';
    });
    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = 'white';
        box.style.color = 'black';
      });
  });