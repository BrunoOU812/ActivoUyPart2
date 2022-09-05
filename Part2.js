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

const toggle= (pointer)=>{
    const parent = document.querySelector(pointer);
    const elements=parent.querySelectorAll(':scope > div');
    const btn=btnArray(pointer);
    parent.prepend(btn[0]);
    parent.appendChild(btn[1])
    const array=[...elements];
    const next = ()=>{
        const last=array.pop();
        array.unshift(last);
        elements.forEach(item=>{item.remove();})
        array.forEach(item=>parent.appendChild(item));
        parent.appendChild(btn[1]);
    }
    const previous = ()=>{
        const last=array.shift();
        array.push(last);
        elements.forEach(item=>{item.remove();})
        array.forEach(item=>parent.appendChild(item))
        parent.appendChild(btn[1]);
    }
    const nameClass=extractWord(pointer);
    document.querySelector(`.${nameClass}__toggle--next`).addEventListener("click",next);
    document.querySelector(`.${nameClass}__toggle--previous`).addEventListener("click",previous);
}

const toggleClasses= [".info","#purple", "#yellow", "#orange", "#red", "#green", "#blue","#testimonial"];

toggleClasses.forEach(item=>toggle(item));
