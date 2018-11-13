<template>
  <div>
    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="500">
        <v-card v-if="!error && !success">
          <v-card-title class="headline grey lighten-3" primary-title>
            <v-flex xs8 offset-xs1 v-if="selectedHero">Are you {{selectedHero.name}}?</v-flex>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn to="/add" class="body-2 primary--text">Nope,</v-btn>
            <v-btn color="primary" @click="submit">Yes!</v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-if="error && !success">
          <v-card-title class="headline red lighten-3" primary-title>
            <v-flex xs10 offset-xs1>
              <v-icon large color="red accent-3 mr-2">fas fa-exclamation-circle</v-icon>Whoopsie! Error
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-flex xs10 offset-xs1>
              <p>{{errorMsg}}</p>
            </v-flex>
            <v-divider></v-divider>
          </v-card-text>
        </v-card>
        <v-card v-if="!error && success">
          <v-card-title class="headline green lighten-3" primary-title>
            <v-flex xs10 offset-xs1>
              <v-icon large color="green darken-4 mr-2">fas fa-smile-beam</v-icon>Success
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-flex xs10 offset-xs1>
              <p>{{successMsg}}</p>
            </v-flex>
            <v-divider></v-divider>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <v-stepper class="myStepper elevation-0" alt-lables v-model="e1">
      <v-stepper-header class="elevation-0 ma-0">
        <v-stepper-step :complete="e1 > 1" step="1">{{stepper1Title}}</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">{{stepper2Title}}</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-container fluid grid-list-md>
            <v-data-iterator :items="eventCards" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap="">
              <v-flex slot="item" slot-scope="props" sm4 @click="selectCard(props.item)" style="cursor: pointer;">
                <v-card>
                  <v-card-title>
                    <h4>{{ props.item.title }}</h4>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-img :src="props.item.src" height="150px"></v-img>
                </v-card>
              </v-flex>
            </v-data-iterator>
            <v-btn to="/add" fixed right bottom class="body-2 primary--text">Cancel</v-btn>
          </v-container>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-layout row>
            <v-flex xs10 offset-xs1>
              <v-list>
                <v-list-tile v-for="item in heroes" :key="item.id" avatar @click="selectHero(item)">
                  <v-list-tile-avatar title="" v-if="item.avatar == 'dwarf'" size="50">
                    <img src="../assets/dwarf_av.jpg" alt="Dwarf Avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-avatar title="" v-if="item.avatar == 'goblin'" size="50">
                    <img src="../assets/goblin_av.jpg" alt="Goblin Avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-avatar title="" v-if="item.avatar == 'human'" size="50">
                    <img src="../assets/human_av.jpg" alt="Human Avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-avatar title="" v-if="item.avatar == 'peon'" size="50">
                    <img src="../assets/peon_av.jpg" alt="Peon Avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content class="ml-3">
                    <v-list-tile-title v-text="item.name" avatar></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
          <v-btn to="/add" fixed right bottom class="body-2 primary--text">Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  props: {
    i_e1: Number,
    i_selectedHero: Object
  },
  data() {
    return {
      e1: this.i_e1,
      selectedHero: this.i_selectedHero,
      dialog: false,
      success: false,
      sucessMsg: null,
      error: false,
      errorMsg: null,
      pin: null,
      rowsPerPageItems: [1, 3, 6],
      pagination: {
        rowsPerPage: 3
      },
      eventCards: [
        {
          title: "..made coffee?",
          src: require("@/assets/coffee-event.jpg"),
          id: "madeCoffee"
        },
        {
          title: "..emptied the dishwasher?",
          src: require("@/assets/dishwasher-empty.jpeg"),
          id: "emptiedDishwasher"
        },
        {
          title: "..filled the dishwasher?",
          src: require("@/assets/dishwasher.jpeg"),
          id: "filledDishwasher"
        },
        {
          title: "..opened the office?",
          src: require("@/assets/early-office.jpeg"),
          id: "openedOffice"
        },
        {
          title: "..closed the office?",
          src: require("@/assets/late-office.jpeg"),
          id: "closedOffice"
        }
      ],
      selectedEvent: false,
      show1: false
    };
  },
  computed: {
    stepper1Title() {
      return this.selectedEvent
        ? `You ${this.selectedEvent.title.replace("..", "").replace("?", "!")}`
        : "You ..";
    },
    stepper2Title() {
      return this.selectedHero
        ? `And you're ${this.selectedHero.name}!`
        : "Who are you?";
    },
    heroes() {
      return this.$store.getters.heroes;
    }
  },
  methods: {
    selectCard(id) {
      console.log(id);
      this.selectedEvent = id;
      this.e1++;
    },
    selectHero(hero) {
      console.log("Called select hero");
      this.selectedHero = hero;
      this.dialog = !this.dialog;
    },
    submit() {
        let e = {
          name: this.selectedEvent.title.replace("..", "").replace("?", "!"),
          created: `${new Date().getFullYear()}-${(
            "0" +
            (new Date().getMonth() + 1)
          ).slice(-2)}-${("0" + new Date().getDate()).slice(-2)} ${(
            "0" + new Date().getHours()
          ).slice(-2)}:${("0" + new Date().getMinutes()).slice(-2)}`,
          love: 0,
          heroId: this.selectedHero.id
        };
        this.success = true;
        this.successMsg = "Cool, storing your event, hero!";
        this.$store.dispatch("createEvent", e);
      }
  },
  watch: {
    success(val) {
      if (val) {
        setTimeout(() => {
          this.success = !this.success;
          this.$router.replace("/");
        }, 1500);
      }
    },
    error(val) {
      if (val) {
        setTimeout(() => {
          this.error = !this.error;
        }, 1500);
      }
    }
  }
};
</script>

<style>
.myStepper .v-stepper__label {
  display: block !important;
}
.v-stepper__label {
  margin-left: 5px;
}
</style>
