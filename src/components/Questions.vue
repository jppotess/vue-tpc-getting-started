

<template>
	<div>
		<div
      v-for="(question, QIndex) in questions" :key="question.number"
      v-if="$store.state.currentQuestion === QIndex + 1"

      class="c-question"
    >
			<h2 class="text-center">{{ question.questionText}}</h2>
			<div class="c-question__optionsContainer">
				<div class="c-question__option"
          v-for="(questionOption, OIndex) in question.options"
          v-on:click="$store.commit('selectOption',
            {
              questionIndex: QIndex,
              optionIndex: OIndex,
              optionInfo: questionOption
            }
          )"
        >
					<h3>{{ questionOption.title }}</h3>
					<p>{{ questionOption.text}}</p>
					<span v-if="questionOption.cost > 0">{{ questionOption.cost }}</span>
				</div>
			</div>
			<div class="c-question__navContainer">
				<button class="btn btn-link"
					v-on:click="$store.commit('startOver')"
				>
					Start Over
				</button>

				<button v-if="question.answered" class="btn btn-success"
					v-on:click="$store.commit('nextQuestion')"
				>
					Continue
				</button>

				<button class="btn btn-link"
					v-on:click="$store.commit('previousQuestion')"
				>
					Previous Question
				</button>
			</div>
		</div>
	</div>
</template>




<script>


export default {
  name: 'questions',
  data: function() {
	  return {
      questions: this.$store.state.questionsData,
      answered: false,
      selectedOptionTitle: '',
      selectedOptionCost: ''
	  }
  },

  computed: {

    questionsTotal: function() {
      return this.questions.length
    }
  },

  created() {
    console.log('hello')
    console.log(this.questions)
    console.log(this.questionsTotal)
  },

  mounted() {
    console.log(this.questionsTotal)
  }


}

</script>

<style>
.questions {

}

.c-question {

}

.info {
    background-color: whitesmoke;
}


.c-question {

}

    .c-question__optionsContainer {
        display: flex;
    }

        .c-question__option {
            flex: 1;
            text-align: center;
            padding: 1em;
        }

    .c-question__navContainer {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

</style>

