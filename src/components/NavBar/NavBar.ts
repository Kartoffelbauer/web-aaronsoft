import './NavBar.css';
import { siteConfig } from '../../data/config';

export function renderNavBar(): string {
  const navLinks = siteConfig.nav.map(link =>
    `<a href="${link.url}" class="nav-link">${link.label}</a>`
  ).join('');

  return `
    <nav class="navbar">
      <div class="container navbar-content">
      <div class="logo">DevPortfolio</div>
      <div class="nav-links">
        ${navLinks}
      </div>
        <a href="${siteConfig.resumeUrl}" class="btn btn-primary" target="_blank">Resume</a>
      </div>
    </nav>
  `;
}