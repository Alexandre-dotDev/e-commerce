
interface MultiSelectProps {
    placeholder: string,
    collections: CollectionType[],
    value: string[],
    onChange: (value: string) => void,
    onRemove: (value: string) => void,
}

const MultiSelect: React.FC<MultiSelectProps> = ({
    placeholder,
    collections,
    value,
    onChange,
    onRemove,

}) => {



    return (
        <div>

        </div>
    )
}

export default MultiSelect