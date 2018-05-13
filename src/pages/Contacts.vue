<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <ContactList :contacts="contacts" />
      </div>
      <div class="col-8">
        <ContactDetails :contact="routeContact" />
      </div>
    </div>
  </div>
</template>

<script>
import ContactList from '../components/ContactList.vue'
import ContactDetails from '../components/ContactDetails.vue'
import { contacts } from '../services/Contacts'

export default {
  components: {
    ContactList,
    ContactDetails
  },

  data() {
    return {
      contacts: []
    }
  },

  beforeRouteEnter (to, from, next) {
    contacts.getAll()
      .then((response) => {
          next((vm) => {
            vm.contacts = response.data
          })
      })
  },

  computed: {
    routeContact() {
      return this.contacts.find(contact => contact.id == this.$route.params.id)
    }
  }
}
</script>
