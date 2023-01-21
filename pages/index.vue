<template>
    <div>
        <h1>Dall-e Openai</h1>
        <br>
        <textarea v-model="text" cols="30" rows="10" placeholder="Enter here the prompt of your image"></textarea>
        <br>
        <button @click="gpt3()">Generate</button>
        <br>
        <h2>Results: </h2>
        <br>
        <h5>{{ results }}</h5>
        <img v-if="results" :src="results.data[0].url">
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //Here we declare variables
                text: "",
                results: ""
            };
        },
        methods: {
            gpt3() {
                fetch("api/gpt3" , {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        textGPT: this.text,
                    }),
                })
                    .then((response) => response.json())
                    .then((imageBACK) => {
                        console.log(imageBACK)
                        this.results = imageBACK.result;
                    });
            },
        },
    };
</script>