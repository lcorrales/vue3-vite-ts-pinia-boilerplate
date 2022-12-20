<script lang="ts">
import { usePokemonStore } from "@/store/modules/pokemon";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useQuery } from "vue-query";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetcher = async (): Promise<Todo[]> =>
    await fetch("https://jsonplaceholder.typicode.com/todos").then((response) => response.json());

export default defineComponent({
    name: "Todo-List",
    setup() {
        const pokemon = usePokemonStore();
        const { pokemonsName } = storeToRefs(pokemon);
        const { isLoading, isError, isFetching, data, error, refetch } = useQuery("todos", fetcher);
        return { pokemonsName, isLoading, isError, isFetching, data, error, refetch };
    },
});
</script>

<template>
    <h3>About page</h3>
    <p>Pokemons list</p>
    <div>
        {{ pokemonsName }}
    </div>

    <p>
        Turn on <strong>network throttling</strong> in dev-tools and press Refetch
    </p>
    <button :disabled="isFetching">
        {{ isFetching ? "Refetching..." : "Refetch" }}
    </button>
    <h2>TODO list</h2>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">An error has occurred: {{ error }}</div>
    <div v-else-if="data">
    <ul>
        <li v-for="item in data" :key="item.id">
            {{ item.completed ? "🗹" : "☐" }} {{ item.title }}
        </li>
    </ul>
    </div>
</template>