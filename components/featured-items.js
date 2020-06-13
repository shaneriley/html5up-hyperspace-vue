import PostItem from './post-item.js';

export default {
  components: {
    PostItem
  },
  props: {
    posts: Array
  },
  template: `
    <section id="one" class="wrapper style2 spotlights">
      <template v-for="post in posts">
        <post-item :post="post"></post-item>
      </template>
    </section>
  `
};
