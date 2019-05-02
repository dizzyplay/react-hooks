import React, {useState} from 'react';

interface Props {
  addPerson:(args:Person)=>void
}

const Form = (props:Props) => {

  const [person, setPerson] = useState<Person>({firstName: "", lastName: ""})
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    } as { [K in keyof Person]: Person[K] })
  };

  const onSubmit = (e: any) => {
    e.preventDefault()
    if (person.firstName.trim() === '' || person.lastName.trim() === '') return;
    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim()
    }
    props.addPerson(newPerson)
    setPerson({firstName: "", lastName: ""})
  }
  return (
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
    </div>)
};

export default Form;