<template>
  <v-container>
    <v-layout>
      <v-flex xs12 v-if="events">
        <v-timeline dense clipped align-top>
          <v-timeline-item
            v-for="(id, i) in events"
            :color="id.color"
            :key="i"
            :icon="id.icon"
            large
          >
            <v-card :color="id.color" class="pa-0 ma-0" dark tile>
              <v-card-title class="font-weight-light subheading">
                <v-flex xs8>
                  <span class="pa-2">
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
                  </span>
                  {{id.created}}&nbsp;{{id.heroName}}
                  <span class="font-weight-bold">{{id.name}}</span>
                </v-flex>
                <v-flex xs4>
                  <v-btn
                    block
                    dark
                    large
                    color="red accent-4"
                    @click="addLove(id.id)"
                  >Send love
                    <v-icon dark right>fas fa-hand-holding-heart</v-icon>
                  </v-btn>
                </v-flex>
              </v-card-title>
              <v-card-text class="white text--primary">
                <div class="text-xs-center">
                  <v-rating
                    v-model="id.love"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    color="red accent-4"
                    background-color="grey lighten-1"
                  ></v-rating>
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
    length: 17,
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
