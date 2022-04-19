let input=document.querySelector ('input')
let ul=document.querySelector ('ul')
let addBtn=document.querySelector ('.add-btn')
let clearbtn=document.querySelector(".clear-btn")
let array
let storage=localStorage.getItem("array")
let sort =document.querySelector(".sort")
console.log(storage);
if(storage===null){
    array=[]
}else{
    array=JSON.parse(localStorage.getItem("array"))
    let space=""
    array.forEach((element,index)=>{
        space+=`
        <li> <p>${element}</p>   <button onClick="deleteFunc(${index})" class="clear-btn_list"><img src="./Group_52.png" alt=""></button></li>
        `
    })
    ul.innerHTML=space;
}
addBtn.addEventListener("click",() =>{
    array.push(input.value)
    let space=""
    array.forEach((element,index)=>{
        space+=`
        <li> <p>${element}</p>   <button onClick="deleteFunc(${index})" class="clear-btn_list"><img src="./Group_52.png" alt=""></button></li>
        `
    })
    ul.innerHTML=space;
    ul.style.border="1px solid #C4C4C4"
    localStorage.setItem("array",JSON.stringify(array))
})

function deleteFunc(index){
    array.splice(index,1)
    console.log(array);
    let space=""
    array.forEach((element,index)=>{
        space+=`
        <li> <p>${element}</p>   <button onClick="deleteFunc(${index})" class="clear-btn_list"><img src="./Group_52.png" alt=""></button></li>
        `
    })
    ul.innerHTML=space;
   if(space==""){
       ul.style.border="none"
   }
   localStorage.setItem("array",JSON.stringify(array))

}


clearbtn.addEventListener("click",function () {
    input.value=""
})

sort.addEventListener("click", (e) => {
        if(e.target.getAttribute("src") == "./filterblack1.png") {
            array.sort();
            let space = ""
            array.forEach((element, index) => {
                space += `
                <li><p>${element}</p> <button class="clear-btn_list" onclick="del(${index})"><img src="./Group_52.png" /></button>
                `
            })
            ul.innerHTML = space;
            ul.style.border = " 1px solid #C4C4C4"
            input.value = ""
            e.target.src = "./Group_91.png"
        }
        else if(e.target.getAttribute("src") == "./Group_91.png"){
            array.sort().reverse()
            console.log(array)
            let space = "";
            array.forEach((element, index) =>{
                space += `
                <li><p>${element}</p> <button class="clear-btn_list" onclick="del(${index})"><img src="./Group_52.png" /></button>
               `
            })
             ul.innerHTML = space;
             ul.style.border = "1px solid #C4C4C4"
             e.target.src = "./filterblack1.png"
            }
            else if(e.target.getAttribute("src") == "./Group_90.png"){
                array.sort().reverse()
                console.log(array)
                let space = "";
                array.forEach((element, index) =>{
                    space += `
                    <li><p>${element}</p> <button class="clear-btn_list" onclick="del(${index})"><img src="./Group_52.png" /></button>
                   `
                })
                 ul.innerHTML = space;
                 ul.style.border = "1px solid #C4C4C4"
                 e.target.src = "./filter.jpg"
                }
                else if(e.target.getAttribute("src") == "./filter.jpg"){
                    array.sort().reverse()
                    console.log(array)
                    let space = "";
                    array.forEach((element, index) =>{
                        space += `
                        <li><p>${element}</p> <button class="clear-btn_list" onclick="del(${index})"><img src="./Group_52.png" /></button>
                       `
                    })
                     ul.innerHTML = space;
                     ul.style.border = "1px solid #C4C4C4"
                     e.target.src = "./Group_90.png"
                    }
})








sort.addEventListener('mouseover', (e) => {

    console.log(e.target.getAttribute("src"));
    if (e.target.getAttribute("src")=="./filter.jpg") {
        e.target.setAttribute("src","./filterblack1.png")
    }
    else if(e.target.getAttribute("src")=="./filterblack1.png"){
        e.target.setAttribute("src","./filter.jpg")
    }
    else if(e.target.getAttribute("src")=="./Group_90.png"){
        e.target.setAttribute("src", "./Group_91.png")
    }
});
sort.addEventListener('mouseout', (e) => {
    if (e.target.getAttribute("src")=="./filterblack1.png") {
        e.target.setAttribute("src","./filter.jpg")
    }
    else if(e.target.getAttribute("src")=="./Group_91.png"){
        e.target.setAttribute("src","./Group_90.png")
    }
});

