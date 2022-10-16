import Header from "components/Header/Header"
import { LabelInput } from "components/LabelInput/LabelInput"
import { useState } from "react";



export const Categories = () => {
    const [category, setCategory] = useState('');

    const onInput = (event) => {
        setCategory(event.currentTarget.value);
}


    return (
      <div>
        <Header />
        <ul>
          <li>
            <span>Title</span>
            <button type="button">Delete</button>
          </li>
        </ul>
        <form>
          <label>
            <LabelInput
              type={'text'}
              name={'category'}
              placeholder={'Введіть категорію'}
              value={category}
              onChange={onInput}
            />
          </label>
        </form>
      </div>
    );
}