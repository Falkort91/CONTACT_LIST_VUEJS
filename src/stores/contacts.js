import {ref,reactive,computed} from 'vue';
import DB from '../services/DB';

const edit =ref(null);
const searchValue=ref('');

const sortSettings =reactive({
    key:null,
    isAsc: true
});

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

const contactCount = computed(()=>{
    return contacts.length
}) 

const filteredContacts = computed (()=>{
    let contactsFiltered = contacts;
    if(searchValue.value){
        const filter = searchValue.value.toLowerCase();
        contactsFiltered=contactsFiltered.filter(contact => 
            contact.firstname.toLowerCase().includes(filter)||
            contact.lastname.toLowerCase().includes(filter)||
            contact.email.toLowerCase().includes(filter));
    }

    if(sortSettings.key){
        contactsFiltered = contactsFiltered.sort((a,b)=>{
            let valA = a[sortSettings.key].toLowerCase();
            let valB = b[sortSettings.key].toLowerCase();

            if (valA < valB) return sortSettings.isAsc ? -1 : 1;
            if (valB < valA) return sortSettings.isAsc ? 1 : -1;
            return 0;
        });
    }
    return contactsFiltered;
    
});

const toggleSort = (key)=>{
    key=key.toLowerCase();
    if(sortSettings.key === key){
        sortSettings.isAsc = !sortSettings.isAsc;
    }else{
        sortSettings.key=key;
        sortSettings.isAsc=true;
    }
}

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
    edit,
    contactCount,
    searchValue,
    filteredContacts,
    toggleSort
});