<template>
  <v-container fluid grid-list-lg class="elevation-0">
    <v-layout row wrap="">
      <v-flex xs7 offset-xs1>
        <v-card color="deep-purple darken-1" class="white--text">
          <v-card-title primary-title>
            <div class="headline pb-0 mb-0">Hero with the most
              <v-icon medium color="red">mdi-heart</v-icon>
            </div>
          </v-card-title>
          <v-card-text v-if="lovedHero.id">
            <v-flex xs8 class="pa-3">
              <span class="pr-2">
                <v-avatar size="60" v-if="lovedHero.avatar == 'dwarf'">
                  <img src="../assets/dwarf_av.jpg" alt="Dwarf Avatar">
                </v-avatar>
                <v-avatar size="60" v-if="lovedHero.avatar == 'goblin'">
                  <img src="../assets/goblin_av.jpg" alt="Goblin Avatar">
                </v-avatar>
                <v-avatar size="60" v-if="lovedHero.avatar == 'human'">
                  <img src="../assets/human_av.jpg" alt="Human Avatar">
                </v-avatar>
                <v-avatar size="60" v-if="lovedHero.avatar == 'peon'">
                  <img src="../assets/peon_av.jpg" alt="Peon Avatar">
                </v-avatar>
              </span>
              <span class="ml-1 mt-0 pt-0 subheading">{{lovedHero.name}}</span>
              <span class="ml-3 font-weight-bold display-2">{{lovedHero.totalLove}}</span>
              <v-icon x-large color="red">mdi-heart</v-icon>
            </v-flex>
          </v-card-text>
          <v-card-text v-else>
            <v-flex xs8 class="pa-3">
              <span class="ml-1 mt-0 pt-0 subheading">No statistics available</span>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs7 offset-xs4>
        <v-card color="brown darken-3" class="white--text">
          <v-card-title primary-title>
            <div class="headline pb-0 mb-0">Hero who made the most
              <v-icon medium color="brown lighten-2">mdi-coffee</v-icon>
            </div>
          </v-card-title>
          <v-card-text v-if="coffeeHero.id">
            <v-flex xs8 class="pa-3">
              <span class="pr-2">
                <v-avatar size="60" v-if="coffeeHero.avatar == 'dwarf'">
                  <img src="../assets/dwarf_av.jpg" alt="Dwarf Avatar">
                </v-avatar>
                <v-avatar size="60" v-if="coffeeHero.avatar == 'goblin'">
                  <img src="../assets/goblin_av.jpg" alt="Goblin Avatar">
                </v-avatar>
                <v-avatar size="60" v-if="coffeeHero.avatar == 'human'">
                  <img src="../assets/human_av.jpg" alt="Human Avatar">
                </v-avatar>
                <v-avatar size="60" v-if="coffeeHero.avatar == 'peon'">
                  <img src="../assets/peon_av.jpg" alt="Peon Avatar">
                </v-avatar>
              </span>
              <span class="ml-1 mt-0 pt-0 subheading">{{coffeeHero.name}}</span>
              <span class="ml-3 font-weight-bold display-2">{{coffeeHero.noCoffee}}</span>
              <v-icon x-large color="brown lighten-2">mdi-coffee</v-icon>
            </v-flex>
          </v-card-text>
          <v-card-text v-else>
            <v-flex xs8 class="pa-3">
              <span class="ml-1 mt-0 pt-0 subheading">No statistics available</span>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      init: false
    };
  },
  computed: {
    lovedHero() {
      let _lovedHero = this.$store.getters.mostLoved;
      if (_lovedHero.id) {
        console.log("LovedHero", _lovedHero);
        let _hero = this.$store.getters.heroes.find(
          x => x.id === _lovedHero.id
        );
        if (_hero) {
          _hero["totalLove"] = _lovedHero.totalLove;
          return _hero;
        } else {
          return {
            id: false
          };
        }
      } else {
        return {
          id: false
        };
      }
    },
    coffeeHero() {
      let _coffeeHero = this.$store.getters.mostCoffee;
      if (_coffeeHero.id) {
        console.log("CoffeeHero", _coffeeHero);
        let _hero = this.$store.getters.heroes.find(
          x => x.id === _coffeeHero.id
        );
        if (_hero) {
          _hero["noCoffee"] = _coffeeHero.noCoffee;
          return _hero;
        } else {
          return {
            id: false
          };
        }
      } else {
        return {
          id: false
        };
      }
    }
  },
  beforeMount() {
    this.$store.dispatch("refreshLove");
    this.$store.dispatch("refreshCoffee");
  }
};
</script>

