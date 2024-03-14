<!-- components/HelloWorld.vue -->
<template>
    <div class="hello-world-container">
        <div class="greeting">
            <h1>Hello, World!</h1>
            <p>Welcome to the Vue 3 + Vite + Element project!</p>
            <button @click="handleClick">Click Me</button>
            <p v-if="message">{{ message }}</p>
        </div>
        <div class="features">
            <h2>Features</h2>
            <ul>
                <li v-for="feature in features" :key="feature">
                    {{ feature }}
                </li>
            </ul>
        </div>
        <div class="about">
            <h2>About</h2>
            <p>
                This is a simple Vue 3 application built with Vite and Element
                UI.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");
const features = ref([
    "Fast development with Vite",
    "Reactive with Vue 3 Composition API",
    "Styled with Element UI",
]);

function handleClick() {
    message.value = "Thank you for clicking!";
    setTimeout(() => {
        message.value = "";
    }, 2000);
}
</script>

<style scoped>
.hello-world-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.greeting {
    text-align: center;
    margin-bottom: 30px;
}

.greeting h1 {
    color: #333;
    margin-bottom: 10px;
}

.greeting p {
    color: #666;
    font-size: 16px;
    margin-bottom: 20px;
}

button {
    background-color: #409eff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #66b1ff;
}

.features {
    margin-bottom: 30px;
}

.features h2 {
    color: #333;
    margin-bottom: 10px;
}

.features ul {
    list-style: none;
    padding: 0;
}

.features li {
    color: #555;
    margin-bottom: 5px;
}

.about {
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 5px;
}

.about h2 {
    color: #333;
    margin-bottom: 10px;
}

.about p {
    color: #666;
    font-size: 16px;
}
</style>
