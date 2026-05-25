import './Skills.css';
import { siteConfig } from '../../data/config';
import { calculateYearsOfExperience } from '../../utils/dateUtils';

export function renderSkills(): string {
    const items = siteConfig.skills.map(skill => {
        const years = calculateYearsOfExperience(skill.startDate);
        return `
          <div class="card skill-card">
            <h3>${skill.name}</h3>
            <span>${years} Year${years !== 1 ? 's' : ''} Exp</span>
          </div>
        `;
    }).join('');

    return `
      <section id="skills" class="section">
        <div class="section-header">
          <span class="material-symbols-outlined icon-primary">terminal</span>
          <h2>Core Expertise</h2>
        </div>
        <div id="skills-container" class="grid-4">
          ${items}
        </div>
      </section>
    `;
}
