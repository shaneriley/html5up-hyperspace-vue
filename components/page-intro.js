export default {
  props: ['title', 'description', 'buttonText'],
  template: `
    <section id="intro" class="wrapper style1 fullscreen fade-up">
      <div class="inner">
        <h1>{{title}}</h1>
        <p v-html="description"></p>
        <ul class="actions">
          <li><a href="#intro" class="button scrolly">{{buttonText}}</a></li>
        </ul>
      </div>
    </section>
  `
};
