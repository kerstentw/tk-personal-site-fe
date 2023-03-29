
export default function MainIntroPage(props) {
  return (
    <div>
        TK Personal Site
        Connecting To: {`${process.env.REACT_APP_API_URL}`}
    </div>
  )
}