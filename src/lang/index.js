import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'  //本地缓存
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: getLanguage(),  //默认
  messages: {
    'en': {
        ...enLocale,
        ...elementEnLocale
    },
    'zh': {
        ...zhLocale,
        ...elementZhLocale
    }
  }
})

export function getLanguage() {
    const chooseLanguage = Cookies.get('language');
    console.log('语言是' + chooseLanguage)
    if (chooseLanguage) return chooseLanguage
  
    // if has not choose language
    const language = (navigator.language || navigator.browserLanguage).toLowerCase()
    //  Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。
    //  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    //  var anObj = { 100: 'a', 2: 'b', 7: 'c' };
    //  console.log(Object.keys(anObj)); // console: ['2', '7', '100']
    const locales = Object.keys(language)
    // console.log(locales) // ["0", "1", "2", "3", "4"]
    // var obj = {a:1, b:2, c:3};
    // for (var prop in obj) {   //prop返回的是属性名
    //    console.log("obj." + prop + " = " + obj[prop]);
    // }
    // Output:
    // "obj.a = 1"
    // "obj.b = 2"
    // "obj.c = 3"

    // let iterable = [10, 20, 30];
    // for (const value of iterable) {   // value 返回的是属性值
    //     console.log(value);
    // }
    // 10
    // 20
    // 30
   
    for (const locale of locales) {
      if (language.indexOf(locale) > -1) {
        return locale
      }
    }
    return 'zh'
  }

export default i18n