document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector(".dropdown-link").addEventListener("focus", (event)=>{
        let dropdownLink = event.target;
        dropdownLink.classList.add("tabbed")
    })
   document.addEventListener("click", (event)=>{
        let item = event.target;
        let dropdown = document.querySelector(".dropdown-link")
        if(item.classList.contains("dropdown-link"))
        {
            dropdown.classList.add("tabbed")
        }
        else
        {
            dropdown.classList.remove("tabbed")
        }
    })
    document.addEventListener("focus", ()=>{
        let dropdown = document.querySelector(".dropdown-link")
        if(!document.activeElement.classList.contains("lookup-link"))
        {
            dropdown.classList.remove("tabbed")
        }
    })
    document.addEventListener("blur", ()=>{
        let dropdown = document.querySelector(".dropdown-link")
        if(!document.activeElement.classList.contains("lookup-link"))
        {
            dropdown.classList.remove("tabbed")
        }
    })
})