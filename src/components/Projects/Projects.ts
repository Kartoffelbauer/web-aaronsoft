import './Projects.css';
import { siteConfig } from '../../data/config';

export function renderProjects(): string {
    const items = siteConfig.projects.map(project => {
        const tags = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        return `
          <div class="card project-card">
            <div class="img-wrapper">
              <img src="${project.image}" alt="Preview graphic for ${project.title}" loading="lazy" />
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3>${project.title}</h3>
                <a href="${project.link}" aria-label="View external link for ${project.title}" target="_blank" rel="noopener noreferrer">
                  <span class="material-symbols-outlined" aria-hidden="true">open_in_new</span>
                </a>
              </div>
              <p class="project-desc">${project.description}</p>
              <div class="project-tags">
                ${tags}
              </div>
            </div>
          </div>
        `;
    }).join('');

    return `
      <section id="projects" class="section">
        <div class="section-header">
          <span class="material-symbols-outlined icon-primary">code_blocks</span>
          <h2>Featured Work</h2>
        </div>
        <div id="projects-container" class="grid-2">
          ${items}
        </div>
      </section>
    `;
}
