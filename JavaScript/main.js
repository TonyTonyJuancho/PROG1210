document.addEventListener('DOMContentLoaded',()=>{
    console.log("asdasdasd")
    if (localStorage.getItem("loggedIn") === null || localStorage.getItem("loggedIn")==false) 
    {
        window.location.href = "../login.html"
    }
    else
    {
        if(localStorage.getItem('type') == 'sales')
        {
            document.querySelector("#repair-link").remove();
            document.querySelector("#report-link").remove();
            document.querySelector("#lookup-link").remove();
        }
        else if(localStorage.getItem('type') == 'tech')
        {
            document.querySelector("#customer-link").remove();
            document.querySelector("#report-link").remove();
            document.querySelector("#lookup-link").remove();
        }
    }
    document.querySelector('.logout-btn').addEventListener('click', ()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("type");
        localStorage.removeItem("loggedIn", false);
        window.location.href = "../index.html"
    })
    document.querySelector("head-profile-text").innerHTML = `Hello ${localStorage.getItem("name")}`
})