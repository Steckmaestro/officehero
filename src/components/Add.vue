<template>
  <v-container fluid class='ma-0 pa-0'>
    <v-layout justify-center>
      <v-flex xs12>
        <v-container fluid grid-list-xl>
          <v-layout row wrap=''>
            <v-flex v-for='card in cards' v-bind='{ [`xs${card.flex}`]: true }' :key='card.title'>
              <v-card :to='card.to'>
                <v-card-title>
                  <v-spacer></v-spacer>
                  <span class='title primary--text' v-text='card.title'></span>
                  <v-icon color='orange darken-4' class='ml-1'>{{card.icon}}</v-icon>
                </v-card-title>
                <v-img :src='card.src' height='300px'>
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
    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        cards: [
        { title: 'Add new event', src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8PDxAPDw8PDQ0NDQ8PDQ8PDw0PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFy0dFx0tLS0uLSstKy0tKy0tKy0tKy0tKy0tLSstLS0rKystLSsrKy0rLSsrLS0tLSstLS0tK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABEEAACAQMBBAUJBgMECwAAAAAAAQIDBBESBRMhMQYUQVFhByJScYGRkqHRMpSxwdLwQ1TCFkJToxUjJDREZIOTorLh/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwUEBv/EACURAQEAAgICAQQCAwAAAAAAAAABAhESIQMxUQQTFEEycSJhkf/aAAwDAQACEQMRAD8A8uSHwJDnme2HQSBTDiTTFFEsURpkkWTVJEg0CpINSRKoKKJUiJTQe8RNVDzYqaIpzDpzJUsYDSIVWQ+/QjToIr79BKuibFbWEgiBV0Eq5Nitpw4lfrAusE01rAsFZXAca5NikriOkCqoSmRVQWAkgNQt4SYmhwNYtYgJoZoHWJSAz4EoBRJ4E2noCgRyiWJyK8pBKNA0iGyIpOnCxmwtbJqdJB7s7dscrVQRySJMsU4IsRhEi5HIoqDJYU2XMRDTiTclaVVTZJGiywpItWlCVR6acJ1JYzppwlOWO/CRG1aUFbskjbs247Huuy0u/ulf9JJ/oe7/AJO7+6V/0i7VNfLEVqwurG0ti3n8nefdK/6Q47FvP5O7+61v0k2VW8flh9TkLqUjoY7Iu/5S7+61v0kkdkXX8pdfda36Q1RvH5c2rJhRsmdG9l3K/wCFuvutb9JUctLcZRcZJ4cZJpp9zT5E05qs2Niwups0lWQzqkVcjL6qw42jLjkh9ZFqpFVWgcbNlqnURdg1gm1emfTs2SdVwXdaBnMzpqitwlbEm9CVUi04BWo/VCVVh98TarVRK0RJG0Q++H35OxqnVshOiNvmPvGI5KF0QXbkm8BdQNnqotwhBahw2ennlB8A2RUWHk79ceUaYSkwEEiapJFhoCJLEmqkSQieseQ62869rdijb0ovx8+Uv6TmPJRYqttGOuFKpTpUatSoqqTiuCimk+csyXsye6ULeFNNU406aby1CnGKb7+Bp4sN3kx8+epxWRIjy/SXuFl+l8j0vIlER8e/5C49/wAgCQZgce//AMRm36S+EQEzxfyn0N3tGb5b6jRq+t4cH/6Hsrb9JfCRzpKX2lCT8YJmXlw5zTXxeThlt86ZDibPTSxlRvrmLUUpVHVgoLTHRPisL98UzJhA52U1dOtjdyU6iPJDsGciKuGiWVLgQU+JaUeBnVQoBzSASCwRVSImgooLA6RFPRJD6QooLBFNGohKIaQ+CTBpHSCGFszDNDiEA4EOINh5pTZNArwJIzPpLHExWUEkV1UC1k2L2spkkWU4yZLGoTYqValBNYaPpzYdVVbS0qf4lrbz99OLPlvfM+kvJ3X3myrCXdbRp+2DcP6SvHO6y896jZlRB3JZY2DbjHl2rOj6xtx4ss4ELjBtV6s+9jdVfeWmInhD2qO18TC6cwdPZ9zJS/u049z86pGP5nUM5Hyq1NOzZJc516EPdLV/SRnjJjWnj/nHk8JLtZKqiMrzg4xkeKurKu1KyItZBupEtOhIiqlXLddpZlNIqwpMedNmVXKmjUQWtFVUZBqjIiqlWNSH1IgVFhblmdPadTQ+8RCqLHVFk0029HVQiVFi3TJNI6gO8EqQ+5F0ZtYzmFuhnSF0DahD7ocfRvP40EH1YZVSeFY+h7cYEbUkVmGq47uRdjoo2qC6qArkLrQjP1RH0F0IoxtdmWlOLlOLoqtmTSadVuq48FyTm0j5+6ye89EK+82XZy/5aEPg83+kJdI8k3GxU23Fc4P4v/hD/aKHoS+JfQxb18yhOX1JvmyiJ4sXUPpFT9CXxICXSWn6EviRycp/mQzl483+RnfqM1Tw4uu/tTS9CXxIS6U0/wDDl8S+hxjf5dgov2kX6jyfKvsYO1j0lg/4b+NfQo9KowvrWUZa6aouVwtLT1ONOXBprlxOfoPGF4o09rXG7sbqfb1ecV65LSvxJnmzy6tXPFjLLHnVKjHwLEaMTIp12TK5Y7Xr01FSiSxhEx1cskjcsi1UjUlFCjGJmOu2HCqzO1UjXhCJJuomXCuyTfsztHFfdOIzhEpKqx9bM6qYrmlDaUV1JhZIqtJXgjbQDYJNORJKSGVREUhkSelhzQDkiJsbIHpLqQiIQDTznUSKYDiGkfRuMWthZGwEgOGQaGSHEYkz3PyX1teyKKfOnUuYf50pL5SR5Jsbote3ajKhQk6cuVWbVOljv1PmvVk9V8n9rKwtqtrdTpKpK4nVpKnUclKDpwT5pccpkllNxfv+0zJv8/3k0b+abyhtp28OrW1WMUm3Wp1JJcZS1cM+5mFm9/6LetFsKvaQ3vWY6spbvMXNY45SxyfLj+BiVZJt4WFltLg2l2BVGQzfs7PkZ5ZbknwuTvbZpXNn1OUJQbunnTLQ9WrPmtS7IpY4eDMaH0/fEDV+Rr9FreFSvmpFSp06FWpNSXm4Sxl+8XedkP8AjLVGlLii90gt6lSwrwpQnUm9z5sIucmlUi3wXgmZlFvK9h1+ybmNNQ1PGpuK9iyT45vJp3rp4xu8ZTTTTaaaw01zTQLO68qVjThWo3FPg68ZqqlycoacS9bTx7EcMzXPHV01wy3JTxJIoiTDTM602liiSKIVIOMjOw5ViIaZCpBpmdikqDTIkw0zOxUSJhpkOoWsmw0rY2SPWNKYtGKUgokJNHgTobJobSJzE5oNGQiLWINB5+5C1FfI6Z9FpxNrCYSZWTDTDR7bnRrY1S+uadtSeHLMpzfFU6cftTfvS9bR7Rs7oLYW8IrcwqSXOdVKc5vveeXqRheTDo+7O2le1VitcwShF86dDms+LeH7jR2j0shF6ZPGO3uZllnJ7XMcsvTZ2/tanawUI4TcXnHDCXBL5fM8l2x0jlO5ouLfCtH3cV+Ze6ZdIo3Kio6VoX2srL9Zx2zreVa4pRh52JqTwRcuXd9PRjj9vHU/lXrttcuUVx5pGxsmrCrCpaVJad61OhN8oVscF7fr3mDaW7jFJ9y9hLL949RnjlrthnjKV7bzpSlCcXGUeaeOPiu9eJSm3+/Ub1PbalFU7qkriEeEZNuNWCx2T7QJf6MfnPrkeP2P9U8+36sVwl9X/pTKz3GDDLaSy5SwksZbbeFhHQV49StpUpP/AGq6S3qT40KHHzX4vj733cY1tqhQ/wByt93NpLfVmqlVJ+istL98DFnUlOTnNynKTzKTbbb48RdY+run3l76gqC4r15Ni9sLiurZW7glCc51pVJuKitKSSwm2+L9xz11X0R1Ps4mz0S6RwlQjJvi1mWfS7SPHjLe/T043LGcsfcYnlDtLuG5nUipW9OGhVIS1RVST46uCcc4iuJxLuT1rpLtSnUs7yDksOlUS5fa4OK9+DyRUc9hrdfpO8vdP1gNVwqdv4E0bYmxUtRRrMljVJFQCVEzsaSmjUZLGoxRphaDOxUp1NhbxgqIagRYrYd4xtbJlTH3ZOhyQamJSZM6YlAWhyNDIbkxYExaHJDOTAcmSuItAaPkhyxEugcByee6QowLVls2tVeKdOUvUmdVszoDXm1vGoJ+87lzkcrHC1x0aZ2/QDoVO6rRq14uNtTkpPUsb2S4qK8O87HYXQm1tsSmt7UTzmXH5HYwqwp03jCSTSS4YIuWz6n9qe2LhaXCEox4YSfCPsfYeSdKITTfmvnzTi17zuNt36xLt+TPPdq1k2/Nn7+BjbutcN4yudqJt+d7jpvJs4vaNKMmkpU6sVnHGWnKXyZzleXhgChPS1Ptg1NetPP5Gtm4nfw9/vqCT4YM2aR39WzpVUnKEJaknlxXJ8SlU6P2z/hJepyX4ML4L+nn+9P24SUfVzIp0/Vw+h3MujNt6EvZUn9SN9Fbb0Z/9yf1M79Pmr7+LhXD5Jdo6x4dnsO4XRW1X9x/HL6hLo5arlSj7csn8fM/yMXmW3ZJUpcezvMvoZ0Wu61KdWFWFOE3KVKnOMmpLP2sp8MnfdP7CjSsbiUYQi1Sm00knyOP6LdK4q3pxjhSpwjBwzjGFjKDjw3MvT0+HPnq4+4z9uW1e3mqdZ5ytSw/NbTw160/xM5VUanSXaquHT9JObk+7OEl8jGFJ01yt337WYXAXWyoMmFidtCNyEqxVpB5IsaSrKrBbwrKQSkRYe06mGqjKykGpE2HtZ3rE6xW1DJk8RtYdQF1CPIEmLie0zqPvG3rK7kDrDiNrO8H3hV1j6xcRtY3gitrEHEbem2lpTpLEIRXsJd48kkYZE6KXHJ0dOby37RVKr59xn7Vv0o+a+fOOeKYW0a8lwgsnMbTtp/blLGeccmeV/TbDGXuqm1NoZWG8/ijlru5bzhvHrZ0NxZSkvsSksc1zM2exak3iMJ48UkgxsXljf0wJcX3ssUrVvmuw6my6OaftJZ7fA1aWyV6JVz/AFEzCT27fZHlFtXSpRq0rinONOEZvRCcHJRSbTUs49hqU+m9hL+JNeuhV+h51Kw09gKt8FTz5xn+N469LfTCw7a+P+lW/SRVOm+zlzuP8mv+k8zqJZfgjHvZ8w/Iy+FT6PD5r1mp5RNmKWlV5yk+SjbV3/SDU6f2K5OtL1Usfi0eQ2lFJN4859vaSKD4k36jM59H4/3a7Ppb0qoXtCdvTp1IqrFwc56FhPnwTZyFrsq3Tjqw1HHhkqVbuEODllrklxKc7zPq7if88/bbH7fimsVraEoOrN0liGrzV2cvrkh1EG+Q2+L0xuSw5gxnxK8qo9OfEWhMl+Eh9ZBGohb0ixpyWlIdSKm+EqxPE+S5qCUyoqoSqC4nyW9Q6mVHVI5VxcRyaG8AlMz3cMF3DDgOa5KY2sousxKqw4FzXtYnMpb1i3jDgOa3rEVdTEHEcnse+8SncX2ntMutdvvKNe4Xa+KNrlXnmCa92rJ5xw8TBr3k3LzuTfNskurvml28iorWpUec/RE/203r06PZd5HSk3y4F6Nym8YOXhJUcPUm+UvyHhtfzuYl8dutUo+GQ1g5Z7Ziu3x5gS6Rp9o5UXF09aqu8oXFxHjxOZr7ey3x4GfW2s32j1aXUbda9WWs88mTVr4eWZk67fFvBG6ne8lTxn91oPaDWdPNsqVa1Sf2pP1LggI1EHGoipjIm5W/tGqAcaBKqyCVdFJ0BWxJGzChdInjdoSppFGyDVmSq9QuuoVippH1YdWpIrtDO8QlahlaBxswVeoLrxOj6H1RAToYGd8RSuxaPcKdMjdIZ3A3WBaLcE6ALoDO5AdyPVTdD3ISpFd3IMroONTuJpIeKKW+bJoSYXESriiIhTY5Oj26CrtDxKda+72c/Wvn3lOpct9ptPGyvkbtxteK5cWU57bqPhHgZLYUC544nnVmVebzmT48wN5LvYKYitQbqTey7WJSYCQSQag2NBpARYeQOUpLgQE0mV2wg2lQcSOLCTFVQbGGbG1C0VowkyPI6YhKPI6YGRZA0qkPqIsjZAbTKQ+og1BKQtHMkjkDqAbAyGi2kchaiJsSkGhySOQDkC2C2Ghs7YDYzYOSpE1PSL1CBRty9rSRGUOLOUIzJXPEcXFe4yXNhwEI9VeSJEGkIRK4cdDiEo6DQhADjCEIGmyFMQhhLEJDCEqE2MIQJp0x9QhAcLWNrEIWgWsWoQg0DqQWRCFYZNg5EICC2JMQgMzYMmIQ4VRseKEIok1OWBq1wIQpOxtX3ghCL0W3/9k=', flex: 6, icon: 'mdi-calendar-plus', to: 'event'},
        { title: 'Add new hero', src: 'http://www.blogquail.com/wp-content/uploads/2016/03/office-hero.jpg', flex: 6, icon: 'fas fa-user-plus', to: '/hero' }
      ]
      }
    }
  }
</script>