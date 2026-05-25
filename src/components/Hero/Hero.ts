import './Hero.css';
import { siteConfig } from '../../data/config';

export function renderHero(): string {
    const { hero } = siteConfig;

    return `
      <section id="about" class="hero">
        <div class="hero">
          <div class="hero-content">
            <h1>${hero.title}</h1>
            <p>${hero.description}</p>
            <div class="hero-actions">
              <a href="${hero.linkedin}" class="btn btn-primary" target="_blank">
                <span class="material-symbols-outlined" aria-hidden="true">open_in_new</span> LinkedIn
              </a>
              <a href="${hero.github}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <div class="hero-image-wrapper">
            <div class="image-border">
              <img src="${hero.image}" alt="Profile picture" class="profile-img" loading="eager" alt="Profile Picture" />
            </div>
          </div>
        </div>
      </section>
    `;
}
