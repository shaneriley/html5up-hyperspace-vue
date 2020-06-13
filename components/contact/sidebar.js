export default {
  props: {
    address: {
      type: Object,
      default() {
        return {
          title: '',
          address: '',
        };
      }
    },
    email: {
      type: Object,
      default() {
        return {
          title: '',
          email: '',
        };
      }
    },
    phone: {
      type: Object,
      default() {
        return {
          title: '',
          phone: '',
        };
      }
    },
    socialLinks: Array,
  },
  template: `
    <ul class="contact">
      <li>
        <h3>{{address.title}}</h3>
        <span v-html="address.address"></span>
      </li>
      <li>
        <h3>{{email.title}}</h3>
        ` + '<a :href="`mailto:${email.email}`">{{email.email}}</a>' + `
      </li>
      <li>
        <h3>{{phone.title}}</h3>
        <span>{{phone.phone}}</span>
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
