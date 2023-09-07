import { FC } from "react";

export const SectionTitle: FC<{title: string, sectionNumber: number}> = ({title, sectionNumber}) => {
    return <h3 className="section_title mt-4">{sectionNumber}.{title}</h3>
}

export const Divider: FC = () => {
    return <hr className="divider"/>
}