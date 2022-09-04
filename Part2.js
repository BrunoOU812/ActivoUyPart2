
const elements=document.querySelectorAll(".info__container");
const array=[...elements];


console.log("elementos",elements,elements.length,elements[0]);
const next = ()=>{
    const last=array.pop();
    array.unshift(last);
    document.querySelector(".info").innerHTML="";
    array.forEach(item=>document.querySelector(".info").appendChild(item))
}
const previous = ()=>{
    const last=array.shift();
    array.push(last);
    document.querySelector(".info").innerHTML="";
    array.forEach(item=>document.querySelector(".info").appendChild(item))
}

document.querySelector(".header__button--login").addEventListener("click", next);
document.querySelector(".header__button--join").addEventListener("click", previous);