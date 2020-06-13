export default {
  props: {
    title: String,
    description: String,
    button: {
      type: Object,
      default() {
        return {
          href: '#',
          text: 'Learn more'
        };
      }
    }
  },
  template: `
    <section id="intro" class="wrapper style1 fullscreen fade-up">
      <div class="inner">
        <h1>{{title}}</h1>
        <p v-html="description"></p>
        <ul class="actions">
          <li><a :href="button.href" class="button scrolly">{{button.text}}</a></li>
        </ul>
      </div>
    </section>
  `
};
