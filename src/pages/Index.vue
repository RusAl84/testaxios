
<template>
  <q-page class="flex flex-center">
     <q-input v-model="userName" outlined></q-input>
      <q-card>
        <q-card v-if="ezh.length>2">
          <h3>Ёжик</h3>
          {{ezh}}
        </q-card>
        <q-card>
          <q-input v-model="ezh" dense outlined></q-input>
        </q-card>
      </q-card >
      <q-card class="full-width">
          <q-card-actions>
            <q-btn @click="sendBtnAll()">
            все посты
            </q-btn>
          </q-card-actions>
           <q-card-actions>

        <q-input v-model="id"></q-input>
        <q-btn @click="sendBtn()">
           выбрать пост
        </q-btn>
      </q-card-actions>
      <q-card-actions>
        <q-input v-model="ptitle"></q-input>
        <q-input v-model="pbody" outlined dense></q-input>
        <q-btn @click="sendBtnAdd(ptitle, pbody)">
           добавить пост
        </q-btn>
      </q-card-actions>
          <q-card-section 
                v-for="(post, i) in posts"
                :key="i">
              <q-card-section>
                <h5>{{post.title}}</h5>
              </q-card-section>
                <q-card-section>
                  {{post.body}}
                </q-card-section>
          </q-card-section>

      </q-card>
  </q-page>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import api from "../api/api"
import { useStore } from 'vuex'


export default defineComponent({
  name: 'PageIndex',
  setup(){
    let ezh = ref("")
    let id = ref(3)
    const posts = ref([])
    let ptitle = ref("title")
    let pbody = ref("body")
    const $store = useStore()
    const userName = computed({
      get: () => $store.state.mes.userName,
      set: val => {
        $store.commit('mes/updateUserNameState', val)
      }
      }) 
    return{
      ezh, posts, id, ptitle, pbody,userName
    }
  },
  methods:{
  async sendBtnAll(){
      try{
        this.posts =  await api.getPosts()   
      }catch (e) 
      {
        console.log(e)
      }
    },
  async sendBtn(){
      try{   
        this.posts=[]
        this.posts.push(await api.getPost(this.id))
      }catch (e) 
      {
        console.log(e)
      }
    },
  async sendBtnAdd(){
      try{   
        await api.addPost(this.ptitle, this.pbody)
      }catch (e) 
      {
        console.log(e)
      }
    },
  }
})
</script>
