import api from "../plugins/api";

export default {
  state: {
    users: [
      {
        id: 1,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        divider: true, 
        inset: true,
        score: 30,
        country: 'russia',
        address: 'Москва'
      },
      {
        id: 2,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        divider: true, 
        inset: true,
        score: 30,
        country: 'russia',
        address: 'Санкт-Петербург'
      },
      {
        id: 3,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        divider: true, 
        inset: true,
        score: 30,
        country: 'usa',
        address: 'Сочи'
      },
      {
        id: 4,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        divider: true, 
        inset: true,
        score: 5,
        country: 'russia',
        address: 'Краснодар'
      },
      {
        id: 5,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        divider: true, 
        inset: true,
        score: 5,
        country: 'russia',
        address: 'Томск'
      },
    ] as Users,
    users_filter: [
      {
        id: 1,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        divider: true, 
        inset: true,
        score: 30,
        country: 'russia',
        address: 'Москва'
      },
      {
        id: 2,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        divider: true, 
        inset: true,
        score: 30,
        country: 'russia',
        address: 'Санкт-Петербург'
      },
      {
        id: 3,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        divider: true, 
        inset: true,
        score: 30,
        country: 'usa',
        address: 'Сочи'
      },
      {
        id: 4,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        divider: true, 
        inset: true,
        score: 5,
        country: 'russia',
        address: 'Краснодар'
      },
      {
        id: 5,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        divider: true, 
        inset: true,
        score: 5,
        country: 'russia',
        address: 'Томск'
      },
    ] as Users,
    filter_by_score: ['> 20', '< 10',],
    current_filter_by_score: null,
    filter_by_country: ['russia', 'usa'],
    current_filter_by_country: null,
    current_user: {},
  },
  mutations: {
    Filters (state: UserState) {
      if(state.current_filter_by_score?.includes('>') && state.current_filter_by_country !== null){
        state.users_filter = state.users.filter((user)=> (user.score > Number(state!.current_filter_by_score?.split(' ')[1]) && user.country.localeCompare(state.current_filter_by_country !== null ? state.current_filter_by_country : '') === 0))
      }else if(state.current_filter_by_score?.includes('<') && state.current_filter_by_country !== null){
        state.users_filter = state.users.filter((user)=> (user.score < Number(state!.current_filter_by_score?.split(' ')[1]) && user.country.localeCompare(state.current_filter_by_country !== null ? state.current_filter_by_country : '') === 0))
      }else if(state.current_filter_by_score?.includes('>') && state.current_filter_by_country === null) {
        state.users_filter = state.users.filter((user)=> user.score > Number(state!.current_filter_by_score?.split(' ')[1]))
      }else if(state.current_filter_by_score?.includes('<') && state.current_filter_by_country === null){
        state.users_filter = state.users.filter((user)=> user.score < Number(state!.current_filter_by_score?.split(' ')[1]))
      }else if(!state.current_filter_by_score?.includes('<') && state.current_filter_by_country !== null){
        state.users_filter = state.users.filter((user)=> user.country.localeCompare(state.current_filter_by_country !== null ? state.current_filter_by_country : '') === 0)
      }
      else{
        state.users_filter = state.users
      }
    },
    setCurrentUser (state: UserState, action: Users[0]) {
      state.current_user = action
    }
  },
  getters: {
  },
  actions: {
    getUsers({
     state
    }:{state: UserState}) {
    api.get(`users/`).then((response: ResponseUsers)=>{
      console.log(response);
      if(response.status < 400) {
        state.users = response.data
        state.users_filter = response.data
      }
    })
    },
  },
  modules: {
  },
  namespaced: true,
}
type ResponseUsers = {
  status: number,
  data: Users
}
export type UserState = {
  users: Users
  users_filter: Users
  filter_by_score: Array<string>
  current_filter_by_score: string | null
  filter_by_country: Array<string>
  current_filter_by_country: string | null,
  current_user: Users[0]
}
export type Users = Array<{
  id: number,
  avatar: string,
  title: string,
  subtitle: string,
  divider: boolean, 
  inset: boolean,
  score: number,
  country: string,
  address: string
}>