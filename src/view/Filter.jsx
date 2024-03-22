import { useRef } from "react"


export function Filter({list , onFilter}) {
    const myinput = useRef(null);
    const num = useRef(-1);

    function onChange() {
        const txt = myinput.current.value;

        const filtered = list.filter((item) => {
            return item.first_name.toLowerCase().includes(txt.toLowerCase());
        })
        num.current = filtered.length;
        onFilter(filtered)
    }
    
    return(
        <div className="header">
            <h4 className="filter_title">{num.current !== -1 ? num.current : list.length} items filtered</h4>
            <input ref={myinput} className="filter" onChange={onChange}/>
        </div>
    )
}