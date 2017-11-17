<template>
    <li>
        <router-link :to="'/roomList/' + game.cate_id + '/' + game.game_name">
            <!-- <img :src="game.game_icon" alt=""> -->
            <p>{{ game.game_name }}</p>
        </router-link>
    </li>
</template>
<script>
export default {
  props: ['game']
}
</script>
<style scoped>
li {
    flex-basis:25%;
    border-right:1px solid #ccc;
    border-bottom:1px solid #ccc;
    text-align: center;
    padding:20px 0;
}

li:nth-child(4n) {
    border-right: none;
}
/* li p {
    margin-top: 10px;
} */
</style>
