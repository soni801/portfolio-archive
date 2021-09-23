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
    e.addEventListener("click", function ()
    {
        e.nextElementSibling.style.display = e.nextElementSibling.style.display === "initial" ? "none" : "initial";
    });
});