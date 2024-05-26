<template>
  <div :style="{ color: randomColor }" class="card quotes">
    <p>{{ randomQuote }}</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      randomQuote: "",
      randomColor: "#000000", // Default color
      intervalId: null
    };
  },
  methods: {
    fetchRandomQuote() {
      fetch("https://api.quotable.io/random")
          .then(response => response.json())
          .then(data => {
            this.randomQuote = `${data.content} - ${data.author}`;
            this.randomColor = this.getRandomColor();
          })
          .catch(error => {
            console.error("Error fetching quote:", error);
          });
    },
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  },
  mounted() {
    this.fetchRandomQuote();
    this.intervalId = setInterval(() => {
      this.fetchRandomQuote();
    }, 10000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
.quotes {
  background-color: #262626;
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  max-width: 73%;
  margin: auto;
}
</style>
