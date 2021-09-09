// Import projects
import { projects } from "/assets/projects.js";

// Load recent projects
for (const project of projects.school)
{
    document.querySelector("#school-projects").innerHTML += `
        <div>
            <img src="${project.image}" alt="Image of ${project.title}">
            <h2>${project.title}</h2>
            <p>${project.subject}</p>
            <p>${project.content}</p>
            <p>${project.date}</p>
        </div>
    `;
}

for (const project of projects.personal)
{
    document.querySelector("#personal-projects").innerHTML += `
        <div>
            <img src="${project.image}" alt="Image of ${project.title}">
            <h2>${project.title}</h2>
            <p>${project.subject}</p>
            <p>${project.content}</p>
            <p>${project.date}</p>
        </div>
    `;
}