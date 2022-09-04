const btnArray=(style)=>{
    const regEx=/[a-z][a-z]*/gi;
    style=style.match(regEx).join();
    const prevBtn= document.createElement("button");
    const nextBtn= document.createElement("button");
    prevBtn.classList.add(`${style}__toggle`,`${style}__toggle--previous`);
    nextBtn.classList.add(`${style}__toggle`,`${style}__toggle--next`);
    return [prevBtn,nextBtn];
}

const toggle= (pointer)=>{
    const parent = document.querySelector(pointer);
    const elements=parent.querySelectorAll(':scope > div');
    const btn=btnArray(pointer);
    console.log(btn);
    parent.prepend(btn[0]);
    parent.appendChild(btn[1])
    const array=[...elements];
    const next = ()=>{
        const last=array.pop();
        array.unshift(last);
        elements.forEach(item=>{item.remove();})
        array.forEach(item=>parent.appendChild(item));
        parent.appendChild(btn[1])
    }
    const previous = ()=>{
        const last=array.shift();
        array.push(last);
        elements.forEach(item=>{item.remove();})
        array.forEach(item=>parent.appendChild(item))
        parent.appendChild(btn[1])
    }
    document.querySelector(`${pointer}__toggle--next`).addEventListener("click",next);
    document.querySelector(`${pointer}__toggle--previous`).addEventListener("click",previous);
}

toggle(".info");