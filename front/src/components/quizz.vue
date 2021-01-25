<template>
  <div>
    <h1>quizz</h1>
    <div v-bind:key="quiz._id" v-for="quiz in quizz">
        <h3>{{quiz.title}}</h3> 
        <h4>{{quiz.question}}</h4>
        <div v-for="(tag, index) in splitJoin(quiz.suggestion)" :key="index">
			<button @click="checkAnswer(tag, quiz.answer)">{{tag}}</button>
        </div>
    </div>      
  </div>
</template>

<script>
export default {
    name: "Quizz",
	props: ["quizz"],
	data() {
		return({
			index: 0
		})
	},
    methods: {
		splitJoin(theText) {
			return theText.split(',');
		},

		checkAnswer(res, answer) {
			if (res === answer) {
				alert('correct')
			} else {
				alert ('NO!! the correct anwser was : ' + answer)
			}
		}
    }
}
</script>

<style scoped>

button {
	padding: 10px;
	width: 300px;
	background-color: blue;
	color: cornsilk;
	font-size: 24px;
}

</style>>
