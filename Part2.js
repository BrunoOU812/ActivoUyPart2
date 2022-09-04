const toggle= (pointer)=>{
    const parent = document.querySelector(pointer);
    const elements=parent.querySelectorAll(':scope > div');
    const array=[...elements];

    const next = ()=>{
        const last=array.pop();
        array.unshift(last);
        document.querySelector(pointer).innerHTML="";
        array.forEach(item=>document.querySelector(pointer).appendChild(item))
    }
    const previous = ()=>{
        const last=array.shift();
        array.push(last);
        document.querySelector(pointer).innerHTML="";
        array.forEach(item=>document.querySelector(pointer).appendChild(item))
    }

    document.querySelector(".header__button--login").addEventListener("click",next);
    document.querySelector(".header__button--join").addEventListener("click",previous);
}

toggle("#purple");