export default {
  props: {
    post: Object
  },
  template: `
    <section>
      <a :href="post.url" class="image"><img :src="post.image.src" :alt="post.image.alt" data-position="center center" /></a>
      <div class="content">
        <div class="inner">
          <h2>{{post.title}}</h2>
          <p>{{post.intro}}</p>
          <ul class="actions">
            <li><a :href="post.url" class="button">{{post.buttonText}}</a></li>
          </ul>
        </div>
      </div>
    </section>
  `
};
