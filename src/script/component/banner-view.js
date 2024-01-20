import imagePath1 from '../img/sampul-1.jpg';
import imagePath2 from '../img/sampul-2.jpg';
import imagePath3 from '../img/sampul-3.jpg';
import imagePath4 from '../img/sampul-4.jpg';
import imagePath5 from '../img/sampul-5.jpg';

class BannerView extends HTMLElement {
  connectedCallback() {
    this.render();
    this.startImageSlider();
  }

  render() {
    this.innerHTML = `
        <div class="content" id="cover">
          <div id="banner-content">
            <div class="content-description">
                <h1 class="title">Warung Makan 66</h1>
                <p>Selamat datang di Warung Makan 66, tempat cita rasa klasik dan modern berpadu. Kami sajikan hidangan autentik dengan bahan-bahan segar terbaik. Setiap suapannya adalah perjalanan rasa yang mengantar Anda pulang ke kenangan. Rasakan kelezatan di setiap hidangan, di sini, di Warung Makan 66.</p>
                <p>"Rasa yang Membawa Pulang Kenangan!"</p>
                <button>order di sini</button>
            </div>
          </div>
        </div>
    `;
  }

  startImageSlider() {
    const content = this.querySelector('#cover');
    let currentImageIndex = 0;
    const imagePaths = [imagePath1, imagePath2, imagePath3, imagePath4, imagePath5];

    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
      content.style.backgroundImage = `url('${imagePaths[currentImageIndex]}')`;
    }, 5000);
  }
}

customElements.define('banner-view', BannerView);
