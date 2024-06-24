const resume = {
    "name": "Gayathri K",
    "contact": {
        "email": "gayathri143012@gmail.com",
        "phone": "8797777867",
        "address": "Anbu Nagar, Madukkarai, Coimbatore, 641105"
    },
    "education": [
        {
            "degree": "B.E Computer Science and Engineering",
            "institution": "SKCT",
            "year": "2018-2022",
            "CGPA":"8.11"
        }
    ],
    "experience": [
        {
            "title": "Technical Trainer",
            "company": "Six Phrase",
            "years": "2023-present"
        },
        {
            "title": "Software Developer Trainer",
            "company": "Tring apps",
            "years": "2021-2022"
        }
    ],
    "Programming_skills": [
        "C",
        "JAVA",
        "HTML",
        "CSS",
        "js",
        "DBMS",
        "OOPS"
    ],
    "Personal_skills": [
        "Creative Thinking",
        "Problem Solving",
        "Team worker"
    ],
    "projects": [
        {
            "name": "College Enquiry Chatbot",
            "description": "College enquiry chatbot is a simple web application which aims to provide the information regarding college.",
            "Technologies_used": "html, css, js, python"
        }
    ],
    "certifications": [
        {
            "name": "NPTEL",
            "description": "Programming in c++, Developing Soft Skills and personality, Database Management system"
        },
        {
            "name": "IBWIOT",
            "description": "Participated In IBWIOT Organized By TRAINOTECH at CIT"
        },
        {
            "name": "Java Basics",
            "description": "Hacker rank"
        }
    ],
    "Languages_Known": [
        "English",
        "Tamil"
    ]
};
// Iterating over the JSON data
console.log(`Name: ${resume.name}`);


// Using for...in loop
console.log("Contact:");
for (const key in resume.contact) {
    console.log(`  ${key.charAt(0).toUpperCase() + key.slice(1)}: ${resume.contact[key]}`);
}

// Using for loop
console.log("Education:");
for (let i = 0; i < resume.education.length; i++) {
    console.log(` * Degree: ${resume.education[i].degree}`);
    console.log(`   Institution: ${resume.education[i].institution}`);
    console.log(`   Year: ${resume.education[i].year}`);
    console.log(`   CGPA: ${resume.education[i].CGPA}`);
}


// Using for...of loop
console.log("Experience:");
for (const experience of resume.experience) {
    console.log(` * Title: ${experience.title}`);
    console.log(`   Company: ${experience.company}`);
    console.log(`   Years: ${experience.years}`);
}

// Using forEach loop
console.log("Programming Skills:");
resume.Programming_skills.forEach(skill => {
    console.log(`  - ${skill}`);
});

console.log("Personal Skills:");
resume.Personal_skills.forEach(skill => {
    console.log(`  - ${skill}`);
});

console.log("Projects:");
resume.projects.forEach(project => {
    console.log(` * Name: ${project.name}`);
    console.log(`   Description: ${project.description}`);
    console.log(`   Technologies Used: ${project.Technologies_used}`);
});

console.log("Certifications:");
resume.certifications.forEach(certification => {
    console.log(` * Name: ${certification.name}`);
    console.log(`   Description: ${certification.description}`);
});

console.log("Languages Known:");
resume.Languages_Known.forEach(language => {
    console.log(`  - ${language}`);
});
