<template>
  <div>
    <button @click="clicked($event)">Clickeame</button>
    <ul>
      <CommentItem
        @say-good-bye="clicked($event)"
        v-bind="comments"
        :id="index"
        v-for="(comments, index) in CommentsData"
        :key="index"
      />
    </ul>
    <!-- <input @input="validation()" type="number" v-model="age" />
    {{ age }} -->
    <input type="number" v-model="age" />

    <span v-if="validation">{{ age }}</span>

    <input type="number" v-model="dolars" />
    {{ dolars }}
    {{ total }}
  </div>
</template>
<!-- @say-good-bye="Good($event)" -->
<!-- @say-Vue="clicked($event)" -->

<!-- //Options api
<script lang="ts">
import { defineComponent } from 'vue'
import CommentsData from '@/data/CommentsData'
import CommentItem from './CommentItem.vue'
export default defineComponent({
  name: 'CommentList',
  setup() {
    // const clicked = (event: any) => {
    //   alert('Seleccionaste el ' + event)
    //   alert('SayGoodBye')
    // }
  },
  methods: {
    clicked(event: any) {
      console.log(event)
      alert('Seleccionaste el ' + event)
      alert('SayGoodBye')
    }
  },
  data() {
    return {
      CommentsData,
      CommentItem
    }
  },
  components: {
    CommentItem
  },
  onBeforeMount() {},
  onMounted() {
    console.log('despues de')
  },
  beforeCreate() {},
  created() {}
})
</script> -->

Composition api
<script setup lang="ts">
import CommentsData from '@/data/CommentsData'
import CommentItem from './CommentItem.vue'
import { ref, computed } from 'vue'

// const name = ref('')
const age = ref(0)
const dolars = ref(0)

const validation = computed(() => age.value > 18)
const total = computed(() => dolars.value - 2)

const clicked = (event: any) => {
  alert('Seleccionaste el ' + event)
  alert('SayGoodBye')
}

// const validation = (): String => {
//   if (age.value > 0) {
//     console.log('Si')

//     return 'si'
//   } else {
//     console.log('No')
//     return 'no'
//   }
// }
</script>

<!-- const validation = (): String => {
  if (name.value.length > 0) {
    console.log('Si')

    return 'si'
  } else {
    console.log('No')
    return 'no'
  }
} -->

<!-- const clicked = (event: any) => { 
   alert('Seleccionaste el ' + event) 
   alert('SayGoodBye') 
} -->

<style scoped></style>

<!-- <CommentItem 
     :id="comments.id"
     :author="comments.author"
     :body="comments.body"
     :date="comments.date"v-for="comments in CommentsData">
     <template #icon?>
         <div>

         </div>
     </template>
     <h1>
         {{ comments.title }}
    </h1>
 </CommentItem> -->
