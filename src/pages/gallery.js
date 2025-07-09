import Layout from '@theme/Layout';
import { useState, useEffect } from 'react';
import styles from './gallery.module.css';

const images = [
  {
    src: 'img/church.png',
    title: '教堂',
    description: '庄严肃穆，沉静不语，默默守望着每一位玩家，虔诚祷告着繁荣的未来。\n设计：Alicia_X 建造：Alicia_X、NewMagnet、r000'
  },
  {
    src: 'img/wishing_tree_1.png',
    title: '许愿树',
    description: '就让我们在这株樱花树下，许下自己的祈愿吧。\n设计&建造：Alicia_X'
  },
  {
    src: 'img/wishing_tree_2.png',
    title: '许愿树',
    description: '就让我们在这株樱花树下，许下自己的祈愿吧。\n设计&建造：Alicia_X'
  },
  {
    src: 'img/alchemical_imbuer.png',
    title: '炼药机',
    description: 'SSC自研红石代表作之一，在红石与魔法的交溶中酿造出一瓶瓶秘药。\n设计&建造：rhnmabj'
  },
  {
    src: 'img/observatory.png',
    title: '天文台',
    description: '无言地伫立在这片雅丹之中，冷静地凝望着灿烂星汉，在斗转星移中铭刻下时间的痕迹。\n设计：Alicia_X 建造：Alicia_X、LiFr、NewMagnet'
  },
  {
    src: 'img/sdssyzx_1.png',
    title: '山东省实验中学——树蕙楼前',
    description: '“往事总在回忆时被赋予意义”\n设计&建造：NewMagnet、rhnmabj等'
  },
   {
    src: 'img/Li3O4.png',
    title: '锂磁居',
    description: '敬我们互帮互助、携手并进的高三。\n建造：NewMagnet、LiFr'
  }
];

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [transitionPhase, setTransitionPhase] = useState('visible');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(new Set());

  useEffect(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded(prev => new Set([...prev, index]));
      };
      img.src = image.src;
    });
  }, []);

  const changeImage = (newIndex) => {
    if (newIndex === currentImage || transitionPhase !== 'visible') return;
    setTransitionPhase('fadeOut');
    setTimeout(() => {
      setCurrentImage(newIndex);
      setTransitionPhase('fadeIn');
      setTimeout(() => {
        setTransitionPhase('visible');
      }, 50);
    }, 300);
  };

  return (
    <Layout title="风光一览">
      <div className={styles.galleryContainer}>
        <div 
          className={`${styles.backgroundImage} ${
            transitionPhase === 'fadeOut' ? styles.fadeOut : 
            transitionPhase === 'fadeIn' ? styles.fadeIn : 
            styles.visible
          }`}
          style={{ backgroundImage: `url(${images[currentImage].src})` }}
        />

        <button 
          className={styles.toggleButton}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>

        <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
          <div className={styles.sidebarContent}>
            <h3>选择景观</h3>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.imageItem} ${index === currentImage ? styles.active : ''}`}
                onClick={() => {
                  changeImage(index);
                  setSidebarOpen(false);
                }}
              >
                <img src={image.src} alt={image.title} />
                <span>{image.title}</span>
                {!imagesLoaded.has(index) && (
                  <div className={styles.loadingIndicator}>⟳</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.textBox} ${transitionPhase !== 'visible' ? styles.textFadeOut : styles.textFadeIn}`}>
          <h2>{images[currentImage].title}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{images[currentImage].description}</p>
        </div>

        <div className={styles.navigation}>
          <button 
            onClick={() => changeImage(currentImage > 0 ? currentImage - 1 : images.length - 1)}
            className={styles.navButton}
            disabled={transitionPhase !== 'visible'}
          >
            ‹
          </button>
          <span className={styles.imageCounter}>
            {currentImage + 1} / {images.length}
          </span>
          <button 
            onClick={() => changeImage(currentImage < images.length - 1 ? currentImage + 1 : 0)}
            className={styles.navButton}
            disabled={transitionPhase !== 'visible'}
          >
            ›
          </button>
        </div>
      </div>
    </Layout>
  );
}