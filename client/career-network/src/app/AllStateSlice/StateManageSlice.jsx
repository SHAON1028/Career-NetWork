import { createSlice } from "@reduxjs/toolkit";


const StateMenageSlice = createSlice({
    name:"stateManagment",
    initialState:{
        menu:true,
        them:false,
    },
    reducers:({
        setMenu:(state)=>{
            state.menu = !state.menu
        },
        setOnlyMenuTrue:(state)=>{
            state.menu = true
        },
        onSetTheme:(state,action)=>{
            state.them = !state.them;
            if(state.them === true ){
                document.documentElement.classList.add("dark")
            }else{
                document.documentElement.classList.remove("dark")
            }
        }
    })
})

const {reducer,actions}=StateMenageSlice
export const { setMenu,setOnlyMenuTrue,onSetTheme }=actions
export default reducer