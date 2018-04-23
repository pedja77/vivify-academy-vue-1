<template>
  <div>
    <form @submit.prevent="addContact">
      <label>First Name</label>
      <input v-model="newContact.firstName" type="text" placeholder="First Name"/>
      <label>Last Name</label>
      <input v-model="newContact.lastName" type="text" placeholder="Last Name"/>
      <label>Email</label>
      <input v-model="newContact.email" type="email" placeholder="Email"/>
      <button type="submit">Add Contact</button>
    </form>
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>&nbsp;</th>
      </thead>
      <tbody>
        <tr v-for="(contact, key) in contacts" :key="key">
          <td>{{ contact.firstName }}</td>
          <td>{{ contact.lastName }}</td>
          <td>{{ contact.email }}</td>
          <td>
            <button @click="removeContact(contact)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { firstName: 'John', lastName: 'Doe', email: 'example@example.com' },
        { firstName: 'Jane', lastName: 'Doe', email: 'example@example.com' },
        { firstName: 'Patric', lastName: 'Doe', email: 'example@example.com' }
      ],
      newContact: {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  },
  methods: {
    addContact() {
      this.contacts.push(this.newContact)
      this.newContact = {}
    },
    removeContact(contact) {
      this.contacts.splice(this.contacts.indexOf(contact), 1)
    }
  }
}
</script>
