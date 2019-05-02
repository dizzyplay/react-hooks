import React, {useState} from 'react';

interface Person {
  firstName: string
  lastName: string
}

const App: React.FC = () => {
  const [people, setPeople] = useState([
    {
      firstName: 'johne',
      lastName: 'Doe'
    }, {
      firstName: 'jain',
      lastName: 'vo'
    }
  ])
  const [person, setPerson] = useState<Person>({firstName: "", lastName: ""})
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPerson({...person,
      [e.target.name]: e.target.value
    } as { [K in keyof Person]: Person[K] })
  };

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (person.firstName.trim() === '' || person.lastName.trim()==='') return;
    const newPerson ={
      firstName:person.firstName.trim(),
      lastName:person.lastName.trim()
    }
    setPeople([...people,newPerson])
    setPerson({firstName:"",lastName:""})
  }
  return (
    <div className="container">
      <div className={'row'}>
        <div className={'col'}>
          <h2>hello world</h2>
          <hr/>
          <form onSubmit={onSubmit}>
            <div className={'form-group'}>
              <input type={'text'} onChange={onChange} className={'form-control'} name={'firstName'}
                     value={person.firstName} placeholder={'First Name..'}/>
            </div>
            <div className="form-group">
              <input type={'text'} onChange={onChange} className={'form-control'} name={'lastName'}
                     value={person.lastName} placeholder={'Last Name..'}/>
            </div>
            <button className={'btn btn-success'} type={'submit'}>Add person</button>
          </form>
        </div>
        <div className="col">
          <h2>People</h2>
          {people.map(p => (<div key={Math.random() * 10000000}><p>{p.firstName} {p.lastName}</p></div>))}
        </div>
      </div>
    </div>
  )
}

export default App;
