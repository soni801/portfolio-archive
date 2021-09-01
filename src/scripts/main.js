let selectedHeader = 0;

// Load header
$("#header").load("/sections/header.html", function ()
{
    // Load more options button
    $(".useless").load("/assets/images/dots.svg"); // Useless button for correct spacing
    $("#dots").load("/assets/images/dots.svg", function ()
    {
        document.querySelector("#dots").addEventListener("click", function ()
        {
            if (selectedHeader++ === 2) selectedHeader = 0;
            let temp = 0;
            document.querySelectorAll("#header div").forEach(function (e)
            {
                e.classList.remove("visible");
                if (temp++ === selectedHeader)
                {
                    e.classList.add("visible");
                }
            });
        });
    });

    // Set pages visible by default
    document.querySelector("#header div").classList.add("visible");

    // Set home page highlighted TODO: Set highlights in all headers by default
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

// Load checkmark in cookie consent
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