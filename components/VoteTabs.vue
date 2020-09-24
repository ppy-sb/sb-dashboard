<template>
  <b-tabs
    v-model="model"
    class="nav-wrapper py-0"
    pills
    justified
  >
    <b-tab>
      <span
        slot="title"
        class="nav-link-icon d-block"
      >{{ $t("viewer.downvote") }}</span>
    </b-tab>
    <b-tab>
      <span
        slot="title"
        class="nav-link-icon d-block"
      >{{ $t("viewer.unvote") }}</span>
    </b-tab>
    <b-tab>
      <span
        slot="title"
        class="nav-link-icon d-block"
      >{{ $t("viewer.upvote") }}</span>
    </b-tab>
  </b-tabs>
</template>
<script>
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  props: {
    collectionDB: {
      type: Object,
      default: () => ({
        slug: undefined
      })
    }
  },
  data () {
    return {
      value: 0,
      prev: undefined,
      ready: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value + 1
      },
      set (newValue) {
        if (newValue === 2) { this.value = 1 }
        if (newValue === 1) { this.value = 0 }
        if (newValue === 0) { this.value = -1 }
        if (newValue === this.prev) { this.value = 0 }
        this.prev = newValue
      }
    }
  },
  watch: {
    value (newValue, oldValue) {
      if (newValue === 0) { return this.cancelVote(oldValue) }
      return this.vote(oldValue)
    }
  },
  mounted () {
    return axios.get(`/api/collectionDB/myvote/${this.collectionDB.slug}`).then((res) => {
      console.log(res.data)
      if (!res.data) {
        this.ready = true
        return
      }
      this.value = res.data.vote
      this.ready = true
    })
  },
  methods: {
    vote (fallbackValue) {
      if (!this.ready) { return }
      const action = this.value === 1 ? 'upvote' : 'downvote'
      axios.get(`/api/collectionDB/${action}/${this.collectionDB.slug}`).then((res) => {
        return res.data
      }).then((result) => {
        if (!result.successed) { this.value = fallbackValue }
      })
    },
    cancelVote (fallbackValue) {
      if (!this.ready) { return }
      axios.get(`/api/collectionDB/unvote/${this.collectionDB.slug}`).then((res) => {
        return res.data
      }).then((result) => {
        if (!result.successed) { this.value = fallbackValue }
      })
    }
  }
}
</script>
