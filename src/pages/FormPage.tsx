import Body from "../components/Body";

export default function FormPage(props: { children: JSX.Element }) {
  return (
    <Body sidebar={false}>
      { props.children }
    </Body>
  )
}
