import PageIntro from '../components/page-intro.js';
import FeaturedItems from '../components/featured-items.js';
import PostsList from '../components/posts-list.js';
import ContactHeading from '../components/contact/heading.js';
import ContactForm from '../components/contact/form.js';
import ContactSidebar from '../components/contact/sidebar.js';
import pageData from './page-data.js';

let loadedComponents = 0;
const totalComponents = 4;

const updateLoadCountAndStart = () => {
  if (++loadedComponents === totalComponents) {
    // Located in assets/js/main.js
    main();
  }
};

new Vue({
  el: '#intro',
  data: pageData.intro,
  components: {
    PageIntro,
  },
  mounted: updateLoadCountAndStart,
  template: `
    <page-intro
      :title="title"
      :description="description"
      :button="button"
    ></page-intro>
  `
});

new Vue({
  el: '#one',
  data: pageData.featuredItems,
  components: {
    FeaturedItems
  },
  mounted: updateLoadCountAndStart,
  template: `
    <featured-items :posts="posts"></featured-items>
  `
});

new Vue({
  el: '#two',
  data: pageData.postsList,
  components: {
    PostsList
  },
  mounted: updateLoadCountAndStart,
  template: `
    <posts-list
      :title="title"
      :description="description"
      :url="url"
      :buttonText="buttonText"
      :posts="posts"
    ></posts-list>
  `
});

new Vue({
  el: '#three',
  data: pageData.contactInfo,
  components: {
    ContactHeading,
    ContactForm,
    ContactSidebar,
  },
  mounted: updateLoadCountAndStart,
  template: `
    <section id="three" class="wrapper style1 fade-up">
      <div class="inner">
        <contact-heading :title="title" :description="description"></contact-heading>
        <div class="split style1">
          <section id="contact_form">
            <contact-form></contact-form>
          </section>
          <section>
            <contact-sidebar
              :address="sidebar.address"
              :email="sidebar.email"
              :phone="sidebar.phone"
              :social-links="sidebar.socialLinks"
            ></contact-sidebar>
          </section>
        </div>
      </div>
    </section>
  `
});
