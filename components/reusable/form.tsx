import {FC} from 'react'
import {Form} from 'react-bootstrap'

const ReusableForm: FC<{label: string, name: string, onChange: (e:any)=> void, type?: string, required?: boolean, value?: string, isFile?: boolean}> = ({label, name, onChange, type, required, value, isFile}) => {
    return <Form.Group className='mt-4 mb-4'>
    <Form.Label>{label}</Form.Label>
    {
        isFile ? 
        <Form.Control required={required || true} name={name} type={type || "text"} onChange={onChange}/>
        :
        <Form.Control value={value || ''} required={required || true} name={name} type={type || "text"} onChange={onChange}/>
    }
</Form.Group>
}


export default ReusableForm