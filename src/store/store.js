import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Firebase from 'firebase'
import firebaseConfig from '../config/firebaseConfig.js'

var app = Firebase.initializeApp(firebaseConfig)
let db = app.database()
var questionsDataRef = db.ref('questions')

import { firebaseAction } from 'vuexfire'
import { firebaseMutations } from 'vuexfire'

const store = new Vuex.Store({
    state: {
        currentQuestion: 0,

        startingBudget: 'Not Set',
        remainingBudget: 'Not Set',
        spentBudget: 'Not Set',
        monthlyCost: 0,

        questionsData: [],

        answersData: []
    },

    mutations: {

        selectOption(state, payload) {

          // adds the option number to the passed object to answersData, so we can toggle is-selected by whether the index matches the selection
          payload.optionInfo.optionNumber = payload.optionIndex + 1

          /**
           * Set like this so that Vue recognizes the update to the array value - array caveats: https://vuejs.org/v2/guide/list.html#Caveats
           */
          Vue.set(state.answersData, payload.questionIndex, payload.optionInfo)
        },

        nextQuestion(state) {
            state.currentQuestion++
        },

        previousQuestion(state) {
            state.currentQuestion--
        },

        startOver(state) {
            var reset = confirm(`Are you sure you want to start over? This will erase all of the answers you've done so far.`)

            if (reset) {
                state.currentQuestion = 0
                state.answersData = []
            }
        },

        ...firebaseMutations
    },

    getters: {
      questionsData: state => state.questionsData
    },

    actions: {
      setQuestionsDataRef: firebaseAction(({ bindFirebaseRef }, ref) => {
        bindFirebaseRef('questionsData', ref)
      })
    }
})


export { store, questionsDataRef }

