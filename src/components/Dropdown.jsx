import { useState, useEffect } from "react";

export default function Dropdown({
    filterName,
    filterList,
    onSelection,
    defaultItem = "Todas",
}) {
    const [optSelected, setOptSelected] = useState("all");

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setOptSelected(value);
    };

    useEffect(() => {
        onSelection(optSelected);
    }, [optSelected]);

    return (
        <div className=" grid grid-cols-4">
            <label
                htmlFor={filterName}
                className="text-base flex items-center w-24"
            >
                {filterName}:
            </label>
            <select
                id={filterName}
                className="block p-1 mt-1 border border-neutral-950 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-44"
                onChange={handleSelectChange}
                value={optSelected}
            >
                <option value="all">{defaultItem}</option>
                {filterList.map((opt, id) => (
                    <option key={id} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}
