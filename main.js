const upload = document.querySelector(".icon-upload")
const form = document.querySelector("form")
const container = document.getElementById("container")
const input = document.querySelector("input")


form.addEventListener("submit",(eo) => {
    eo.preventDefault();
    const task = `
    <div class="task">
        <span class="icon-star icon"></span>
        <p class="task_txt" >${input.value}</p>
        <div>
            <span class="icon-trash icon"></span>
            <span class="icon-frustrated2 icon"></span>
        </div>
    </div>
    `
    container.innerHTML += task
    input.value = ""
})

container.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-trash icon") {
        eo.target.parentElement.parentElement.remove()
    } else if (eo.target.className == "icon-frustrated2 icon") {
        eo.target.classList.add ("dn")
        const heart = '<span class="icon-heart"></span>'
        
        eo.target.parentElement.parentElement.getElementsByClassName("task_txt")[0].classList.add("finish")
        eo.target.parentElement.innerHTML += heart
    } else if (eo.target.className =="icon-heart" ) { 
        eo.target.parentElement.parentElement.getElementsByClassName("task_txt")[0].classList.remove("finish")
        eo.target.classList.add("dn")
        const angry = `<span class="icon-frustrated2 icon"></span>`
        eo.target.parentElement.innerHTML += angry
    } else if (eo.target.className =="icon-star icon") {
        eo.target.classList.add("orange")
       
        container.prepend(eo.target.parentElement)
        // eo.target.parentElement.parentElement.prepend(eo.target.parentElement)
        
    } else if (eo.target.className == "icon-star icon orange") {
        eo.target.classList.remove("orange")
        
    }
})


const x = {
    name:"Akram",
    age:15,
    family_name:"Yacia",
    color: "white",
    fullName: function () {
        return this.name + " " + this.family_name;
    }
    
}


const arr=[1, 2, 3, "ali", "hassan", 26]

for (let i=0; i < arr.length; i++) {

if (typeof arr[i] === "number") {
    console.log(arr[i]);
}
}





