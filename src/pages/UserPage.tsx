import { useParams } from "react-router-dom"
// import Posts from "../components/Posts"
import UserForm from "../components/forms/UserForm"
import { Spinner } from "react-bootstrap"
import DeleteForm from "../components/forms/DeleteForm"

export default function UserPage() {

  const { username } = useParams()

  return (
    <>
      <h3 className="text-capitalize">{username}'s Page</h3>
      {!username ? (
        <Spinner />
      ) : (
        <div>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="edit-profile-tab" data-bs-toggle="tab" data-bs-target="#edit-profile" type="button" role="tab" aria-controls="edit-profile" aria-selected="true">Edit Profile</button>
              {/* <button className="nav-link" id="my-trips-tab" data-bs-toggle="tab" data-bs-target="#my-trips" type="button" role="tab" aria-controls="my-trips" aria-selected="false">My Trips</button> */}
              <button className="nav-link" id="delete-account-tab" data-bs-toggle="tab" data-bs-target="#delete-account" type="button" role="tab" aria-controls="delete-account" aria-selected="false">Delete Account</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="edit-profile" role="tabpanel" aria-labelledby="edit-profile-tab" tabIndex={0}><UserForm edit /></div>
            {/* <div className="tab-pane fade" id="my-trips" role="tabpanel" aria-labelledby="my-trips-tab" tabIndex={0}><Posts username={username} /></div> */}
            <div className="tab-pane fade" id="delete-account" role="tabpanel" aria-labelledby="delete-account-tab" tabIndex={0}><DeleteForm /></div>

          </div>
        </div>
      )
      }
    </>
  )
}
