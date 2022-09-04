const toggle= (pointer,previousBtn,nextBtn)=>{
    const parent = document.querySelector(pointer);
    const elements=parent.querySelectorAll(':scope > div');
    const btn=parent.querySelectorAll(':scope > button');
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

    document.querySelector(nextBtn).addEventListener("click",next);
    document.querySelector(previousBtn).addEventListener("click",previous);
}

toggle(".info",".info__toggle--previous",".info__toggle--next");