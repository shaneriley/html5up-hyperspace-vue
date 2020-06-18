import PageIntro from '../components/page-intro.js';
import FeaturedItems from '../components/featured-items.js';
import PostsList from '../components/posts-list.js';
import ContactHeading from '../components/contact/heading.js';
import ContactForm from '../components/contact/form.js';
import ContactSidebar from '../components/contact/sidebar.js';

let loadedComponents = 0;
let pageData;
const totalComponents = 4;

const updateLoadCountAndStart = (inst) => {
  if (++loadedComponents === totalComponents) {
    // Located in assets/js/main.js
    main();
  }
};

const queryData = (vue) => {
  fetch('https://html5up-templates.cdn.prismic.io/api/v2/documents/search?ref=XuizAhAAAB4AeHib&q=%5B%5Bany(document.type%2C+%5B%22hyperspace%22%5D)%5D%5D#format=json').then((data) => data.json()).then((json) => {
    pageData = json.results[0].data;
    init();
  });
};

function init() {
  new Vue({
    el: '#intro',
    data: pageData,
    components: {
      PageIntro,
    },
    mounted: updateLoadCountAndStart,
    template: `
      <page-intro
        :title="introTitle"
        :description="introDescription[0].text"
        :buttonText="introButtonText"
      ></page-intro>
    `
  });

  new Vue({
    el: '#one',
    data: pageData,
    components: {
      FeaturedItems
    },
    mounted: updateLoadCountAndStart,
    template: `
      <featured-items :posts="featuredPosts"></featured-items>
    `
  });

  new Vue({
    el: '#two',
    data: pageData,
    components: {
      PostsList
    },
    mounted: updateLoadCountAndStart,
    template: `
      <posts-list
        :title="postsListTitle"
        :description="postsListDescription"
        :url="postsListUrl"
        :buttonText="postsListButtonText"
        :posts="posts"
      ></posts-list>
    `
  });

  new Vue({
    el: '#three',
    data: pageData,
    components: {
      ContactHeading,
      ContactForm,
      ContactSidebar,
    },
    mounted: updateLoadCountAndStart,
    template: `
      <section id="three" class="wrapper style1 fade-up">
        <div class="inner">
          <contact-heading :title="contactInfoTitle" :description="contactInfoDescription"></contact-heading>
          <div class="split style1">
            <section id="contact_form">
              <contact-form></contact-form>
            </section>
            <section>
              <contact-sidebar
                :title="addressTitle"
                :address="address"
                :email="email.url"
                :phone="phone"
                :social-links="socialLinks"
              ></contact-sidebar>
            </section>
          </div>
        </div>
      </section>
    `
  });
}

queryData();
