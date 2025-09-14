import Button from "../../components/atoms/button/button";
import AccessControl from "../../components/organisms/AccessControl";
import { httpRequest } from "../../services/initRequest";

function Dashboard() {

  async function getUser() {
    try {
      const data = await httpRequest('/api/auth', {
        method: 'POST',
      });
      console.log("get user: ", data)
    } catch (err: any) {
      console.error('fail get user')
    }
  }

  return (
    <>
      thius is dashboard <br />

      <button type="button" onClick={getUser}>Get user</button>

      <AccessControl resource="/dashboard/action/create">
      <Button>Create</Button>
      </AccessControl>

      <Button>Update</Button>
      <Button>Delete</Button>
      <Button>Read</Button>
    </>
  )
}

export default Dashboard