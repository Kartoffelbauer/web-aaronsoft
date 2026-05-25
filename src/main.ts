/**
 * @fileoverview Main execution script. Orchestrates data binding to DOM components.
 */

// 1. Import Renderers
import { renderNavBar } from './components/NavBar/NavBar.ts';
import { renderHero } from './components/Hero/Hero.ts';
import { renderEducation } from './components/Education/Education.ts';
import { renderProjects } from './components/Projects/Projects.ts';
import { renderSkills } from './components/Skills/Skills.ts';
import { renderFooter } from './components/Footer/Footer.ts';

// 2. Import Utils
import { initScrollSpy } from './utils/scrollSpy.ts';

/**
 * Main application entry point.
 * We dynamically assemble our layout from modular UI functions to keep the architecture clean
 * and separate data/presentation concerns.
 */
function initApp() {
    const appElement = document.getElementById('app');
    if (!appElement) {
        console.error('App container #app not found');
        return;
    }

    appElement.innerHTML = `
        ${renderNavBar()}
        <main class="container">
            ${renderHero()}
            ${renderEducation()}
            ${renderSkills()}
            ${renderProjects()}
        </main>
        ${renderFooter()}
    `;

    // Initialize the scroll spy behavior once elements are appended to the DOM
    initScrollSpy();
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
