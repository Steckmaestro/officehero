<template>
  <v-container fluid>
    <v-dialog v-model="dialog" width="500">
      <v-card v-if="error && !success">
        <v-card-title class="headline red lighten-4" primary-title>
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
    <v-navigation-drawer permanent app clipped>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title font-weight-light">Your hero</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider>
        <v-list three-line class="pa-2">
          <v-list-tile avatar>
            <v-avatar color="indigo" v-if="!selectedAvatar">
              <v-icon dark>account_circle</v-icon>
            </v-avatar>
            <v-avatar size="60" v-if="selectAvatar && avatar == 'dwarf'">
              <img src="../assets/dwarf_av.jpg" alt="Dwarf Avatar">
            </v-avatar>
            <v-avatar size="60" v-if="selectAvatar && avatar == 'goblin'">
              <img src="../assets/goblin_av.jpg" alt="Goblin Avatar">
            </v-avatar>
            <v-avatar size="60" v-if="selectAvatar && avatar == 'human'">
              <img src="../assets/human_av.jpg" alt="Human Avatar">
            </v-avatar>
            <v-avatar size="60" v-if="selectAvatar && avatar == 'peon'">
              <img src="../assets/peon_av.jpg" alt="Peon Avatar">
            </v-avatar>
            <v-list-tile-content class="pa-3">
              <v-list-tile-title v-if="!selectedAvatar">Avatar</v-list-tile-title>
              <v-list-tile-title v-else>{{avatar}}</v-list-tile-title>
            </v-list-tile-content>
            <v-divider></v-divider>
            <v-list-tile>
              <v-list-tile-title>Name:</v-list-tile-title>
              <v-subheader>{{name}}</v-subheader>
            </v-list-tile>
            <v-layout align-center justify-space-around wrap class="mb-1">
              <v-flex xs12>
                <div class="display-1 font-weight-light mb-3">Create a new hero</div>
              </v-flex>
              <v-flex xs12>
                <div class="pa-1 mb-2 subheading font-weight-light">Select avatar</div>
              </v-flex>
              <v-avatar size="60" @click="selectAvatar('dwarf')">
                <img src="../assets/dwarf_av.jpg" alt="Dwarf Avatar">
              </v-avatar>
              <v-avatar size="60" @click="selectAvatar('goblin')">
                <img src="../assets/goblin_av.jpg" alt="Goblin Avatar">
              </v-avatar>
              <v-avatar size="60" @click="selectAvatar('human')">
                <img src="../assets/human_av.jpg" alt="Human Avatar">
              </v-avatar>
              <v-avatar size="60" @click="selectAvatar('peon')">
                <img src="../assets/peon_av.jpg" alt="Peon Avatar">
              </v-avatar>
              <v-layout align-center justify-space-around wrap=''>
                <v-flex xs12 class="pa-1">
                  <v-text-field v-model="name" value="Suuperman67" label="Enter your name" :disabled="disabled"></v-text-field>
                </v-flex>
              </v-layout>
              <v-spacer></v-spacer>
              <v-layout justify-end>
                <v-flex xs6>
                  <v-btn to="/add" class="body-2 primary--text">Cancel</v-btn>
                  <v-btn color="primary" @click="submit">Submit</v-btn>
                </v-flex>
              </v-layout>
            </v-layout>
          </v-list-tile>
        </v-list>
      </v-divider>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      show1: false,
      success: false,
      sucessMsg: null,
      error: false,
      errorMsg: null,
      disabled: false,
      avatar: null,
      name: "",
      pin: 0
    };
  },
  computed: {
    selectedAvatar() {
      return this.avatar ? true : false;
    },
    heroes() {
      return this.$store.getters.heroes;
    }
  },
  methods: {
    selectAvatar(avatar) {
      this.avatar = avatar;
    },
    submit() {
      this.dialog = true;
      if (this.pin && this.name && this.avatar) {
        if (
          !this.heroes.find(
            x => x.name.toLowerCase() == this.name.toLowerCase()
          )
        ) {
          console.log("Pin not a number: ");
          let h = {
            name: this.name,
            avatar: this.avatar,
            pin: this.pin
          };
          this.$store.dispatch("createHero", h);
          this.success = true;
          this.successMsg = "Cool, creating your hero!";
        } else {
          this.error = true;
          this.errorMsg = "That name is already taken!";
        }
      } else {
        this.error = true;
        this.errorMsg =
          "Please enter all the required information information!";
      }
    }
  },
  watch: {
    success(val) {
      if (val) {
        setTimeout(() => {
          this.success = !this.success;
          this.dialog = false;
          this.$router.replace("/");
        }, 2000);
      }
    },
    error(val) {
      if (val) {
        setTimeout(() => {
          this.error = !this.error;
          this.dialog = false;
        }, 2000);
      }
    }
  }
};
</script>
