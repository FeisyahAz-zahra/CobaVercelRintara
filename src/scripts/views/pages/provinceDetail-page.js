import { provinceDetailTemplate } from '../template/template-creator';
import UrlParser from '../../routes/url-parser';
import data from '../../data/DATA.json';

const ProvinceDetail = {
  async render() {
    return `
      <div class="province-detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const header = document.querySelector('.app-header');
    const container = document.querySelector('.province-detail');

    window.scrollTo(0, 0);

    // Ambil id provinsi dari URL
    const provinceId = url.id;
    const provinceData = data.provinces.find((province) => province.id.toString() === provinceId);

    if (!provinceData) {
      container.innerHTML = '<p>Province not found!</p>';
      return;
    }

    container.innerHTML = provinceDetailTemplate(provinceData);

    // Function to check the scroll position and add/remove the "scrolled" class
    const checkScrollPosition = () => {
      const provinceHeaderContent = document.querySelector('.header-content');
      if (provinceHeaderContent) {
        const elementBottom = provinceHeaderContent.getBoundingClientRect().bottom + window.scrollY;
        if (window.scrollY >= elementBottom) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    // Initial check in case the page is already scrolled
    checkScrollPosition();

    // Add the scroll event listener
    window.addEventListener('scroll', checkScrollPosition);
  },
};

export default ProvinceDetail;
