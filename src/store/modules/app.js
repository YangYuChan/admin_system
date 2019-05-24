import Cookies from 'js-cookie'
import { getLanguage } from '@/lang/index'
const state = {
    language: getLanguage(),   // getLanguage 是 lang/index 获取语音的方法
}
const mutations = {
    SET_LANGUAGE: (state, language) => {   //设置语音
        state.language = language
        Cookies.set('language', language)
    },
}
const actions = {
    setLanguage({ commit }, language) {  //当前设置的语音版本保存到后台
        commit('SET_LANGUAGE', language)
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
  }