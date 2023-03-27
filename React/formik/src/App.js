import {useFormik} from 'formik';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues : {
      firstName: '',
      lastName: '',
      email: '',
      gender: 'female',
      hobies: [],
      country: "TR",
    },
    onSubmit: values => {
      console.log(values);
    }
  })
  
  return (
    <div className="App">
      <h1>Sıgnup</h1>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input name='firstName' onChange={formik.handleChange}/>
          <br />
          
          <label htmlFor="lastName">Last Name</label>
          <input name='lastName' onChange={formik.handleChange}/>
          <br />
          
          <label htmlFor="email">Email</label>
          <input name='email' onChange={formik.handleChange}/>
          <br />
          
          <span>Male</span>
          <input name='gender' type={'radio'} value="male" checked={formik.values.gender==="male"} onChange={formik.handleChange}/>
          
          <span>Female</span>
          <input name='gender' type={'radio'} value="female" checked={formik.values.gender==="female"} onChange={formik.handleChange}/>
          <br /><br />

          <div>
            Football
          <input type="checkbox" name="hobies" value={"football"} onChange={formik.handleChange}/>
          </div>
          <div>
            Basketball
          <input type="checkbox" name="hobies" value={"basketball"} onChange={formik.handleChange}/>
          </div>
          <div>
            Music
          <input  type="checkbox" name="hobies" value={"music"} onChange={formik.handleChange}/>
          </div>
          <br /><br />
          <select name="country" value={formik.values.country} onChange={formik.handleChange}>
            <option defaultChecked={formik.values.country==="TR"} value="TR">Turkey</option>
            <option value="UK">United Kingdom</option>
            <option value="USA">United States of America</option>
          </select>

          <br /><br />
          <button type="submit">Submit</button>
          <br /><br />
          
          <span>{JSON.stringify(formik.values)}</span>
      </form>
        
    </div>
  );
}

export default App;
