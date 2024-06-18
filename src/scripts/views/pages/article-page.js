const ArticlePage = {
  async render() {
    return `
      <div class="article-page">
        <div class="article-content">
      <h1>Sejarah Candi Borobudur</h1>
      <img
        src="./images/teacher.jpg"
        alt="Candi Borobudur"
        class="featured-image"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        pellentesque velit id velit et aliquet. Etiam cursus quam quis orci
        pulvinar, eget mattis velit urna. Duis faucibus justo nec arcu rutrum, a
        duae mi facilisis. Phasellus odio nulla, aliquet eget vulputate ut,
        pretium id neque. Fusce blandit tellus nec, tincidunt lorem. Aliquam
        ultricies orci ac mi fringilla, dignissim massa ac justo. Integer
        tincidunt blandit aliquet. Etiam pharetra libero a dui pretium,
        fringilla tincidunt urna et convallis. Nulla facilisi.
      </p>
    </div>
      </div>
        `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
    const header = document.querySelector('.app-header');
    // header.classList.add("scrolled");

    if (window.scrollY === 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.add('scrolled');
    }
  },
};

export default ArticlePage;
