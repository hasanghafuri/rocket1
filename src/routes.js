import Home from "./views/Home"
import Login from "./views/Login"
import Signin from "./views/Signin"
import HeroSectionRedirect from "./views/HeroSectionRedirect"
import CardSingle from "./views/CardSingle"
import CheckBox from "./views/CheckBox"
import list from "./views/list"
import profail from "./views/profail"

export default [
    { path: '/', component: Home },
    { path: '/Login', component: Login },
    { path: '/Signin', component: Signin },
    { path: "/HeroSectionRedirect", component: HeroSectionRedirect },
    { path: "/CardSingle/:id,", name: 'CardSinglePageRoute', component: CardSingle },
    { path: "/CheckBox", component: CheckBox },
    { path: "/list", component: list },
    { path: "/profail", component: profail }
]

