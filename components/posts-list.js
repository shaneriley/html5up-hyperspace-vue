import PostItem from './featured-item.js';

export default {
  props: {
    title: String,
    description: String,
    url: String,
    buttonText: {
      type: String,
      default() { return 'Learn more'; }
    },
    posts: Array,
  },
  components: {
    PostItem
  },
  template: `
    <section id="two" class="wrapper style3 fade-up">
      <div class="inner">
        <h2>{{title}}</h2>
        <p>{{description}}</p>
        <div class="features">
          <template v-for="item in posts">
            <post-item :item="item"></post-item>
          </template>
        </div>
        <ul class="actions">
          <li><a :href="url" class="button">{{buttonText}}</a></li>
        </ul>
      </div>
    </section>
  `
};
