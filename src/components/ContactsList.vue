<template>
  <div>
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr
          v-for="(contact, key) in contacts"
          :key="key"
          v-if="contact.firstName === 'John'"
        >
          <td>{{ contact.firstName }}</td>
          <td>{{ contact.lastName }}</td>
          <td>{{ contact.email }}</td>
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
      ]
    }
  }
}
</script>
