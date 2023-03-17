import {useState} from 'react';

function InputExample() {
    // const [name, setName] = useState("jack");
    // const [surname, setSurname] = useState("doe");

    // const onChangeName = (event) => setName(event.target.value);
    // const onChangeSurname = (event) => setSurname(event.target.value);

    // return (
    //     <div>
    //         Please Enter a name <br/>
    //         <input value={name} onChange={onChangeName} />
    //         <br/>
    //         {name}
    //         <br/>

    //         Please Enter a surname <br/>
    //         <input value={surname} onChange={onChangeSurname} />
    //         <br/>
    //         {surname}
    //         <br/>
            
    //     </div>
    // )

    const [form, setForm] = useState({name:"", surname:""});
    const onChangeInput = (event) => {
        setForm({...form, [event.target.name] : event.target.value});
    }
    return (
        <div>
            Please Enter a name <br/>
            <input name="name" value={form.name} onChange={onChangeInput} />
            <br/>
            {form.name}
            <br/>

            Please Enter a surname <br/>
            <input name="surname" value={form.surname} onChange={onChangeInput} />
            <br/>
            {form.surname}
            <br/>
            
        </div>
    )
}

export default InputExample