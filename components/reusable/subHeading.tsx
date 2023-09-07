import {FC} from 'react'
const SubHeading: FC<{subHeading: string}> = ({subHeading}) => {
    return <h5 className='mt-4'>{subHeading}</h5>
}

export default SubHeading