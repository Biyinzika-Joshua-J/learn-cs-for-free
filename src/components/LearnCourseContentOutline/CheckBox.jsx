import React, {useState} from 'react'

const CheckBox = () => {
    const [check, setCheck] = useState(false);
    function handleChecked() {
        setCheck((prev) => !prev);
      }
  return (
    <label>
         <input
              type="checkbox"
              className="accent-slate-900"
              checked={check}
              onChange={handleChecked}
            />
    </label>
  )
}

export default CheckBox