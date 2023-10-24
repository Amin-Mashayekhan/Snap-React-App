import { EditModeDetailsType, TripDetailsFormType, TripDetailsType } from "../types";
import { FormEvent, useContext, useRef, useState } from "react";

import InputComponent from "./InputComponent";
import { Spinner } from "react-bootstrap";
import { Toast } from "./Toast";
import { UserContext } from "../contexts/UserProvider";
import { apiRoot } from "../app.config";
import { useNavigate } from "react-router-dom";

export default function Trips({ userTrips }: { userTrips: TripDetailsType[] }) {
  const [pageLoading, setPageLoading] = useState(false)
  const [editMode, setEditMode] = useState<EditModeDetailsType>({isEditMode: false} as EditModeDetailsType)
  const pickupField = useRef<HTMLInputElement>(null)
  const dropoffField = useRef<HTMLInputElement>(null)
  const numberOfPassengers = useRef<HTMLInputElement>(null)
  const numberOfLuggages = useRef<HTMLInputElement>(null)
  const dateTime = useRef<HTMLInputElement>(null)
  const { user } = useContext(UserContext)
  const navigate = useNavigate();

  
  async function handleSubmitForm(e: FormEvent<HTMLElement>) {
    e.preventDefault()

    const formUserDetails: TripDetailsFormType = {
      pickup: pickupField.current!.value,
      dropoff: dropoffField.current!.value,
      number_of_passengers: numberOfPassengers.current!.value,
      number_of_luggages: numberOfLuggages.current!.value,
      date_time: dateTime.current!.value,
    }
    await registerUser(formUserDetails)
  }


  async function registerUser(formUserDetails: TripDetailsFormType) {
    const endpoint = editMode.isEditMode ? `request/${editMode.requestID}` : 'request'
    setPageLoading(true);
    const res = await fetch(`${apiRoot}/${endpoint}`, {
      method: editMode.isEditMode ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token!}`
      },
      body: JSON.stringify(formUserDetails)
    })
    setPageLoading(false);
    const data = await res.json()
    console.log(data)
    if (res.ok) {
      if (editMode.isEditMode) {
        Toast('success', 'Editing was done successfully.')
      } else {
        Toast('success', 'Registration was done successfully.')
      }
    } else if (res.status === 401) {
      // 401 Unauthorized
      Toast('error', 'For the security of your account, please login again.')
      navigate('/logout')
    } else {
      // clearFormData()
      Toast('error', 'An error occurred, please try again.')

    }
  }



  return (
    <>
      <div className="d-flex mb-2">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add New Trip</button>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------ */}
      <div className="modal modal-lg fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">New Trip</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form className="row g-3" onSubmit={handleSubmitForm}>
                {
                  (pageLoading) ? (
                    <Spinner className='mx-auto mt-5' />
                  ) : (
                    <>
                      <div className="col-md-4">
                        <InputComponent name='pickup' type='text' ref={pickupField} required />
                      </div>
                      <div className="col-md-4">
                        <InputComponent name='dropoff' type='text' ref={dropoffField} required />
                      </div>
                      <div className="col-md-4">
                        <InputComponent name='number_of_passengers' type='text' ref={numberOfPassengers} required />
                      </div>
                      <div className="col-md-4">
                        <InputComponent name='number_of_luggages' type='text' ref={numberOfLuggages}  required />
                      </div>
                      <div className="col-md-4">
                        <InputComponent name='date_time' type='date' ref={dateTime} required />
                      </div>
                    </>

                  )
                }
                <div className="col-12">
                  <button className="btn btn-primary" type="submit" {...(pageLoading && { disabled: true })}>
                    {
                      pageLoading ? (
                        <div>
                          <span className="spinner-border spinner-border-sm me-1" aria-hidden="true" />
                          <span role="status">Loading...</span>
                        </div>

                      ) : editMode.isEditMode ? 'Edit' : 'Add'
                    }
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------ */}

      <div className='table-responsive' >
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Number</th>
              <th>ID</th>
              <th>Drop Off</th>
              <th>Pickup</th>
              <th>Number of Passengers</th>
              <th>Number of Luggages</th>
              <th>Date Time</th>
            </tr>
          </thead>
          <tbody>
            {
              userTrips.length > 0 ? (userTrips.map((trip: TripDetailsType, i: number) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{trip.id}</td>
                  <td>{trip.dropoff}</td>
                  <td>{trip.pickup}</td>
                  <td>{trip.number_of_passengers}</td>
                  <td>{trip.number_of_luggages}</td>
                  <td>{trip.date_time}</td>
                </tr>
              )
              )) : (
                <tr>
                  <th colSpan={7}>There is no trips yet.</th>
                </tr>
              )
            }
          </tbody>
        </table>
      </div >
    </>
  )
}
