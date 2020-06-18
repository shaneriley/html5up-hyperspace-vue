export default {
  props: {
    address: {
      type: Array,
      default() {
        return {
          title: '',
          address: '',
        };
      }
    },
    email: String,
    phone: String,
    socialLinks: Array,
    title: String,
  },
  template: `
    <ul class="contact">
      <li>
        <h3>{{title}}</h3>
        <span v-html="address.address"></span>
      </li>
      <li>
        <h3>Email</h3>
        ` + '<a :href="`mailto:${email}`">{{email.replace(/^mailto:/, "")}}</a>' + `
      </li>
      <li>
        <h3>Phone</h3>
        <span>{{phone}}</span>
      </li>
      <li>
        <h3>Social</h3>
        <ul class="icons">
          <li v-for="link in socialLinks"><a :href="link.href" :class="link.icon" class="icon brands" :title="link.text"><span class="label">{{link.text}}</span></a></li>
        </ul>
      </li>
    </ul>
  `
};
