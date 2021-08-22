$("#header").load("/sections/header.html", function ()
{
    document.querySelector("#header a").classList.add("highlighted");
    document.querySelectorAll("#header a").forEach(function (e)
    {
        e.addEventListener("click", function ()
        {
            document.querySelectorAll("#header a").forEach(function (e)
            {
                e.classList.remove("highlighted");
            });
            e.classList.add("highlighted");
        });
    });
});

$("#cookie-checkmark").load("/assets/images/checkmark.svg", function ()
{
    document.querySelector("#cookie-checkmark").addEventListener("click", function ()
    {
        document.querySelector("#cookie").style.opacity = "0";
        document.querySelector("#cookie").style.transform = "translateX(-1rem)";
        setTimeout(function ()
        {
            document.querySelector("#cookie").style.display = "none";
        }, 300);
    });
});