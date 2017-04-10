<template>
  <div id="app" class="container-fluid">
    <h1 v-if="$store.state.currentQuestion === 0" class="text-center">Get Started With Podcasting</h1>
    <button v-if="$store.state.currentQuestion === 0" class="btn btn-success btn-lg center-block"
        v-on:click="$store.commit('nextQuestion')"
    >
        Start
    </button>

    <h1 v-if="$store.state.currentQuestion === $store.state.questionsData.length + 1" class="text-center">Get Your Results</h1>
    <button v-if="$store.state.currentQuestion === 3" class="btn btn-success btn-lg center-block"
        v-on:click="$store.commit('startOver')"
    >
        Get Results (Restart)
    </button>


    <div class="row">
      <div class="questions col-sm-9">

        <questions></questions>

      </div>

      <div class="info col-sm-3">
        <template v-if="$store.state.startingBudget >= 0">
          <h3>Starting Budget:</h3> {{ startingBudget}}<br>
          <h3>Remaning Budget:</h3> {{ RemainingBudget}}<br>
          <h3>Spent Budget:</h3> {{ spentBudget}}<br>
          <h3>Monthly Cost:</h3> {{ monthlyCost}}<br>
          <button v-if="$store.state.currentQuestion >= 1">
              View Full Details
          </button>
        </template>

        <template v-else>
          <p>Will Populate when Budget is set</p>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
import Questions from './components/Questions'

export default {
  name: 'app',
  components: {
    Questions
  }
}
</script>

<style>

</style>
