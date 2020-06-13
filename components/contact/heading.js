export default {
  props: {
    title: String,
    description: String,
  },
  template: `
    <div>
      <h2>{{title}}</h2>
      <p>{{description}}</p>
    </div>
  `
};
