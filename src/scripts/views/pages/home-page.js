import initSlider from "../../utils/scrollHandler";
import { exploreItemTemplate } from "../template/template-creator";
import data from '../../data/DATA.json';

const HomePage = {
  async render() {
    return `
    <hero-element></hero-element>
    <div class="recently-add">
            <h2>Recently Added Articles</h2>
            <div class="recent-content">

                <a href="" class="recent-item">
                    <div class="recent-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <div class="recent-item-content">
                        <h3>Judul</h3>
                        <p>Lorem ipsum Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. Delectus, deserunt. dolor sit amet consectetur adipisicing elit. Totam, repellat!</p>
                    </div>
                </a>

                <a href="" class="recent-item">
                    <div class="recent-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <div class="recent-item-content">
                        <h3>Judul</h3>
                        <p>Lorem ipsum Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. Delectus, deserunt. dolor sit amet consectetur adipisicing elit. Totam, repellat!</p>
                    </div>
                </a>

                <a href="" class="recent-item">
                    <div class="recent-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <div class="recent-item-content">
                        <h3>Judul</h3>
                        <p>Lorem ipsum Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. Delectus, deserunt. dolor sit amet consectetur adipisicing elit. Totam, repellat!</p>
                    </div>
                </a>


                <a href="" class="recent-item">
                    <div class="recent-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <div class="recent-item-content">
                        <h3>Judul</h3>
                        <p>Lorem ipsum Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. Delectus, deserunt. dolor sit amet consectetur adipisicing elit. Totam, repellat!</p>
                    </div>
                </a>

            </div>
        </div>

        <div class="about-indo">
            <h2>About Indonesia</h2>
            <div class="about-content">
                <p>Indonesia, sebuah negara kepulauan yang terdiri dari lebih dari 17.000 pulau, merupakan mosaic budaya, sejarah, dan alam yang memukau. 
                Di antara hamparan laut biru dan hijau lebatnya hutan tropis, berbagai suku dan tradisi saling bercerita, menjadikan Indonesia sebagai 
                salah satu negara paling beragam di dunia. Indonesia tidak hanya dikenal karena keragaman geografisnya, tetapi juga sebagai rumah bagi 
                warisan budaya yang kaya. Setiap pulau menyimpan cerita uniknya sendiri, dari ritual adat yang sakral hingga festival yang meriah dan 
                penuh warna. Seni tradisional, seperti ukiran kayu, batik, dan tenun ikat, dipertahankan oleh para pengrajin yang meneruskan keterampilan 
                ini dari generasi ke generasi. Gastronomi Indonesia, dengan rempah-rempah yang khas dan variasi masakan lokal, menawarkan palet rasa yang 
                memanjakan lidah dan menggugah selera. Ini adalah tanah dimana tradisi dan modernitas bertemu, menciptakan harmoni yang dinamis dan menarik.</p>
                <img src="./images/volcano-with-mist-sunset 2.jpg" alt="about-indonesia-picture">
            </div>
        </div>

        <div class="explore">
            <h2>Explore</h2>
            <div class="seemore">
                <a class="seeMoreBtn" href="#/explore">See more →</a>
            </div>            
            <button id="prev-slide" class="slide-button material-symbols-rounded">chevron_left</button>

           <div class="explore-content"></div>

            <button id="next-slide" class="slide-button material-symbols-rounded">chevron_right</button>


                <div class="slider-scrollbar">
                    <div class="scrollbar-track">
                        <div class="scrollbar-thumb"></div>
                    </div>
                </div>

            </div>
      `;
  },

  async afterRender() {
    const header = document.querySelector(".app-header");
    const heroElement = document.querySelector(".hero-element");
    const container = document.querySelector('.explore-content');

    window.scrollTo(0, 0);
    data.provinces.slice(0, 8).forEach((province) => {
    container.innerHTML += exploreItemTemplate(province);
    });

    // window.addEventListener("scroll", function() {
    //     if (window.scrollY > heroElement.offsetHeight) {
    //         header.classList.add("scrolled");
    //     } else {
    //         header.classList.remove("scrolled");
    //     }
    // });

      // Function to check the scroll position and add/remove the "scrolled" class
  const checkScrollPosition = () => {
    const heroBottom = heroElement.getBoundingClientRect().bottom + window.scrollY;
    
    if (window.scrollY >= heroBottom) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  
  // Initial check in case the page is already scrolled
  checkScrollPosition();
  
  // Add the scroll event listener
  window.addEventListener('scroll', checkScrollPosition);

    window.addEventListener("resize", initSlider());
    window.addEventListener("load", initSlider());
 
    
  },
};

export default HomePage;