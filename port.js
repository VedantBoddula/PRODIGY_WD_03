// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")
const submit = document.querySelector(".submit-button")
submit.addEventListener("click",async()=>{
    try {
        const webhook="https://discord.com/api/webhooks/1359613498426003659/rkhUD7QIB3yrAqIYpZAszD7kYVvqvGtvp3nr5QroIbrqacJjuLoUAij22YiV0VbBcA8V"
        const res =await fetch(webhook,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                content:`
                name:${name.value}
                email:${email.value}
                message:${message.value}`
            })
        })
        console.log({res})
    } catch (error) {
        console.log(error)
    }
})