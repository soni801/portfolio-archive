// Initialise variables
const cycleSpeed = 5000;
const maxCycle = [-1000, -300];

// Import projects
import { projects } from "/assets/projects.js";

// Load social icons
$("#social-github").load("/assets/icons/brands/github.svg");
$("#social-twitch").load("/assets/icons/brands/twitch.svg");
$("#social-twitter").load("/assets/icons/brands/twitter.svg");
$("#social-youtube").load("/assets/icons/brands/youtube.svg");
$("#social-graphide").load("/assets/icons/brands/graphide.svg");

// Load recent projects
for (const project of projects.school)
{
    document.querySelector("#school-projects .cycle").innerHTML += `
        <div>
            <img src="${project.image}" alt="Image of ${project.title}">
            <div>
                <h2>${project.title}</h2>
                <p class="subject">${project.subject}</p>
                <p>${project.content}</p>
                <p class="date">${project.date}</p>
            </div>
        </div>
    `;
}

for (const project of projects.personal)
{
    document.querySelector("#personal-projects .cycle").innerHTML += `
        <div>
            <img src="${project.image}" alt="Image of ${project.title}">
            <div>
                <h2>${project.title}</h2>
                <p>${project.content}</p>
            </div>
        </div>
    `;
}

// Cycle recent projects
let projectsOffset = [0, 0];
function cycleProjects()
{
    setTimeout(function ()
    {
        {
            const element = document.querySelector("#school-projects .cycle");

            if (projectsOffset[0] > maxCycle[0]) element.style.left = (projectsOffset[0] -= 100) + "vw";
            else element.style.left = (projectsOffset[0] = 0) + "vw";
        }

        setTimeout(function ()
        {
            const element = document.querySelector("#personal-projects .cycle");

            if (projectsOffset[1] > maxCycle[1]) element.style.left = (projectsOffset[1] -= 100) + "vw";
            else element.style.left = (projectsOffset[1] = 0) + "vw";
        }, cycleSpeed / 2);

        cycleProjects();
    }, cycleSpeed);
}

cycleProjects();