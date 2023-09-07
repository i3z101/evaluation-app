import {FC} from 'react'
import { Form } from 'react-bootstrap'


const YesNoQuestion: FC<{label: string, name: string, onChange: (e: any)=> void}> = ({label, name, onChange})=> {
    return <div className='row'>
    <Form.Label className='col-lg-10'>- {label}</Form.Label>
    <Form.Check 
        type='radio'
        label= "نعم"
        value="YES"
        name = {name}
        onChange={onChange}
        className='col-lg-1'
        reverse
    />
    <Form.Check
        type='radio'
        label= "لا"
        value="NO"
        name = {name}
        onChange={onChange}
        className='col-lg-1'
        reverse
    />
</div>
}


export default YesNoQuestion