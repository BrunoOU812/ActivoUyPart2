const toggle= (pointer)=>{
    const parent = document.querySelector(pointer);
    const elements=parent.querySelectorAll(':scope > div');
    const array=[...elements];

    const next = (info)=>{
        const last=array.pop();
        array.unshift(last);
        document.querySelector(info).innerHTML="";
        array.forEach(item=>document.querySelector(info).appendChild(item))
    }
    const previous = (info)=>{
        const last=array.shift();
        array.push(last);
        document.querySelector(info).innerHTML="";
        array.forEach(item=>document.querySelector(info).appendChild(item))
    }

    document.querySelector(".header__button--login").addEventListener("click", function() {next(pointer);});
    document.querySelector(".header__button--join").addEventListener("click", function() {previous(pointer);});
}

toggle(".info");