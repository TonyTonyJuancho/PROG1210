document.addEventListener('DOMContentLoaded',()=>{
    
    if (localStorage.getItem("loggedIn") === null || localStorage.getItem("loggedIn")==false) 
    {
        window.location.href = "../login.html"
    }
    else
    {
        if(localStorage.getItem('type') == 'sales')
        {
            document.querySelector("#equipment-link").remove();
            document.querySelector("#repair-link").remove();
            document.querySelector("#lookup-link").remove();
            document.querySelector("#report-link").remove();
        }
        else if(localStorage.getItem('type') == 'tech')
        {
            document.querySelector("#customer-link").remove();
            document.querySelector("#lookup-link").remove();
            document.querySelector("#report-link").remove();
        }
    }
 })