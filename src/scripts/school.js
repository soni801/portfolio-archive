// Import projects
import { projects } from "../assets/projects.js";

projects.school.forEach(function (e)
{
    document.querySelector("#projects-list").innerHTML += `
        <div>
            <h1>${e.title}</h1>
            <p>${e.content}</p>
        </div>
    `;
});

document.querySelectorAll("#projects-list h1").forEach(function (e)
{
    const next = e.nextElementSibling.style;

    e.addEventListener("click", function ()
    {
        if (next.display === "inline-block")
        {
            next.opacity = "0";
            next.transform = "translateY(-5rem)";
            setTimeout(function () { next.display = "none"; }, 300);
        }
        else
        {
            next.display = "inline-block";
            setTimeout(function ()
            {
                next.opacity = "1";
                next.transform = "translateY(0)";
            }, 100);
        }
    });
});