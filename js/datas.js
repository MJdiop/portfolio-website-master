const dataContent = document.querySelector('#data-content');

const Datas = [
  {
    title: 'Ip - Addresse - Tracker',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/ip-tracker.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://ip-addresse-tracker.netlify.app/',
  },
  {
    title: 'Laboratory Management System',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/members-ui-disign.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://members-ui-design.netlify.app/',
  },
  {
    title: 'Testimonials - grid - Section',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/testimonials-grid-section.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://mjd-testimonials-grid-section-main.netlify.app/',
  },
  {
    title: 'Mega Menu UI',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/mega-menu.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://mega-menu-ui-disign.netlify.app',
  },
  {
    title: 'Search Header Website',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/search-header.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://search-hearder-ui-disign.netlify.app/',
  },
  {
    title: 'Stats Cards',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/stats-cards.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://stats-cards-ui-disign.netlify.app/',
  },
  {
    title: 'Chat - app - css - illustration',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/chat-app-css-illustration.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://chat-app-css-illustration-master-kappa.vercel.app/',
  },
  {
    title: 'Snake game',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/serpent.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://jssnake-game.netlify.app/',
  },
  {
    title: 'Top 5 des actrices',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/actrices.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://top5actrice.netlify.app/',
  },
  {
    title: 'Fcc Css Docs',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/fcc-css-doc.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://fcc-css-doc.netlify.app/',
  },
  {
    title: 'Fcc portfolio',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/fcc-pf.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://fcc-pf.netlify.app/',
  },
  {
    title: 'TinDog',
    tecno: {
      html: 'HTML5',
      css: 'CSS3',
      scss: 'SCSS',
      js: 'JavaScript',
      api: 'API',
      netlify: 'Netlify',
      vercel: 'Vercel',
    },
    img: 'images/tindog.png',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    quidem nemo ducimus maxime, alias nulla?`,
    link: 'https://mjdiop-tindog.netlify.app/',
  },
];

const div = Datas.map(
  (data) => `
<div
  data-aos="flip-left"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000"
>
  <div class="post">
    <img class="thumbnail" src="${data.img}" />
    <div class="post-preview">
      <h6 class="post-title">${data.title}</h6>
      <div class="tag">
        <span class="tag-item">${data.tecno.html}</span>
        <span class="tag-item">${data.tecno.css}</span>
        <span class="tag-item">${data.tecno.js}</span>
        <span class="tag-item">${data.tecno.api}</span>
        <span class="tag-item">${data.tecno.netlify}</span>
      </div>
      <p class="post-intro">
        ${data.description}
      </p>
      <a
        href="${data.link}"
        target="_blank"
        >Preview</a
      >
    </div>
  </div>
</div>
`
);

dataContent.innerHTML = div;
