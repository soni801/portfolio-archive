// Import projects
import { projects } from "../assets/projects.js";

projects.school.forEach(function (e)
{
    document.querySelector("#projects-list").innerHTML += `
        <h1>${e.title}</h1>
    `;
});