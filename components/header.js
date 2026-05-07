class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <h1><a class="navbar-brand" href="/">Dramane Diarra</a></h1>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-2">
              <a class="nav-link" href="https://drdiarra.github.io/DrD-portfolio/">Home</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/DrD-portfolio/pages/education.html">Education</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/DrD-portfolio/pages/experience.html">Experience</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/DrD-portfolio/pages/skills.html">Skills</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/DrD-portfolio/pages/teaching.html">Teaching</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/DrD-portfolio/pages/projects.html">Projects</a>
            </li> 
            <li class="nav-item mr-2">
              <a class="nav-link" href="/DrD-portfolio/pages/publications.html">Publications</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/DrD-portfolio/pages/blogposts.html">Blogs</a>
            </li>
          </ul>
        </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
