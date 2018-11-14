<template>
  <v-container fluid class="text-xs-center">
    <v-layout>
      <v-flex xs6>
        <v-card color="red lighten-4">
          <v-card-text v-if="lovedHero.id">
            <div class="headline pa-3">with the most..
              <v-icon large color="red accent-4">mdi-heart</v-icon>
            </div>
            <v-avatar size="40" v-if="lovedHero.avatar == 'dwarf'">
              <img src="../assets/dwarf_av.jpg" alt="Dwarf Avatar">
            </v-avatar>
            <v-avatar size="40" v-if="lovedHero.avatar == 'goblin'">
              <img src="../assets/goblin_av.jpg" alt="Goblin Avatar">
            </v-avatar>
            <v-avatar size="40" v-if="lovedHero.avatar == 'human'">
              <img src="../assets/human_av.jpg" alt="Human Avatar">
            </v-avatar>
            <v-avatar size="40" v-if="lovedHero.avatar == 'peon'">
              <img src="../assets/peon_av.jpg" alt="Peon Avatar">
            </v-avatar>
            <span class="subheading ml-2">{{lovedHero.name}} with</span>
            <span class="ml-1 font-weight-bold display-2">{{lovedHero.totalLove}}</span>
            <v-icon small color="red accent-4">mdi-heart</v-icon>
          </v-card-text>
          <v-card-text v-else>
            <v-flex xs8>
              <span class="subheading">No statistics available</span>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card color="brown lighten-4">
          <div class="headline pa-3">who made the most..
            <v-icon medium color="brown accent-4">mdi-coffee</v-icon>
          </div>
          <v-card-text v-if="coffeeHero.id">
            <v-avatar size="40" v-if="coffeeHero.avatar == 'dwarf'">
              <img src="../assets/dwarf_av.jpg" alt="Dwarf Avatar">
            </v-avatar>
            <v-avatar size="40" v-if="coffeeHero.avatar == 'goblin'">
              <img src="../assets/goblin_av.jpg" alt="Goblin Avatar">
            </v-avatar>
            <v-avatar size="40" v-if="coffeeHero.avatar == 'human'">
              <img src="../assets/human_av.jpg" alt="Human Avatar">
            </v-avatar>
            <v-avatar size="40" v-if="coffeeHero.avatar == 'peon'">
              <img src="../assets/peon_av.jpg" alt="Peon Avatar">
            </v-avatar>
            <span class="ml-2 subheading">{{coffeeHero.name}} with</span>
            <span class="ml-1 font-weight-bold display-2">{{coffeeHero.noCoffee}}</span>
            <v-icon small color="brown accent-4">mdi-coffee</v-icon>
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

