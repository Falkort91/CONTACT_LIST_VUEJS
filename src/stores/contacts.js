import {reactive,computed} from 'vue';
import DB from '../services/DB';

const formData=reactive({
    firstname:"",
    lastname:"",
    email:""
})

const contacts=reactive([]);

const isCompleted = computed(() => {
    if(formData.firstname && formData.lastname && formData.email){
        return true;
    }else{
        return false;
    }
})

const resetInputs = () =>{
    formData.firstname="";
    formData.lastname="";
    formData.email="";
}

const init = async (url) => {
    DB.setApiURL(url);
    contacts.splice(0,contacts.length,...(await DB.findAll()));
}

const createContact = async()=>{

   if(isCompleted.value){
    const newContact = await DB.create(formData);
    contacts.push(newContact);
    resetInputs();
    console.table(contacts);
   }else{
    alert("Remplissez tout les champs pour ajouter un contact")
    resetInputs();
   }
};



export const store = reactive({
    init,
    formData,
    createContact
});