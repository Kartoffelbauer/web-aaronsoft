import './Education.css';
import { siteConfig } from '../../data/config';

export function renderEducation(): string {
    const items = siteConfig.education.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot ${item.statusType === 'current' ? 'active' : 'inactive'}"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3>${item.degree}</h3>
            <span class="timeline-badge ${item.statusType === 'current' ? 'badge-active' : 'badge-inactive'}">${item.status}</span>
          </div>
          <p class="timeline-inst">${item.institution}</p>
          <p class="timeline-date">${item.duration}</p>
          <p class="timeline-desc">${item.description}</p>
        </div>
      </div>
    `).join('');

    return `
      <section id="education" class="section">
        <div class="section-header">
          <span class="material-symbols-outlined icon-primary">school</span>
          <h2>Academic Journey</h2>
        </div>
        <div id="education-container" class="timeline">
          ${items}
        </div>
      </section>
    `;
}
