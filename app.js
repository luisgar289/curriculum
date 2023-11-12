const summary = document.querySelector(".summary");
const experience = document.querySelector(".experience");
const education = document.querySelector(".education");
const skills = document.querySelector(".skills");
const lenguajes = document.querySelector(".lenguajes");
const contact = document.querySelector(".contact");

const showText = () => {
    summary.innerHTML = `<h2>Resumen</h2>`
    /*<p>I am a highly motivated and skilled software developer with over 5 years of experience in web development. I
        have a strong background in HTML, CSS, JavaScript, and PHP, and I am always eager to learn new technologies
        and programming languages.</p>`*/
    
    experience.innerHTML = `<h2>Experiencia</h2>`
    /*<ul>
        <li>
            <h3>Software Developer</h3>
            <p>XYZ Company</p>
            <p>June 2018 - Present</p>
            <ul>
                <li>Developed and maintained web applications using HTML, CSS, JavaScript, and PHP</li>
                <li>Collaborated with cross-functional teams to design and implement new features</li>
                <li>Optimized website performance and user experience</li>
            </ul>
        </li>
        <li>
            <h3>Web Developer</h3>
            <p>ABC Agency</p>
            <p>January 2016 - May 2018</p>
            <ul>
                <li>Designed and developed responsive websites using HTML, CSS, and JavaScript</li>
                <li>Worked closely with clients to understand their needs and requirements</li>
                <li>Managed multiple projects simultaneously and met tight deadlines</li>
            </ul>
        </li>
    </ul>`*/

    education.innerHTML = `<h2>Educación</h2>`
    /*<ul>
        <li>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>University of XYZ</p>
            <p>September 2012 - June 2016</p>
        </li>
    </ul>`*/

    skills.innerHTML = `<h2>Habilidades</h2>`
    /*<ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>Git</li>
    </ul>`*/

    lenguajes.innerHTML = `<h2>Manejo de Lenguajes de Programación</h2>`
    /*<div class="carousel">
        <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" alt="HTML">
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="CSS">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript">
        <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Python">
        <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" alt="HTML">
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="CSS">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript">
        <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Python">
        <!-- Agrega más imágenes de lenguajes de programación según sea necesario -->
    </div>`*/

    contact.innerHTML = `<h2>Contacto</h2>`
    /*<ul>
        <li>Email: luis@example.com</li>
        <li>Phone: 555-1234</li>
        <li><a href="https://www.linkedin.com/in/luis">LinkedIn</a></li>
        <li><a href="https://github.com/luis">GitHub</a></li>
    </ul>`*/
}

document.addEventListener("DOMContentLoaded", showText)

const browserInformation = {
    fecha: new Date(),
    navegador: navigator.userAgent,
    url: window.location.href,
    hora: new Date().getHours(),
  };
  
localStorage.setItem('browser', JSON.stringify(browserInformation));

console.log(JSON.parse(localStorage.getItem('browser')));
