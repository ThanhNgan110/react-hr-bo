import Button from "../../components/atoms/button/button"
import AccessControl from "../../components/organisms/AccessControl"

function List() {
  return (
    <>
      thius is employye list
      <br />
      
      <AccessControl resource="/employee/action/create">
        <Button>Create</Button>
      </AccessControl>

      <Button>Update</Button>
      <Button>Delete</Button>
      <Button>Read</Button>
    </>
  )
}

export default List