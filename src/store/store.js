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
          state.answersData[payload.questionIndex] = payload.optionInfo
          console.log(payload)
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
                state.currentQuestion = 0;
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

