<template>
    <v-app>
        <v-toolbar app dense flat fixed class="ma-0 pa-0">
            <v-toolbar-title class="headline text-uppercase">
                <span>OFFICE</span>
                <span class="font-weight-light primary--text">HERO</span>
            </v-toolbar-title>
            <v-btn :to="{path: 'event', query: {e1: 2, selectedEvent: 'madeCoffee' }}" class="ml-4" flat dark color="brown darken-3">
                <v-icon small>add</v-icon>
                <v-icon>
                    mdi-coffee
                </v-icon>
            </v-btn>
            <!-- <v-btn dark color="light-blue darken-4">
                <v-icon small>add</v-icon>
                <v-icon>
                    fas fa-building
                </v-icon>
            </v-btn> -->
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn to="/" flat small depressed dark color="orange darken-4">
                    <v-icon dark>fab fa-elementor</v-icon>
                </v-btn>
                <v-btn to="/statistics" flat small depressed dark color="amber accent-4">
                    <v-icon dark>fas fa-crown</v-icon>
                </v-btn>
                <v-btn to="/add" flat small depressed dark color="orange darken-4">
                    <v-icon dark>add</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>
<script>
export default {
    name: "App",
    created() {
        console.log("Calling init function");
        this.$store.dispatch("init");
    }
};
</script>
<style>
body {
  overflow: hidden;
  cursor: none !important;
}
</style>