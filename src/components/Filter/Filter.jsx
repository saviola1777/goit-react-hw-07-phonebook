import css from 'components/Filter/Filter.module.css'

 import { useDispatch} from "react-redux";
 import { setFilter } from "Redux/Filter/filter-slice"
const Filter=()=>{

  const dispatch =useDispatch()
  const onHendleFilter = ({ target }) => {
    const action= setFilter(target.value)
    dispatch(action)
    console.log(action)
  }
  return  (
<div className={css.filterWrapper}>
			<label className={css.label}>Find contacts by name
			<input className={css.input} type='text' name='filter' onChange={onHendleFilter}/>
      </label>
      
		</div>

  )
}

export default Filter