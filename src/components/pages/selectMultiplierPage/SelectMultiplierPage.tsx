import React from "react";
import Header from "../../header";
import SelectMultiplierList from './selectMultiplierList'

export default function SelectMultiplierPage(): React.JSX.Element {
   const title: React.JSX.Element = <h1>Выбери множитель</h1>

   return (
      <>
         <Header title={title} />
         <SelectMultiplierList />
      </>
   )
}
