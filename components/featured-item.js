export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          icon: 'fa-code',
          title: 'Lorem ipsum amet',
          description: 'Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.',
        };
      }
    }
  },
  template: `
    <section>
      <span :class="item.icon" class="icon solid major"></span>
      <h3>{{item.title}}</h3>
      <p>{{item.description}}</p>
    </section>
  `
};
