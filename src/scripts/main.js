let selectedHeader = 0;

// Load header
$("#header").load("/sections/header.html", function ()
{
    // Load more options button
    $(".useless").load("/assets/icons/dots.svg"); // Useless button for correct spacing
    $("#dots").load("/assets/icons/dots.svg", function ()
    {
        // TODO: Improve this code - e.g. replace only the links in the header instead of the entire div
        document.querySelector("#dots").addEventListener("click", function ()
        {
            if (selectedHeader++ === 2) selectedHeader = 0;
            let temp = 0;
            document.querySelectorAll("#header div").forEach(function (e)
            {
                if (temp === selectedHeader -1 || (temp === 2 && selectedHeader === 0))
                {
                    e.classList.remove("visible");
                    setTimeout(function ()
                    {
                        e.style.display = "none";

                        let next = temp === 2 ? document.querySelectorAll("#header div")[0] : document.querySelectorAll("#header div")[temp + 1];
                        next.style.display = "flex";
                        setTimeout(function ()
                        {
                            next.classList.add("visible");
                        }, 50);
                    }, 200);
                }
                else temp++;
            });
        });
    });

    // Set pages visible by default
    document.querySelectorAll("#header div").forEach(function (e)
    {
        e.style.display = "none";
    });
    document.querySelector("#header div").style.display = "flex";
    document.querySelector("#header div").classList.add("visible");

    // Set initial highlighting
    // TODO: Improve header highlighting code
    document.querySelector("#header #pages a").classList.add("highlighted");
    document.querySelector("#header #languages a").classList.add("highlighted");
    document.querySelector("#header #themes a").classList.add("highlighted");

    // Register click listeners
    document.querySelectorAll("#header #pages a").forEach(function (e)
    {
        e.addEventListener("click", function ()
        {
            document.querySelectorAll("#header #pages a").forEach(function (e)
            {
                e.classList.remove("highlighted");
            });
            e.classList.add("highlighted");
        });
    });

    document.querySelectorAll("#header #languages a").forEach(function (e)
    {
        e.addEventListener("click", function ()
        {
            document.querySelectorAll("#header #languages a").forEach(function (e)
            {
                e.classList.remove("highlighted");
            });
            e.classList.add("highlighted");
        });
    });

    document.querySelectorAll("#header #themes a").forEach(function (e)
    {
        e.addEventListener("click", function ()
        {
            document.querySelectorAll("#header #themes a").forEach(function (e)
            {
                e.classList.remove("highlighted");
            });
            e.classList.add("highlighted");
        });
    });
});

// Load checkmark in cookie consent
$("#cookie-checkmark").load("/assets/icons/checkmark.svg", function ()
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