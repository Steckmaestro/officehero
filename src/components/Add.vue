<template>
  <v-container fluid class="ma-0 pa-0">
    <v-layout justify-center>
      <v-flex xs12>
        <v-container fluid grid-list-xl>
          <v-layout row wrap="">
            <v-flex v-for="card in cards" v-bind="{ [`xs${card.flex}`]: true }" :key="card.title">
              <v-card :to="card.to">
                <v-card-title>
                  <v-spacer></v-spacer>
                  <span class="title primary--text" v-text="card.title"></span>
                  <v-icon color="orange darken-4" class="ml-1">{{card.icon}}</v-icon>
                </v-card-title>
                <v-img :src="card.src" height="300px">
                  <v-container fill-height fluid pa-2>
                    <v-layout fill-height></v-layout>
                  </v-container>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tabs: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      cards: [
        {
          title: "Add new event",
          src: require("@/assets/coffee-event.jpg"),
          flex: 6,
          icon: "mdi-calendar-plus",
          to: { path: "/event", query: { e1: 1, selectedEvent: null } }
        },
        {
          title: "Add new hero",
          src: require("@/assets/hero.jpeg"),
          flex: 6,
          icon: "fas fa-user-plus",
          to: "hero"
        }
      ]
    };
  }
};
</script>