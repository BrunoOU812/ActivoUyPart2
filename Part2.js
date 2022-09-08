const extractWord=(word)=>{
    const regEx=/[a-z][a-z]*/gi;
    return word.match(regEx).join();
}
const btnArray=(style)=>{
    style=extractWord(style);
    const prevBtn= document.createElement("button");
    const nextBtn= document.createElement("button");
    prevBtn.classList.add(`${style}__toggle`,`${style}__toggle--previous`);
    nextBtn.classList.add(`${style}__toggle`,`${style}__toggle--next`);
    return [prevBtn,nextBtn];
}
const slider=(style)=>{
    style=extractWord(style);
    const container= document.createElement("div");
    container.classList.add(`${style}__slider`);
    return container;
}

const toggle= (pointer)=>{
    const slide=slider(pointer);
    const parent = document.querySelector(pointer);
    const grand=parent.parentNode;
    grand.prepend(slide);
    const elements=parent.querySelectorAll(':scope > div');
    const btn=btnArray(pointer);
    slide.prepend(btn[0]);
    elements.forEach(item=>parent.appendChild(item))
    slide.appendChild(parent);
    slide.appendChild(btn[1]);
    const array=[...elements];
    const next = ()=>{
        const last=array.pop();
        array.unshift(last);
        elements.forEach(item=>{item.remove();})
        array.forEach(item=>parent.appendChild(item));
        slide.appendChild(btn[1]);
    }
    const previous = ()=>{
        const last=array.shift();
        array.push(last);
        elements.forEach(item=>{item.remove();})
        array.forEach(item=>parent.appendChild(item))
        slide.appendChild(btn[1]);
    }
    const nameClass=extractWord(pointer);
    document.querySelector(`.${nameClass}__toggle--next`).addEventListener("click",next);
    document.querySelector(`.${nameClass}__toggle--previous`).addEventListener("click",previous);
}

const toggleClasses= ["#info","#purple", "#yellow", "#orange", "#red", "#green", "#blue","#testimonial"];

toggleClasses.forEach(item=>toggle(item));


let switchContent=true;
const values=(open,close,visibility)=>{
    document.querySelector("#open").style.display=open;
    document.querySelector("#close").style.display=close;
    document.querySelector(".header__ul").style.visibility=visibility;
}
const hamburguer = ()=>{
    switchContent=!switchContent;
    open= switchContent==false?"none":"block";
    close= switchContent==true?"none":"block";
    visibility= switchContent==true?"hidden":"visible";    
    values(open,close,visibility);
}
document.querySelector(".header__button--hamburguer").addEventListener("click",hamburguer);
  

window.addEventListener("resize", function() {
    if (window.innerWidth > 960) {
    document.querySelector(".header__ul").style.visibility="visible";
    document.querySelector(".header__ul").removeEventListener("click",hamburguer);
}else{
    document.querySelector(".header__ul").style.visibility="hidden";
    values("block","none","hidden");
    document.querySelector(".header__ul").addEventListener("click",hamburguer);
}
  });
  
  
