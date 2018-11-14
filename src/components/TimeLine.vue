<template>
  <v-container>
    <v-layout>
      <v-flex xs12 v-if="events">
        <v-timeline align-top>
          <v-timeline-item v-for="(id, i) in events" :color="id.color" :key="i" :icon="id.icon" large right>
            <span slot="opposite">
              <v-avatar size="60" v-if="id.heroAvatar == 'dwarf'">
                <img src="../assets/dwarf_av.jpg" alt="Dwarf Avatar">
              </v-avatar>
              <v-avatar size="60" v-if="id.heroAvatar == 'goblin'">
                <img src="../assets/goblin_av.jpg" alt="Goblin Avatar">
              </v-avatar>
              <v-avatar size="60" v-if="id.heroAvatar == 'human'">
                <img src="../assets/human_av.jpg" alt="Human Avatar">
              </v-avatar>
              <v-avatar size="60" v-if="id.heroAvatar == 'peon'">
                <img src="../assets/peon_av.jpg" alt="Peon Avatar">
              </v-avatar>
              <span class="pa-0 ml-3">
                {{id.heroName}}
                <span class="pa-0 ml-0 font-weight-bold">{{id.name}}</span>
              </span>
              <div>
                @ {{id.created}}
              </div>

            </span>
            <v-card :color="id.color" class="pa-1 ma-0" dark tile>
              <v-card-title class="pa-2 ma-0 font-weight-light subheading">
                <v-flex xs12>
                  <v-btn block dark large color="red accent-4" @click="addLove(id.id)">Send love
                    <v-icon dark right>fas fa-hand-holding-heart</v-icon>
                  </v-btn>
                </v-flex>
              </v-card-title>
              <v-card-text class="white text--primary">
                <div class="text-xs-center">
                  <v-rating v-model="id.love" :length="length" :empty-icon="emptyIcon" :full-icon="fullIcon" :half-icon="halfIcon" :half-increments="halfIncrements" :hover="hover" :readonly="readonly" color="red accent-4" background-color="grey lighten-1"></v-rating>
                  <div v-if="id.love>length">
                    <span class="title">+{{id.love-5}}</span>
                    <v-icon small color="red accent-4" class="pa-1">mdi-heart</v-icon>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    emptyIcon: "mdi-heart-outline",
    fullIcon: "mdi-heart",
    halfIcon: "mdi-heart-half-full",
    halfIncrements: false,
    hover: false,
    length: 5,
    readonly: true
  }),
  computed: {
    events() {
      let _events = this.$store.getters.events;
      return _events.sort();
    }
  },
  methods: {
    addLove(id) {
      this.$store.dispatch("addLove", id);
    }
  }
};
</script>
