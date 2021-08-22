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