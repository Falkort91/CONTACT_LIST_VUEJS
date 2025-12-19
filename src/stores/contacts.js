import {ref,reactive,computed} from 'vue';
import DB from '../services/DB';

const edit =ref('');

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

const editing=(id)=>{
    edit.value = id;
    console.log("EDITING STORE");
    console.table(contacts);
    console.log(edit);
}

const updateContact = async(editedContact) => {
    const response = await DB.updateOne(editedContact);
    edit.value=null;
};


const deleteContact = async (id) => {
   await DB.deleteOneById(id);
    const index = contacts.findIndex( (contact) => 
        contact.id === id
    );
    if( index!=-1){
        contacts.splice(index,1);
    }
}




export const store = reactive({
    contacts,
    init,
    formData,
    createContact,
    updateContact,
    deleteContact,
    editing,
    edit

});