document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector(".dropdown-link").addEventListener("focus", (event)=>{
        let dropdownLink = event.target;
        dropdownLink.classList.add("tabbed")
    })
    document.addEventListener("focus", ()=>{
        let dropdown = document.querySelector(".dropdown-link")
        if(!document.activeElement.classList.contains("lookup-link"))
        {
            dropdown.classList.remove("tabbed")
        }
    })
})