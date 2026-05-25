import './Footer.css';
import { siteConfig } from '../../data/config';
import { getCurrentYear } from '../../utils/dateUtils';

export function renderFooter(): string {
    return `
      <footer class="footer">
        <div class="container footer-content">
          <div class="footer-logo">DevPortfolio</div>
          <div class="footer-copyright">&copy; ${getCurrentYear()} Software Engineer Portfolio. Built with precision.</div>
          <div id="footer-links-container" class="footer-links">
            <a class="footer-link text-on-surface-variant text-label text-sm" href="${siteConfig.hero.github}" target="_blank">GitHub</a>
            <a class="footer-link text-on-surface-variant text-label text-sm" href="${siteConfig.hero.linkedin}" target="_blank">LinkedIn</a>
          </div>
        </div>
      </footer>
    `;
}
