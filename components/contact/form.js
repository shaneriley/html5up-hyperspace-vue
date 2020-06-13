export default {
  data: function() {
    return {
      name: {
        value: '',
        validate: 'validateName',
        valid: true,
      },
      email: {
        value: '',
        validate: 'validateEmail',
        valid: true,
      },
      message: {
        value: '',
        validate: 'validateMessage',
        valid: true,
      },
    };
  },
  methods: {
    validateName() {
      this.name.valid = /\w+ .+/.test(this.name.value);
    },
    validateEmail() {
      this.email.valid = /.+@.+\..{2,}$/.test(this.email.value);
    },
    validateMessage() {
      this.message.valid = !!this.message.value;
    },
    submit(e) {
      e.preventDefault();
      const inputs = Object.keys(this.$data);
      inputs.forEach((key) => this[`validate${key.replace(/^(\w)/, ($1) => $1.toUpperCase())}`]());
      if (inputs.filter((key) => !this.$data[key].valid).length) {
        console.log("nope");
      }
    },
  },
  template: `
    <form method="post" action="#" @submit="submit">
      <div class="fields">
        <div :class="{ error: !name.valid }" class="field half">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" v-model="name.value" @blur="validateName" />
          <p>Please enter both your first (given) and last (family) names.</p>
        </div>
        <div :class="{ error: !email.valid }" class="field half">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" v-model="email.value" @blur="validateEmail" />
          <p>Looks like we don't support that email format. Please enter a valid email.</p>
        </div>
        <div :class="{ error: !message.valid }" class="field">
          <label for="message">Message</label>
          <textarea name="message" id="message" rows="5" v-model="message.value" @blur="validateMessage"></textarea>
          <p>Ya gotta give me something, here.</p>
        </div>
      </div>
      <ul class="actions">
        <li><input type="submit" class="button submit" value="Send Message" /></li>
      </ul>
    </form>
  `
};
